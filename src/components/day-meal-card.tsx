'use client';

import React from 'react';
import { Meal } from '@/constants/meals';
import { MealType } from '@/constants/preferences';
import { useLanguage } from '@/context/language-context';
import { Clock, RefreshCw } from 'lucide-react';

interface DayMealCardProps {
  meal: Meal;
  dayId: string;
  mealType: MealType;
  onRegenerate: (dayId: string, mealType: MealType) => void;
}

export const DayMealCard = ({ meal, dayId, mealType, onRegenerate }: DayMealCardProps) => {
  const { t, language } = useLanguage();

  const mealName = language === 'en' ? meal.en : meal.ta;

  const getSlotLabel = () => {
    if (mealType === 'breakfast') return t.weekly.breakfastSlot;
    if (mealType === 'lunch') return t.weekly.lunchSlot;
    return t.weekly.dinnerSlot;
  };

  return (
    <div className="p-3.5 border border-border bg-white rounded-lg font-sans flex flex-col justify-between gap-3 shadow-xs hover:border-kitchen-clay/20 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none">
            {getSlotLabel()}
          </span>
          <button
            type="button"
            onClick={() => onRegenerate(dayId, mealType)}
            className="p-1 rounded text-muted-foreground hover:text-kitchen-clay hover:bg-kitchen-clay/5 transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40"
            title={t.weekly.regenerateTooltip}
            aria-label={`Regenerate ${getSlotLabel()} for ${dayId}`}
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
        
        <span className="font-extrabold text-sm text-kitchen-charcoal block leading-snug mt-1.5 min-h-[2.5rem]">
          {mealName}
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1.5 border-t border-border/40">
        <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span className="leading-none font-normal">
          {meal.cookingTime === '60m' ? (language === 'en' ? '60 mins' : '60 நிமி') : (language === 'en' ? meal.cookingTime.replace('m', ' mins') : meal.cookingTime.replace('m', ' நிமி'))}
        </span>
        <span className="w-1 h-1 rounded-full bg-kitchen-clay/30 shrink-0 ml-1" aria-hidden="true" />
        <span className="capitalize text-[10px] font-bold leading-none">{meal.diet === 'veg' ? t.diets.veg : t.diets.nonveg}</span>
      </div>
    </div>
  );
};
