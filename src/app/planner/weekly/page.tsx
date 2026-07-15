'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { usePreferences } from '@/hooks/use-preferences';
import { useWeeklyPlan } from '@/hooks/use-weekly-plan';
import { generateGroceryList } from '@/lib/grocery-generator';
import { WeeklyCalendar } from '@/components/weekly-calendar';
import { WeeklySummary } from '@/components/weekly-summary';
import { GroceryList } from '@/components/grocery-list';
import { PrimaryButton } from '@/components/primary-button';
import { ArrowLeft, Sparkles, Trash2 } from 'lucide-react';
import { MealType } from '@/constants/preferences';
import { InventoryItem } from '@/lib/inventory-manager';

export default function WeeklyPlannerPage() {
  const { t } = useLanguage();
  const { preferences, isLoaded: preferencesLoaded } = usePreferences();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [ingredientsLoaded, setIngredientsLoaded] = useState(false);

  const {
    planResult,
    checkedIngredients,
    isLoaded: planLoaded,
    generateNewPlan,
    regenerateSlot,
    toggleGroceryItem,
    clearPlan,
  } = useWeeklyPlan();

  // Load ingredients safely from localStorage after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selected_ingredients');
      let initialIngredients: string[] = [];
      if (saved) {
        try {
          initialIngredients = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse selected ingredients', e);
        }
      }
      
      const timer = setTimeout(() => {
        setSelectedIngredients(initialIngredients);
        setIngredientsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [inventoryLoaded, setInventoryLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dailymeal_inventory');
      let loadedInventory = [];
      if (saved) {
        try {
          loadedInventory = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse inventory', e);
        }
      }
      const timer = setTimeout(() => {
        setInventory(loadedInventory);
        setInventoryLoaded(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const isLoaded = preferencesLoaded && ingredientsLoaded && planLoaded && inventoryLoaded;

  // Compile grocery list dynamically from the plan using pure helper
  const groceryItems = useMemo(() => {
    if (!planResult) return [];
    return generateGroceryList(planResult.plan, selectedIngredients, inventory);
  }, [planResult, selectedIngredients, inventory]);

  const handleGenerate = () => {
    if (isLoaded) {
      generateNewPlan(selectedIngredients, preferences);
    }
  };

  const handleRegenerateSlot = (dayId: string, mealType: MealType) => {
    if (isLoaded) {
      regenerateSlot(dayId, mealType, selectedIngredients, preferences);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 w-full font-sans pb-28">
      {/* Back Link */}
      <div className="mb-6">
        <Link 
          href="/planner" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-kitchen-clay transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>{t.recommendations.backToPlanner}</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-kitchen-clay shrink-0" aria-hidden="true" />
            <span>{t.weekly.title}</span>
          </h1>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed font-normal">
            {t.weekly.subtitle}
          </p>
        </div>

        {isLoaded && planResult && (
          <button
            type="button"
            onClick={clearPlan}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-bold text-muted-foreground hover:text-red-650 hover:bg-red-50/50 rounded transition-colors shrink-0 self-start sm:self-auto cursor-pointer focus:outline-none"
          >
            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.weekly.clearPlan}</span>
          </button>
        )}
      </div>

      {isLoaded && (
        planResult ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Summary & Calendar Grid */}
            <div className="lg:col-span-8 space-y-6">
              <WeeklySummary
                diversityScore={planResult.diversityScore}
                utilization={planResult.utilization}
                groceryCount={planResult.groceryCount}
              />
              <WeeklyCalendar
                plan={planResult.plan}
                onRegenerate={handleRegenerateSlot}
              />
            </div>

            {/* Right Column: Missing Groceries Checklist */}
            <div className="lg:col-span-4">
              <GroceryList
                items={groceryItems}
                checkedItems={checkedIngredients}
                onToggle={toggleGroceryItem}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-border bg-white rounded-lg p-6 max-w-2xl mx-auto space-y-4 shadow-xs">
            <Sparkles className="w-10 h-10 text-kitchen-clay shrink-0 animate-pulse" aria-hidden="true" />
            
            <h3 className="text-lg font-bold text-kitchen-charcoal">
              {t.weekly.title}
            </h3>
            
            <p className="text-xs md:text-sm text-muted-foreground max-w-md leading-relaxed font-normal">
              {t.weekly.subtitle}
            </p>

            <div className="pt-4">
              <PrimaryButton onClick={handleGenerate} className="px-8 py-5 text-sm font-semibold">
                {t.weekly.generateBtn}
              </PrimaryButton>
            </div>
          </div>
        )
      )}
    </div>
  );
}
