import { Meal } from '@/constants/meals';
import { UserPreferences } from '@/hooks/use-preferences';
import { KitchenInsights, getKitchenInsights } from './kitchen-intelligence';
import { getRecommendations } from './recommendation-engine';
import { MealType } from '@/constants/preferences';
import { InventoryItem } from '@/lib/inventory-manager';

export interface AIContext {
  recommendedMeal: Meal | null;
  matchScore: number;
  missingIngredients: string[];
  kitchenInsights: KitchenInsights | null;
  userPreferences: UserPreferences;
}

/**
 * Builds the strict structured AI context based on active ingredient choices and user preferences.
 * Pure deterministic function with zero UI or React dependencies.
 */
export const buildAIContext = (
  selectedIngredients: string[],
  preferences: UserPreferences,
  activeTab: MealType,
  inventory?: InventoryItem[]
): AIContext => {
  const recommendations = getRecommendations(selectedIngredients, preferences, activeTab);
  
  if (recommendations.length === 0) {
    return {
      recommendedMeal: null,
      matchScore: 0,
      missingIngredients: [],
      kitchenInsights: null,
      userPreferences: preferences,
    };
  }

  const topRec = recommendations[0];
  const insights = getKitchenInsights(
    topRec.meal,
    selectedIngredients,
    preferences.recentlyCooked,
    inventory
  );

  return {
    recommendedMeal: topRec.meal,
    matchScore: topRec.score,
    missingIngredients: topRec.missingIngredientIds,
    kitchenInsights: insights,
    userPreferences: preferences,
  };
};
