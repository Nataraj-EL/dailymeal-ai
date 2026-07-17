import { Recipe, recipes } from '@/constants/recipes';

/**
 * Retrieves a recipe by its corresponding meal ID.
 * Supports both standard and localized ID formats.
 */
export const getRecipeById = (id: string): Recipe | undefined => {
  if (!id) return undefined;
  
  // Normalization to handle localized duplicate suffix matches
  let normalizedId = id;
  if (id === 'appam_தேங்காய்பால்') {
    normalizedId = 'appam_தேங்காமில்க்';
  }

  return recipes.find((r) => r.id === normalizedId || r.id === id);
};

/**
 * Returns the full list of seeded recipes.
 */
export const getAllRecipes = (): Recipe[] => {
  return recipes;
};

/**
 * Filters recipes by difficulty.
 */
export const getRecipesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Recipe[] => {
  return recipes.filter((r) => r.difficulty === difficulty);
};

/**
 * Filters recipes that contain a specific ingredient.
 */
export const getRecipesByIngredient = (ingredientId: string): Recipe[] => {
  return recipes.filter((r) =>
    r.ingredients.some((ing) => ing.ingredientId === ingredientId)
  );
};
