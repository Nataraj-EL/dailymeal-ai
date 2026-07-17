'use client';

import React from 'react';
import { Recipe } from '@/constants/recipes';
import { useLanguage } from '@/context/language-context';
import { ingredients as allIngredients } from '@/constants/ingredients';
import { RecipeSteps } from './recipe-steps';
import { NutritionCard } from './nutrition-card';
import { CookingTips } from './cooking-tips';
import { BookOpen, CheckCircle2, AlertCircle, Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  selectedIngredientIds: string[]; // To highlight available vs missing ingredients
}

export const RecipeCard = ({ recipe, selectedIngredientIds }: RecipeCardProps) => {
  const { language, t } = useLanguage();

  const getDifficultyColor = (diff: 'easy' | 'medium' | 'hard') => {
    switch (diff) {
      case 'easy':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'hard':
        return 'bg-red-50 text-red-700 border-red-200';
    }
  };

  const getDifficultyLabel = (diff: 'easy' | 'medium' | 'hard') => {
    switch (diff) {
      case 'easy':
        return t.recipe.difficultyEasy;
      case 'medium':
        return t.recipe.difficultyMedium;
      case 'hard':
        return t.recipe.difficultyHard;
    }
  };

  return (
    <div className="border border-border bg-white rounded-lg p-6 font-sans space-y-6 shadow-xs">
      {/* Recipe Header */}
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <BookOpen className="w-5 h-5 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h3 className="text-base md:text-lg font-extrabold text-kitchen-charcoal">
          {t.recipe.viewRecipeTitle}
        </h3>
      </div>

      {/* Preparation Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-gray-50/50 p-4 rounded-xl border border-border/40">
        {/* Prep Time */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.prepTime}
          </span>
          <span className="text-xs md:text-sm font-extrabold text-kitchen-charcoal mt-0.5 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span>{recipe.prepTime}</span>
          </span>
        </div>

        {/* Cooking Time */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.cookingTime}
          </span>
          <span className="text-xs md:text-sm font-extrabold text-kitchen-charcoal mt-0.5 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span>{recipe.cookingTime}</span>
          </span>
        </div>

        {/* Servings */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.servings}
          </span>
          <span className="text-xs md:text-sm font-extrabold text-kitchen-charcoal mt-0.5 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-muted-foreground" />
            <span>{recipe.servings} {language === 'en' ? 'persons' : 'நபர்கள்'}</span>
          </span>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.difficulty}
          </span>
          <div className="mt-1">
            <span className={`inline-flex px-2 py-0.5 rounded border text-[10px] font-extrabold uppercase tracking-wide ${getDifficultyColor(recipe.difficulty)}`}>
              {getDifficultyLabel(recipe.difficulty)}
            </span>
          </div>
        </div>
      </div>

      {/* Ingredient Detailed List with Quantities */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-kitchen-charcoal uppercase tracking-wider block">
          {t.recommendations.requiredIngredients}
        </span>
        <div className="grid sm:grid-cols-2 gap-2">
          {recipe.ingredients.map((recipeIng) => {
            const ingDetail = allIngredients.find((i) => i.id === recipeIng.ingredientId);
            const name = ingDetail
              ? (language === 'en' ? ingDetail.en : ingDetail.ta)
              : recipeIng.ingredientId;
            const emoji = ingDetail?.emoji || '🍲';
            const quantityStr = language === 'en' ? recipeIng.quantity.en : recipeIng.quantity.ta;
            const isAvailable = selectedIngredientIds.includes(recipeIng.ingredientId);

            return (
              <div
                key={recipeIng.ingredientId}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-colors ${
                  isAvailable
                    ? 'border-kitchen-leaf/25 bg-kitchen-leaf/5 text-kitchen-charcoal'
                    : 'border-border bg-gray-50/20 text-muted-foreground'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {isAvailable ? (
                    <CheckCircle2 className="w-4 h-4 text-kitchen-leaf shrink-0" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-muted-foreground/45 shrink-0" aria-hidden="true" />
                  )}
                  <span className="text-base shrink-0" aria-hidden="true">{emoji}</span>
                  <span className="font-bold truncate">{name}</span>
                </div>
                <span className={`font-extrabold ml-2 shrink-0 ${isAvailable ? 'text-kitchen-leaf' : 'text-muted-foreground/70'}`}>
                  {quantityStr}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Steps Component */}
      <RecipeSteps steps={recipe.steps} />

      {/* Nutrition Details Component */}
      <NutritionCard nutrition={recipe.nutrition} />

      {/* Tips and Storage Component */}
      <CookingTips
        chefTips={recipe.chefTips}
        storageLeftoverTips={recipe.storageLeftoverTips}
      />
    </div>
  );
};
