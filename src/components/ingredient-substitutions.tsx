'use client';

import React from 'react';
import { SubstitutionRecommendation } from '@/lib/kitchen-intelligence';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface IngredientSubstitutionsProps {
  substitutions: SubstitutionRecommendation[];
}

export const IngredientSubstitutions = ({ substitutions }: IngredientSubstitutionsProps) => {
  const { t, language } = useLanguage();

  if (substitutions.length === 0) return null;

  const getIngredientDetail = (id: string) => {
    const ing = ingredients.find((i) => i.id === id);
    if (!ing) return { name: id, emoji: '🍲' };
    return {
      name: language === 'en' ? ing.en : ing.ta,
      emoji: ing.emoji,
    };
  };

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans space-y-3">
      <div className="flex items-center gap-2">
        <HelpCircle className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-kitchen-charcoal leading-none">
          {t.insights.substitutionsTitle}
        </h3>
      </div>

      <p className="text-xs text-muted-foreground font-normal">
        {t.insights.substitutionsDesc}
      </p>

      <div className="space-y-2">
        {substitutions.map((sub, i) => {
          const orig = getIngredientDetail(sub.missingIngredientId);
          const replace = getIngredientDetail(sub.substituteIngredientId);
          const note = language === 'en' ? sub.noteEn : sub.noteTa;

          return (
            <div key={i} className="p-3 border border-border rounded-lg bg-gray-50/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-kitchen-charcoal">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-50 border border-red-100 text-red-700 leading-none">
                  <span>{orig.emoji}</span>
                  <span>{orig.name}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" aria-hidden="true" />
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-kitchen-leaf/10 border border-kitchen-leaf/20 text-kitchen-leaf leading-none">
                  <span>{replace.emoji}</span>
                  <span>{replace.name}</span>
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-normal italic leading-relaxed pl-1">
                {note}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
