'use client';

import React from 'react';
import { Ingredient } from '@/constants/ingredients';
import { IngredientGrid } from './ingredient-grid';
import { IngredientCard } from './ingredient-card';
import { useLanguage } from '@/context/language-context';

interface CategorySectionProps {
  title: string;
  ingredients: Ingredient[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export const CategorySection = ({
  title,
  ingredients,
  selectedIds,
  onToggle,
}: CategorySectionProps) => {
  const { language } = useLanguage();

  // Sort ingredients alphabetically within the category based on current language
  const sortedIngredients = [...ingredients].sort((a, b) => {
    const nameA = language === 'en' ? a.en : a.ta;
    const nameB = language === 'en' ? b.en : b.ta;
    return nameA.localeCompare(nameB, language === 'ta' ? 'ta-IN' : 'en-US');
  });

  if (sortedIngredients.length === 0) return null;

  return (
    <section className="mb-8 font-sans">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1 h-4 bg-kitchen-leaf rounded-full" aria-hidden="true" />
        <h3 className="text-sm md:text-base font-bold text-kitchen-charcoal tracking-tight">
          {title}
        </h3>
        <span className="text-xs text-muted-foreground font-normal">
          ({sortedIngredients.length})
        </span>
      </div>
      <IngredientGrid>
        {sortedIngredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
            selected={selectedIds.includes(ingredient.id)}
            onToggle={() => onToggle(ingredient.id)}
          />
        ))}
      </IngredientGrid>
    </section>
  );
};
