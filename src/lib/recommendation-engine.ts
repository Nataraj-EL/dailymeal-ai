import { Meal, meals } from '@/constants/meals';
import { UserPreferences } from '@/hooks/use-preferences';
import { MealType } from '@/constants/preferences';

export interface Recommendation {
  meal: Meal;
  score: number; // 0-100
  confidence: 'high' | 'medium' | 'low';
  matchingIngredientIds: string[];
  missingIngredientIds: string[];
  reasonKeys: string[];
}

// Reusable Scoring Constants
export const BONUS_TIME_MATCH = 15;
export const PENALTY_RECENCY = 50;
export const CONFIDENCE_HIGH_THRESHOLD = 80;
export const CONFIDENCE_MEDIUM_THRESHOLD = 50;

// Time mapping helper to convert string time options to numbers
const timeToMinutes = (time: '15m' | '30m' | '60m'): number => {
  if (time === '15m') return 15;
  if (time === '30m') return 30;
  return 60;
};

/**
 * Pure deterministic recommendation engine that scores and ranks meals based on selected ingredients and preferences.
 * Zero React/UI dependency.
 */
export const getRecommendations = (
  selectedIngredientIds: string[],
  preferences: UserPreferences,
  mealType: MealType
): Recommendation[] => {
  const userTimeLimit = timeToMinutes(preferences.cookingTime);

  const results: Recommendation[] = [];

  for (const meal of meals) {
    // 1. FILTER STEP

    // Filter by selected meal type
    if (!meal.mealTypes.includes(mealType)) {
      continue;
    }

    // Exclude non-veg meals if vegetarian preference is selected
    if (preferences.diet === 'veg' && meal.diet === 'non-veg') {
      continue;
    }

    // Exclude if meal contains any avoided ingredients
    const containsAvoided = meal.requiredIngredientIds.some((id) =>
      preferences.avoidIngredientIds.includes(id)
    );
    if (containsAvoided) {
      continue;
    }

    // Exclude meals with zero matching ingredients (non-viable recommendations)
    const matchingIngredientIds = meal.requiredIngredientIds.filter((id) =>
      selectedIngredientIds.includes(id)
    );
    if (matchingIngredientIds.length === 0) {
      continue;
    }

    // 2. SCORING STEP

    // Base Ingredient Match Score (0 to 100)
    const totalRequiredCount = meal.requiredIngredientIds.length;
    const matchRatio = matchingIngredientIds.length / totalRequiredCount;
    const baseScore = matchRatio * 100;

    let score = baseScore;
    const reasonKeys: string[] = [];

    // Time Match Bonus (+15)
    const mealTime = timeToMinutes(meal.cookingTime);
    const isTimeMatch = mealTime <= userTimeLimit;
    if (isTimeMatch) {
      score += BONUS_TIME_MATCH;
      reasonKeys.push('timeMatch');
    }

    // Recency Penalty (-50)
    const isRecentlyCooked = preferences.recentlyCooked.some(
      (historyMeal) =>
        historyMeal.name.toLowerCase() === meal.en.toLowerCase() ||
        historyMeal.name.toLowerCase() === meal.ta.toLowerCase()
    );
    if (isRecentlyCooked) {
      score -= PENALTY_RECENCY;
    } else {
      reasonKeys.push('noHistoryConflict');
    }

    // Clamp score between 0 and 100
    const finalScore = Math.max(0, Math.min(100, Math.round(score)));

    // Categorize Confidence Level
    let confidence: 'high' | 'medium' | 'low' = 'low';
    if (finalScore >= CONFIDENCE_HIGH_THRESHOLD) {
      confidence = 'high';
    } else if (finalScore >= CONFIDENCE_MEDIUM_THRESHOLD) {
      confidence = 'medium';
    }

    // Add remaining localized reason keys
    if (preferences.diet === 'veg') {
      reasonKeys.push('dietMatch');
    }
    if (matchRatio >= 0.7) {
      reasonKeys.push('highIngredientMatch');
    }

    const missingIngredientIds = meal.requiredIngredientIds.filter(
      (id) => !selectedIngredientIds.includes(id)
    );

    results.push({
      meal,
      score: finalScore,
      confidence,
      matchingIngredientIds,
      missingIngredientIds,
      reasonKeys,
    });
  }

  // Rank by score descending, with total required count as tie-breaker (simpler meal ranks higher)
  return results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.meal.requiredIngredientIds.length - b.meal.requiredIngredientIds.length;
  });
};
