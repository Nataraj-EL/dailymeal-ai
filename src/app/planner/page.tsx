'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { useIngredientSelection } from '@/hooks/use-ingredient-selection';
import { IngredientSearch } from '@/components/ingredient-search';
import { SelectedChipsBar } from '@/components/selected-chips-bar';
import { CategorySection } from '@/components/category-section';
import { SelectedIngredientsBar } from '@/components/selected-ingredients-bar';

export default function PlannerPage() {
  const { t } = useLanguage();
  const { 
    selectedIds, 
    isLoaded, 
    toggleSelection, 
    removeSelection, 
    clearSelections 
  } = useIngredientSelection();
  
  const [searchQuery, setSearchQuery] = useState('');

  // Filter ingredients by search query (case-insensitive for English and Tamil)
  const filteredIngredients = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return ingredients;
    return ingredients.filter(
      (ing) =>
        ing.en.toLowerCase().includes(query) ||
        ing.ta.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group filtered ingredients by category
  const categoriesList = useMemo(() => {
    const groups = {
      vegetables: [] as typeof ingredients,
      grains: [] as typeof ingredients,
      dairy: [] as typeof ingredients,
      protein: [] as typeof ingredients,
      spices_pantry: [] as typeof ingredients,
    };

    filteredIngredients.forEach((ing) => {
      if (ing.category in groups) {
        groups[ing.category].push(ing);
      }
    });

    return groups;
  }, [filteredIngredients]);

  // Map selected IDs to full ingredient structures for chips rendering
  const selectedIngredients = useMemo(() => {
    return ingredients.filter((ing) => selectedIds.includes(ing.id));
  }, [selectedIds]);

  const hasResults = filteredIngredients.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 w-full font-sans pb-28">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight">
          {t.planner.title}
        </h1>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
          {t.planner.subtitle}
        </p>
      </div>

      {/* Search Input Box */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <IngredientSearch value={searchQuery} onSearch={setSearchQuery} />
      </div>

      {/* Selected Ingredients Chips (at the top) */}
      {isLoaded && (
        <SelectedChipsBar
          selectedIngredients={selectedIngredients}
          onRemove={removeSelection}
        />
      )}

      {/* Main Categorised Grid List */}
      {isLoaded && hasResults ? (
        <div className="space-y-8">
          <CategorySection
            title={t.categories.vegetables}
            ingredients={categoriesList.vegetables}
            selectedIds={selectedIds}
            onToggle={toggleSelection}
          />
          <CategorySection
            title={t.categories.grains}
            ingredients={categoriesList.grains}
            selectedIds={selectedIds}
            onToggle={toggleSelection}
          />
          <CategorySection
            title={t.categories.dairy}
            ingredients={categoriesList.dairy}
            selectedIds={selectedIds}
            onToggle={toggleSelection}
          />
          <CategorySection
            title={t.categories.protein}
            ingredients={categoriesList.protein}
            selectedIds={selectedIds}
            onToggle={toggleSelection}
          />
          <CategorySection
            title={t.categories.spices_pantry}
            ingredients={categoriesList.spices_pantry}
            selectedIds={selectedIds}
            onToggle={toggleSelection}
          />
        </div>
      ) : (
        isLoaded && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              {t.planner.noIngredientsFound}
            </p>
          </div>
        )
      )}

      {/* Sticky Bottom Summary and CTA Bar */}
      {isLoaded && (
        <SelectedIngredientsBar
          count={selectedIds.length}
          onClear={clearSelections}
        />
      )}
    </div>
  );
}
