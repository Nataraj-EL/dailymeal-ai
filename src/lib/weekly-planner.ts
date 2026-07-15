import { Meal, meals } from '@/constants/meals';
import { UserPreferences } from '@/hooks/use-preferences';
import { MealType } from '@/constants/preferences';
import { getRecommendations } from './recommendation-engine';

export interface DailyPlan {
  dayId: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export type WeeklyPlan = Record<string, DailyPlan>;

export interface WeeklyPlanResult {
  plan: WeeklyPlan;
  diversityScore: number; // 0-100
  utilization: number; // % of selected ingredients used across the week
  groceryCount: number; // count of unique missing ingredients to buy
}

const DAYS_OF_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

/**
 * Calculates recipe variety index across all 21 slots in the weekly plan.
 */
const calculateWeeklyDiversity = (plan: WeeklyPlan): number => {
  const mealCounts: Record<string, number> = {};
  let totalMeals = 0;

  Object.values(plan).forEach((dayPlan) => {
    const slots: MealType[] = ['breakfast', 'lunch', 'dinner'];
    slots.forEach((slot) => {
      const meal = dayPlan[slot];
      if (meal) {
        mealCounts[meal.id] = (mealCounts[meal.id] || 0) + 1;
        totalMeals++;
      }
    });
  });

  if (totalMeals === 0) return 100;

  let repetitions = 0;
  Object.values(mealCounts).forEach((count) => {
    if (count > 1) {
      repetitions += count - 1;
    }
  });

  // Deduct 12 points per duplicate meal to scale score between 0 and 100
  return Math.max(0, Math.min(100, 100 - repetitions * 12));
};

/**
 * Calculates what percentage of the user's selected ingredients are utilized in the weekly plan.
 */
const calculateWeeklyUtilization = (plan: WeeklyPlan, selectedIngredients: string[]): number => {
  if (selectedIngredients.length === 0) return 0;

  const allRequiredIds = new Set<string>();
  Object.values(plan).forEach((dayPlan) => {
    const slots: MealType[] = ['breakfast', 'lunch', 'dinner'];
    slots.forEach((slot) => {
      const meal = dayPlan[slot];
      if (meal) {
        meal.requiredIngredientIds.forEach((id) => allRequiredIds.add(id));
      }
    });
  });

  const usedSelected = selectedIngredients.filter((id) => allRequiredIds.has(id)).length;
  return Math.round((usedSelected / selectedIngredients.length) * 100);
};

/**
 * Compiles unique missing ingredients count for the week.
 */
const calculateWeeklyGroceryCount = (plan: WeeklyPlan, selectedIngredients: string[]): number => {
  const allRequiredIds = new Set<string>();
  Object.values(plan).forEach((dayPlan) => {
    const slots: MealType[] = ['breakfast', 'lunch', 'dinner'];
    slots.forEach((slot) => {
      const meal = dayPlan[slot];
      if (meal) {
        meal.requiredIngredientIds.forEach((id) => allRequiredIds.add(id));
      }
    });
  });

  // Unique missing ingredients that are NOT in selectedIngredients
  const missingCount = Array.from(allRequiredIds).filter((id) => !selectedIngredients.includes(id)).length;
  return missingCount;
};

/**
 * Fallback finder to select a meal matching diet preference if candidates list is empty.
 */
const findFallbackMeal = (mealType: MealType, diet: 'veg' | 'non-veg', avoidIds: string[]): Meal => {
  const candidates = meals.filter((meal) => {
    if (!meal.mealTypes.includes(mealType)) return false;
    if (diet === 'veg' && meal.diet === 'non-veg') return false;
    return !meal.requiredIngredientIds.some((id) => avoidIds.includes(id));
  });

  if (candidates.length > 0) {
    return candidates[0];
  }
  // Ultimate hard fallback matching the slot
  return meals.find((meal) => meal.mealTypes.includes(mealType)) || meals[0];
};

/**
 * Generates a complete 7-day plan utilizing weighted scoring to minimize repetition and maximize reuse.
 * Pure deterministic function.
 */
export const generateWeeklyPlan = (
  selectedIngredients: string[],
  preferences: UserPreferences
): WeeklyPlanResult => {
  const plan: WeeklyPlan = {};
  const scheduledMealIds: string[] = [];
  const scheduledMissingIngredientIds = new Set<string>();

  // Initialize empty plan mapping
  DAYS_OF_WEEK.forEach((dayId) => {
    plan[dayId] = {
      dayId,
      breakfast: null as unknown as Meal,
      lunch: null as unknown as Meal,
      dinner: null as unknown as Meal,
    };
  });

  // Loop through days and slots sequentially
  DAYS_OF_WEEK.forEach((dayId) => {
    const slots: MealType[] = ['breakfast', 'lunch', 'dinner'];

    slots.forEach((slot) => {
      // Get base recommendation candidates
      const recommendations = getRecommendations(selectedIngredients, preferences, slot);

      if (recommendations.length === 0) {
        // Find fallback matching preferences
        plan[dayId][slot] = findFallbackMeal(slot, preferences.diet, preferences.avoidIngredientIds);
        scheduledMealIds.push(plan[dayId][slot].id);
        return;
      }

      // Rescore candidates using weighted rules
      const weightedCandidates = recommendations.map((rec) => {
        let score = rec.score;

        // 1. Repetition Penalties
        const occurrences = scheduledMealIds.filter((id) => id === rec.meal.id).length;
        if (occurrences > 0) {
          score -= occurrences * 40; // Deduct 40 points per occurrence in the week
        }

        // Penalty if already scheduled on the SAME day in a different slot
        const dayPlan = plan[dayId];
        const sameDayDuplicate =
          (dayPlan.breakfast && dayPlan.breakfast.id === rec.meal.id) ||
          (dayPlan.lunch && dayPlan.lunch.id === rec.meal.id) ||
          (dayPlan.dinner && dayPlan.dinner.id === rec.meal.id);
        if (sameDayDuplicate) {
          score -= 100;
        }

        // 2. Ingredient Reuse Bonus
        // Award points if the candidate uses missing ingredients that are ALREADY scheduled in the grocery list
        let reuseBonus = 0;
        rec.meal.requiredIngredientIds.forEach((ingId) => {
          if (!selectedIngredients.includes(ingId) && scheduledMissingIngredientIds.has(ingId)) {
            reuseBonus += 5; // Add 5 points per shared missing ingredient
          }
        });
        score += Math.min(20, reuseBonus); // Max reuse bonus capped at 20 points

        return { rec, weight: score };
      });

      // Sort by weight descending
      weightedCandidates.sort((a, b) => b.weight - a.weight);

      const chosenMeal = weightedCandidates[0].rec.meal;
      plan[dayId][slot] = chosenMeal;
      scheduledMealIds.push(chosenMeal.id);

      // Record missing ingredients for future reuse checks
      chosenMeal.requiredIngredientIds.forEach((id) => {
        if (!selectedIngredients.includes(id)) {
          scheduledMissingIngredientIds.add(id);
        }
      });
    });
  });

  const diversityScore = calculateWeeklyDiversity(plan);
  const utilization = calculateWeeklyUtilization(plan, selectedIngredients);
  const groceryCount = calculateWeeklyGroceryCount(plan, selectedIngredients);

  return {
    plan,
    diversityScore,
    utilization,
    groceryCount,
  };
};

/**
 * Regenerates a single meal slot, penalizing currently scheduled item to select an alternative.
 * Pure deterministic function.
 */
export const regenerateMeal = (
  currentPlan: WeeklyPlan,
  dayId: string,
  mealType: MealType,
  selectedIngredients: string[],
  preferences: UserPreferences
): WeeklyPlanResult => {
  const updatedPlan = { ...currentPlan };
  const currentMealId = updatedPlan[dayId]?.[mealType]?.id;

  // Collect scheduled meal IDs (excluding the target slot)
  const scheduledMealIds: string[] = [];
  const scheduledMissingIngredientIds = new Set<string>();

  DAYS_OF_WEEK.forEach((dId) => {
    const slots: MealType[] = ['breakfast', 'lunch', 'dinner'];
    slots.forEach((s) => {
      if (dId === dayId && s === mealType) return;
      const meal = updatedPlan[dId]?.[s];
      if (meal) {
        scheduledMealIds.push(meal.id);
        meal.requiredIngredientIds.forEach((ingId) => {
          if (!selectedIngredients.includes(ingId)) {
            scheduledMissingIngredientIds.add(ingId);
          }
        });
      }
    });
  });

  // Get recommendations for slot
  const recommendations = getRecommendations(selectedIngredients, preferences, mealType);

  if (recommendations.length === 0) {
    updatedPlan[dayId][mealType] = findFallbackMeal(mealType, preferences.diet, preferences.avoidIngredientIds);
  } else {
    // Score alternative candidates, heavily penalizing currentMealId
    const weightedCandidates = recommendations.map((rec) => {
      let score = rec.score;

      // Heavy penalty for the item we are replacing
      if (rec.meal.id === currentMealId) {
        score -= 200;
      }

      // Repetition Penalties
      const occurrences = scheduledMealIds.filter((id) => id === rec.meal.id).length;
      if (occurrences > 0) {
        score -= occurrences * 40;
      }

      // Same day duplicates check
      const dayPlan = updatedPlan[dayId];
      const sameDayDuplicate =
        (mealType !== 'breakfast' && dayPlan.breakfast && dayPlan.breakfast.id === rec.meal.id) ||
        (mealType !== 'lunch' && dayPlan.lunch && dayPlan.lunch.id === rec.meal.id) ||
        (mealType !== 'dinner' && dayPlan.dinner && dayPlan.dinner.id === rec.meal.id);
      if (sameDayDuplicate) {
        score -= 100;
      }

      // Ingredient Reuse Bonus
      let reuseBonus = 0;
      rec.meal.requiredIngredientIds.forEach((ingId) => {
        if (!selectedIngredients.includes(ingId) && scheduledMissingIngredientIds.has(ingId)) {
          reuseBonus += 5;
        }
      });
      score += Math.min(20, reuseBonus);

      return { rec, weight: score };
    });

    // Sort by weight descending
    weightedCandidates.sort((a, b) => b.weight - a.weight);
    updatedPlan[dayId][mealType] = weightedCandidates[0].rec.meal;
  }

  const diversityScore = calculateWeeklyDiversity(updatedPlan);
  const utilization = calculateWeeklyUtilization(updatedPlan, selectedIngredients);
  const groceryCount = calculateWeeklyGroceryCount(updatedPlan, selectedIngredients);

  return {
    plan: updatedPlan,
    diversityScore,
    utilization,
    groceryCount,
  };
};
