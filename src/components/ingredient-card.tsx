'use client';

import React from 'react';
import { Ingredient } from '@/constants/ingredients';
import { useLanguage } from '@/context/language-context';

interface IngredientCardProps {
  ingredient: Ingredient;
  selected: boolean;
  onToggle: () => void;
}

export const IngredientCard = ({
  ingredient,
  selected,
  onToggle,
}: IngredientCardProps) => {
  const { language } = useLanguage();
  const mainName = language === 'en' ? ingredient.en : ingredient.ta;
  const subName = language === 'en' ? ingredient.ta : ingredient.en;

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={selected}
      onClick={onToggle}
      className={`flex items-center gap-3 p-3 rounded-lg border text-left w-full transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 ${
        selected
          ? 'border-kitchen-clay bg-kitchen-clay/5 text-kitchen-charcoal font-medium'
          : 'border-border bg-white text-muted-foreground hover:border-kitchen-clay/35 hover:text-kitchen-charcoal'
      }`}
    >
      <span className="text-2xl shrink-0" aria-hidden="true">
        {ingredient.emoji}
      </span>
      <div className="flex flex-col min-w-0">
        <span className={`text-sm truncate font-bold leading-tight ${selected ? 'text-kitchen-clay' : 'text-kitchen-charcoal'}`}>
          {mainName}
        </span>
        <span className="text-xs text-muted-foreground truncate font-normal leading-tight mt-0.5">
          {subName}
        </span>
      </div>
    </button>
  );
};
