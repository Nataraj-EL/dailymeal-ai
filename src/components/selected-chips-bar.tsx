'use client';

import React from 'react';
import { Ingredient } from '@/constants/ingredients';
import { useLanguage } from '@/context/language-context';
import { X } from 'lucide-react';

interface SelectedChipsBarProps {
  selectedIngredients: Ingredient[];
  onRemove: (id: string) => void;
}

export const SelectedChipsBar = ({
  selectedIngredients,
  onRemove,
}: SelectedChipsBarProps) => {
  const { t, language } = useLanguage();

  if (selectedIngredients.length === 0) return null;

  return (
    <div className="w-full bg-kitchen-cream/20 border border-border rounded-lg p-4 mb-6 font-sans">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2.5">
        {t.planner.selectedHeader} ({selectedIngredients.length})
      </span>
      <div className="flex flex-wrap gap-2">
        {selectedIngredients.map((ingredient) => {
          const name = language === 'en' ? ingredient.en : ingredient.ta;
          return (
            <div
              key={ingredient.id}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-kitchen-clay/20 text-xs text-kitchen-charcoal font-medium shadow-sm transition-all"
            >
              <span>{ingredient.emoji}</span>
              <span>{name}</span>
              <button
                type="button"
                onClick={() => onRemove(ingredient.id)}
                className="p-0.5 rounded-full hover:bg-kitchen-clay/10 text-muted-foreground hover:text-kitchen-clay focus:outline-none cursor-pointer"
                aria-label={`Remove ${name}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
