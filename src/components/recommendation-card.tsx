'use client';

import React from 'react';
import { Recommendation } from '@/lib/recommendation-engine';
import { useLanguage } from '@/context/language-context';
import { MatchScore } from './match-score';
import { RecommendationReason } from './recommendation-reason';
import { IngredientChecklist } from './ingredient-checklist';
import { Clock } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
  isAlternative?: boolean;
  onSelect?: () => void;
}

export const RecommendationCard = ({
  recommendation,
  isAlternative = false,
  onSelect,
}: RecommendationCardProps) => {
  const { language, t } = useLanguage();
  const { meal, score, confidence, matchingIngredientIds, missingIngredientIds, reasonKeys } = recommendation;

  const mealName = language === 'en' ? meal.en : meal.ta;

  if (isAlternative) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className="flex items-center justify-between gap-4 p-4 border border-border bg-white rounded-lg text-left w-full hover:border-kitchen-clay/35 hover:bg-kitchen-cream/5 transition-all cursor-pointer font-sans focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40"
      >
        <div className="min-w-0 flex-1">
          <span className="font-bold text-sm text-kitchen-charcoal block truncate">
            {mealName}
          </span>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-normal">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{meal.cookingTime === '60m' ? (language === 'en' ? '60 mins' : '60 நிமி') : (language === 'en' ? meal.cookingTime.replace('m', ' mins') : meal.cookingTime.replace('m', ' நிமி'))}</span>
            </span>
            <span className="text-border" aria-hidden="true">|</span>
            <span className="capitalize font-normal">{meal.diet === 'veg' ? t.diets.veg : t.diets.nonveg}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0 self-center">
          <span className="text-xs font-bold text-kitchen-clay">{score}% match</span>
        </div>
      </button>
    );
  }

  return (
    <div className="border border-border bg-white rounded-lg p-6 font-sans space-y-6">
      {/* Title and Scoring Summary */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <span className="inline-flex px-2 py-0.5 rounded bg-kitchen-clay/10 text-kitchen-clay text-[10px] font-bold uppercase tracking-wider mb-2">
            {t.nav.brand} Recommendation
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-kitchen-charcoal tracking-tight">
            {mealName}
          </h2>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-normal">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{meal.cookingTime === '60m' ? (language === 'en' ? '60 mins' : '60 நிமி') : (language === 'en' ? meal.cookingTime.replace('m', ' mins') : meal.cookingTime.replace('m', ' நிமி'))}</span>
            </span>
            <span className="text-border" aria-hidden="true">|</span>
            <span className="capitalize font-normal">{meal.diet === 'veg' ? t.diets.veg : t.diets.nonveg}</span>
          </div>
        </div>

        <div className="shrink-0">
          <MatchScore score={score} confidence={confidence} />
        </div>
      </div>

      {/* Localized Reasoning Bullet Lines */}
      <RecommendationReason reasonKeys={reasonKeys} />

      {/* Ingredient Checklist */}
      <IngredientChecklist
        matchingIngredientIds={matchingIngredientIds}
        missingIngredientIds={missingIngredientIds}
      />
    </div>
  );
};
