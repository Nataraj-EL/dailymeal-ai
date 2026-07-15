'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface IngredientChecklistProps {
  matchingIngredientIds: string[];
  missingIngredientIds: string[];
}

export const IngredientChecklist = ({
  matchingIngredientIds,
  missingIngredientIds,
}: IngredientChecklistProps) => {
  const { t, language } = useLanguage();

  const getIngredientDetail = (id: string) => {
    const ing = ingredients.find((i) => i.id === id);
    if (!ing) return { name: id, emoji: '🍲' };
    return {
      name: language === 'en' ? ing.en : ing.ta,
      emoji: ing.emoji,
    };
  };

  return (
    <div className="space-y-3 font-sans">
      <span className="text-xs font-bold text-kitchen-charcoal uppercase tracking-wider block mb-2">
        {t.recommendations.requiredIngredients}
      </span>
      
      <div className="grid sm:grid-cols-2 gap-2">
        {/* Available (Matching) */}
        {matchingIngredientIds.map((id) => {
          const { name, emoji } = getIngredientDetail(id);
          return (
            <div
              key={id}
              className="flex items-center gap-2.5 p-2 rounded-lg border border-kitchen-leaf/20 bg-kitchen-leaf/5 text-kitchen-charcoal text-xs font-semibold"
            >
              <CheckCircle2 className="w-4 h-4 text-kitchen-leaf shrink-0" aria-hidden="true" />
              <span className="text-lg shrink-0" aria-hidden="true">{emoji}</span>
              <span className="truncate">{name}</span>
            </div>
          );
        })}

        {/* Missing */}
        {missingIngredientIds.map((id) => {
          const { name, emoji } = getIngredientDetail(id);
          return (
            <div
              key={id}
              className="flex items-center gap-2.5 p-2 rounded-lg border border-border bg-gray-50/50 text-muted-foreground text-xs"
            >
              <AlertCircle className="w-4 h-4 text-muted-foreground/50 shrink-0" aria-hidden="true" />
              <span className="text-lg shrink-0 opacity-60" aria-hidden="true">{emoji}</span>
              <span className="truncate font-normal">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
