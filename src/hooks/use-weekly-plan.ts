'use client';

import { useState, useEffect, useCallback } from 'react';
import { WeeklyPlanResult, generateWeeklyPlan, regenerateMeal } from '@/lib/weekly-planner';
import { UserPreferences } from './use-preferences';
import { MealType } from '@/constants/preferences';

export const useWeeklyPlan = () => {
  const [planResult, setPlanResult] = useState<WeeklyPlanResult | null>(null);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync weekly plan and checkmarks from localStorage safely after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPlan = localStorage.getItem('dailymeal_weekly_plan');
      const savedChecks = localStorage.getItem('dailymeal_weekly_checks');

      let loadedPlan: WeeklyPlanResult | null = null;
      let loadedChecks: Record<string, boolean> = {};

      if (savedPlan) {
        try {
          loadedPlan = JSON.parse(savedPlan);
        } catch (e) {
          console.error('Failed to parse weekly plan from localStorage', e);
        }
      }

      if (savedChecks) {
        try {
          loadedChecks = JSON.parse(savedChecks);
        } catch (e) {
          console.error('Failed to parse checked ingredients from localStorage', e);
        }
      }

      const timer = setTimeout(() => {
        setPlanResult(loadedPlan);
        setCheckedIngredients(loadedChecks);
        setIsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const generateNewPlan = useCallback(
    (selectedIngredients: string[], preferences: UserPreferences) => {
      const result = generateWeeklyPlan(selectedIngredients, preferences);
      setPlanResult(result);
      setCheckedIngredients({}); // Reset checklist state on fresh plans

      if (typeof window !== 'undefined') {
        localStorage.setItem('dailymeal_weekly_plan', JSON.stringify(result));
        localStorage.removeItem('dailymeal_weekly_checks');
      }
    },
    []
  );

  const regenerateSlot = useCallback(
    (
      dayId: string,
      mealType: MealType,
      selectedIngredients: string[],
      preferences: UserPreferences
    ) => {
      if (!planResult) return;
      const result = regenerateMeal(planResult.plan, dayId, mealType, selectedIngredients, preferences);
      setPlanResult(result);

      if (typeof window !== 'undefined') {
        localStorage.setItem('dailymeal_weekly_plan', JSON.stringify(result));
      }
    },
    [planResult]
  );

  const toggleGroceryItem = useCallback(
    (id: string) => {
      setCheckedIngredients((prev) => {
        const updated = { ...prev, [id]: !prev[id] };
        if (typeof window !== 'undefined') {
          localStorage.setItem('dailymeal_weekly_checks', JSON.stringify(updated));
        }
        return updated;
      });
    },
    []
  );

  const clearPlan = useCallback(() => {
    setPlanResult(null);
    setCheckedIngredients({});
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dailymeal_weekly_plan');
      localStorage.removeItem('dailymeal_weekly_checks');
    }
  }, []);

  return {
    planResult,
    checkedIngredients,
    isLoaded,
    generateNewPlan,
    regenerateSlot,
    toggleGroceryItem,
    clearPlan,
  };
};
export { type WeeklyPlanResult };
