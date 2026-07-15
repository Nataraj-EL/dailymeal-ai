'use client';

import React from 'react';
import { AIContext } from '@/lib/ai-context';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { Database } from 'lucide-react';

interface AIInsightsProps {
  context: AIContext;
}

export const AIInsights = ({ context }: AIInsightsProps) => {
  const { t, language } = useLanguage();
  const { recommendedMeal, matchScore, missingIngredients, userPreferences } = context;

  const getIngredientName = (id: string) => {
    const ing = ingredients.find((i) => i.id === id);
    return ing ? (language === 'en' ? ing.en : ing.ta) : id;
  };

  const mealName = recommendedMeal
    ? (language === 'en' ? recommendedMeal.en : recommendedMeal.ta)
    : t.preferences.none;

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans space-y-3">
      <div className="flex items-center gap-2">
        <Database className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-kitchen-charcoal leading-none">
          {t.assistant.insightsHeader}
        </h3>
      </div>

      <p className="text-xs text-muted-foreground font-normal leading-relaxed">
        {t.assistant.insightsIntro}
      </p>

      <div className="space-y-3.5 pt-1 text-xs">
        {/* Recommended Meal */}
        <div>
          <span className="font-bold text-kitchen-charcoal block mb-0.5">
            {t.assistant.insightsMeal}
          </span>
          <span className="text-muted-foreground font-normal">{mealName}</span>
        </div>

        {/* Match Score */}
        <div>
          <span className="font-bold text-kitchen-charcoal block mb-0.5">
            {t.assistant.insightsScore}
          </span>
          <span className="text-muted-foreground font-normal">{matchScore}%</span>
        </div>

        {/* Avoid List */}
        <div>
          <span className="font-bold text-kitchen-charcoal block mb-0.5">
            {t.assistant.insightsAvoid}
          </span>
          <span className="text-muted-foreground font-normal">
            {userPreferences.avoidIngredientIds.length > 0
              ? userPreferences.avoidIngredientIds.map(getIngredientName).join(', ')
              : t.preferences.none}
          </span>
        </div>

        {/* Missing Ingredients */}
        <div>
          <span className="font-bold text-kitchen-charcoal block mb-0.5">
            {t.assistant.insightsMissing}
          </span>
          <span className="text-muted-foreground font-normal">
            {missingIngredients.length > 0
              ? missingIngredients.map(getIngredientName).join(', ')
              : t.preferences.none}
          </span>
        </div>
      </div>
    </div>
  );
};
