import { Meal } from '@/constants/meals';
import { RecentlyCookedMeal } from '@/hooks/use-preferences';
import { kitchenInventory } from '@/constants/inventory';
import { substitutions } from '@/constants/substitutions';

export interface SubstitutionRecommendation {
  missingIngredientId: string;
  substituteIngredientId: string;
  noteEn: string;
  noteTa: string;
}

export interface KitchenInsights {
  utilizationPercentage: number;
  expiringAlerts: Array<{ ingredientId: string; priority: 'high' | 'medium' }>;
  leftoverSuggestions: string[]; // translation keys
  substitutions: SubstitutionRecommendation[];
  diversityScore: number; // 0-100
}

/**
 * Calculates a variety index (0-100%) based on repetitions in the cooking history.
 */
export const calculateDiversityScore = (history: RecentlyCookedMeal[]): number => {
  if (history.length <= 1) return 100;

  const nameCounts: Record<string, number> = {};
  history.forEach((item) => {
    const key = item.name.toLowerCase().trim();
    nameCounts[key] = (nameCounts[key] || 0) + 1;
  });

  let repetitions = 0;
  Object.values(nameCounts).forEach((count) => {
    if (count > 1) {
      repetitions += count - 1;
    }
  });

  // Deduct 25 points for each repetition in history
  const deduction = repetitions * 25;
  return Math.max(0, Math.min(100, 100 - deduction));
};

/**
 * Compiles a unified KitchenInsights report for a specific recommended meal.
 * Pure deterministic function with zero React/UI dependencies.
 */
export const getKitchenInsights = (
  meal: Meal,
  selectedIngredientIds: string[],
  history: RecentlyCookedMeal[]
): KitchenInsights => {
  // 1. Calculate Utilization Rate
  const matchingSelected = selectedIngredientIds.filter((id) =>
    meal.requiredIngredientIds.includes(id)
  ).length;
  const utilizationPercentage =
    selectedIngredientIds.length > 0
      ? Math.round((matchingSelected / selectedIngredientIds.length) * 100)
      : 0;

  // 2. Weekly Meal Diversity Score
  const diversityScore = calculateDiversityScore(history);

  // 3. Expiring Alerts
  // Find selected ingredients that are perishable (high/medium expiry) but NOT utilized in this meal
  const expiringAlerts: Array<{ ingredientId: string; priority: 'high' | 'medium' }> = [];
  selectedIngredientIds.forEach((id) => {
    if (!meal.requiredIngredientIds.includes(id)) {
      const inv = kitchenInventory.find((item) => item.ingredientId === id);
      if (inv && (inv.expiryPriority === 'high' || inv.expiryPriority === 'medium')) {
        expiringAlerts.push({
          ingredientId: id,
          priority: inv.expiryPriority,
        });
      }
    }
  });

  // 4. Ingredient Substitution Suggestions
  const matchedSubstitutions: SubstitutionRecommendation[] = [];
  const missingIngredientIds = meal.requiredIngredientIds.filter(
    (id) => !selectedIngredientIds.includes(id)
  );

  missingIngredientIds.forEach((missingId) => {
    // Check if there is a substitution pair where substitute is selected in the kitchen
    const match = substitutions.find(
      (sub) =>
        sub.originalIngredientId === missingId &&
        selectedIngredientIds.includes(sub.substituteIngredientId)
    );
    if (match) {
      matchedSubstitutions.push({
        missingIngredientId: missingId,
        substituteIngredientId: match.substituteIngredientId,
        noteEn: match.enNote,
        noteTa: match.taNote,
      });
    }
  });

  // 5. Leftover Reuse Suggestions
  const leftoverSuggestions: string[] = [];
  const hasHistoryDish = (keyword: string): boolean => {
    return history.some((item) => item.name.toLowerCase().includes(keyword));
  };

  // Rule: Repurpose leftover boiled rice for Lemon Rice / Curd Rice / Coconut Rice
  if (
    (meal.id === 'curd_rice' || meal.id === 'lemon_rice' || meal.id === 'coconut_rice') &&
    (hasHistoryDish('rice') || hasHistoryDish('sadham') || hasHistoryDish('meals'))
  ) {
    leftoverSuggestions.push('leftoverBoiledRice');
  }

  // Rule: Repurpose lunch Sambar alongside dinner Dosa / Roti
  if (
    (meal.id === 'plain_dosa' || meal.id === 'rava_dosa' || meal.id === 'ragi_roti') &&
    hasHistoryDish('sambar')
  ) {
    leftoverSuggestions.push('leftoverSambar');
  }

  return {
    utilizationPercentage,
    expiringAlerts,
    leftoverSuggestions,
    substitutions: matchedSubstitutions,
    diversityScore,
  };
};
