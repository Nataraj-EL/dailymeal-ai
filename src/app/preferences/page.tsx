'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { usePreferences, RecentlyCookedMeal } from '@/hooks/use-preferences';
import { 
  dietOptions, 
  spiceOptions, 
  cookingTimeOptions 
} from '@/constants/preferences';
import { PreferenceSection } from '@/components/preference-section';
import { PreferenceChip } from '@/components/preference-chip';
import { MealHistoryCard } from '@/components/meal-history-card';
import { AddMealDialog } from '@/components/add-meal-dialog';
import { PreferenceSummary } from '@/components/preference-summary';
import { PrimaryButton } from '@/components/primary-button';
import { Plus, Minus, PlusCircle, ArrowRight } from 'lucide-react';

export default function PreferencesPage() {
  const { t, language } = useLanguage();
  const {
    preferences,
    isLoaded,
    setDiet,
    toggleAvoidIngredient,
    setSpiceLevel,
    setCookingTime,
    setFamilySize,
    addMeal,
    updateMeal,
    deleteMeal,
  } = usePreferences();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editMeal, setEditMeal] = useState<RecentlyCookedMeal | null>(null);

  // Filter a select few key ingredients (e.g. Onion, Garlic, Brinjal, Okra, Potato) for easy toggling under "Avoided Ingredients"
  const quickAvoidIngredients = ingredients.filter((ing) => 
    ['onion', 'garlic', 'brinjal', 'okra', 'potato', 'bitter_gourd'].includes(ing.id)
  );

  const handleOpenAdd = () => {
    setEditMeal(null);
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (meal: RecentlyCookedMeal) => {
    setEditMeal(meal);
    setIsDialogOpen(true);
  };

  const handleSaveMeal = (mealData: Omit<RecentlyCookedMeal, 'id'>) => {
    if (editMeal) {
      updateMeal(editMeal.id, mealData);
    } else {
      addMeal(mealData);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 w-full font-sans pb-28">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight">
          {t.preferences.title}
        </h1>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
          {t.preferences.subtitle}
        </p>
      </div>

      {isLoaded && (
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Config Panel */}
          <div className="lg:col-span-8 space-y-6">
            {/* Dietary Type */}
            <PreferenceSection 
              title={t.preferences.dietLabel} 
              description={t.preferences.dietDesc}
            >
              <div className="flex flex-wrap gap-2.5">
                {dietOptions.map((opt) => (
                  <PreferenceChip
                    key={opt.value}
                    label={opt.enLabel && dietOptions.find(d => d.value === opt.value) ? (language === 'en' ? opt.enLabel : opt.taLabel) : opt.enLabel}
                    selected={preferences.diet === opt.value}
                    onToggle={() => setDiet(opt.value)}
                  />
                ))}
              </div>
            </PreferenceSection>

            {/* Spice Tolerances */}
            <PreferenceSection 
              title={t.preferences.spiceLabel} 
              description={t.preferences.spiceDesc}
            >
              <div className="flex flex-wrap gap-2.5">
                {spiceOptions.map((opt) => (
                  <PreferenceChip
                    key={opt.value}
                    label={language === 'en' ? opt.enLabel : opt.taLabel}
                    selected={preferences.spiceLevel === opt.value}
                    onToggle={() => setSpiceLevel(opt.value)}
                  />
                ))}
              </div>
            </PreferenceSection>

            {/* Cooking Durations */}
            <PreferenceSection 
              title={t.preferences.timeLabel} 
              description={t.preferences.timeDesc}
            >
              <div className="flex flex-wrap gap-2.5">
                {cookingTimeOptions.map((opt) => (
                  <PreferenceChip
                    key={opt.value}
                    label={language === 'en' ? opt.enLabel : opt.taLabel}
                    selected={preferences.cookingTime === opt.value}
                    onToggle={() => setCookingTime(opt.value)}
                  />
                ))}
              </div>
            </PreferenceSection>

            {/* Family Members Counter */}
            <PreferenceSection 
              title={t.preferences.familyLabel} 
              description={t.preferences.familyDesc}
            >
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setFamilySize(preferences.familySize - 1)}
                  disabled={preferences.familySize <= 1}
                  className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-kitchen-clay hover:border-kitchen-clay/35 disabled:opacity-40 transition-colors cursor-pointer"
                  aria-label="Decrease portions size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <span className="text-lg font-bold text-kitchen-charcoal min-w-[2rem] text-center" aria-live="polite">
                  {preferences.familySize}
                </span>

                <button
                  type="button"
                  onClick={() => setFamilySize(preferences.familySize + 1)}
                  className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-kitchen-clay hover:border-kitchen-clay/35 transition-colors cursor-pointer"
                  aria-label="Increase portions size"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </PreferenceSection>

            {/* Avoided Ingredients */}
            <PreferenceSection 
              title={t.preferences.avoidLabel} 
              description={t.preferences.avoidDesc}
            >
              <div className="flex flex-wrap gap-2">
                {quickAvoidIngredients.map((ing) => {
                  const name = language === 'en' ? ing.en : ing.ta;
                  const isAvoided = preferences.avoidIngredientIds.includes(ing.id);
                  return (
                    <PreferenceChip
                      key={ing.id}
                      label={`${ing.emoji} ${name}`}
                      selected={isAvoided}
                      onToggle={() => toggleAvoidIngredient(ing.id)}
                    />
                  );
                })}
              </div>
            </PreferenceSection>

            {/* Cooked History CRUD Log */}
            <PreferenceSection 
              title={t.preferences.historyLabel} 
              description={t.preferences.historyDesc}
            >
              <div className="mb-4 flex justify-start">
                <button
                  type="button"
                  onClick={handleOpenAdd}
                  className="inline-flex items-center gap-2 text-xs font-bold text-kitchen-clay hover:text-kitchen-clay/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 p-1"
                  aria-label="Log a recently cooked meal"
                >
                  <PlusCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{t.preferences.addMeal}</span>
                </button>
              </div>

              {preferences.recentlyCooked.length > 0 ? (
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {preferences.recentlyCooked.map((meal) => (
                    <MealHistoryCard
                      key={meal.id}
                      meal={meal}
                      onEdit={() => handleOpenEdit(meal)}
                      onDelete={() => deleteMeal(meal.id)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground italic font-normal py-4">
                  {t.preferences.noHistory}
                </p>
              )}
            </PreferenceSection>
          </div>

          {/* Right Sidebar Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <PreferenceSummary preferences={preferences} />
          </div>
        </div>
      )}

      {/* Add / Edit Meal Modal Overlay */}
      <AddMealDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveMeal}
        editMeal={editMeal}
      />

      {/* Sticky Bottom Actions Bar */}
      {isLoaded && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-white py-4 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] z-40 font-sans">
          <div className="max-w-6xl mx-auto px-6 flex justify-end">
            <Link href="/planner/recommendation">
              <PrimaryButton className="flex items-center gap-2 px-5 py-4 text-xs md:text-sm">
                <span>{t.preferences.continueCTA}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </PrimaryButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
