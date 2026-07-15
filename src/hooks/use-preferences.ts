'use client';

import { useState, useEffect, useCallback } from 'react';
import { DietType, SpiceLevel, CookingTime, MealType } from '@/constants/preferences';

export interface RecentlyCookedMeal {
  id: string;
  name: string;
  date: string; // YYYY-MM-DD
  rating: number; // 1-5
  mealType: MealType;
}

export interface UserPreferences {
  diet: DietType;
  avoidIngredientIds: string[];
  spiceLevel: SpiceLevel;
  cookingTime: CookingTime;
  familySize: number;
  recentlyCooked: RecentlyCookedMeal[];
}

const defaultPreferences: UserPreferences = {
  diet: 'veg',
  avoidIngredientIds: [],
  spiceLevel: 'medium',
  cookingTime: '30m',
  familySize: 4,
  recentlyCooked: [],
};

export const usePreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync state from localStorage after mount safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_preferences');
      let loadedPreferences = defaultPreferences;
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          
          // Ensure chronological sort (most recent first) on load
          if (parsed.recentlyCooked && Array.isArray(parsed.recentlyCooked)) {
            parsed.recentlyCooked.sort(
              (a: RecentlyCookedMeal, b: RecentlyCookedMeal) => 
                new Date(b.date).getTime() - new Date(a.date).getTime()
            );
          }
          
          loadedPreferences = { ...defaultPreferences, ...parsed };
        } catch (e) {
          console.error('Failed to parse preferences from localStorage', e);
        }
      }
      
      const timer = setTimeout(() => {
        setPreferences(loadedPreferences);
        setIsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);



  const setDiet = useCallback((diet: DietType) => {
    setPreferences((prev) => {
      const updated = { ...prev, diet };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const toggleAvoidIngredient = useCallback((id: string) => {
    setPreferences((prev) => {
      const updatedIds = prev.avoidIngredientIds.includes(id)
        ? prev.avoidIngredientIds.filter((item) => item !== id)
        : [...prev.avoidIngredientIds, id];
      const updated = { ...prev, avoidIngredientIds: updatedIds };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const setSpiceLevel = useCallback((spiceLevel: SpiceLevel) => {
    setPreferences((prev) => {
      const updated = { ...prev, spiceLevel };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const setCookingTime = useCallback((cookingTime: CookingTime) => {
    setPreferences((prev) => {
      const updated = { ...prev, cookingTime };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const setFamilySize = useCallback((familySize: number) => {
    setPreferences((prev) => {
      const updated = { ...prev, familySize: Math.max(1, familySize) };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  // Meal History CRUD
  const addMeal = useCallback((meal: Omit<RecentlyCookedMeal, 'id'>) => {
    setPreferences((prev) => {
      const newMeal: RecentlyCookedMeal = {
        ...meal,
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      };
      
      const updatedHistory = [...prev.recentlyCooked, newMeal].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      
      const updated = { ...prev, recentlyCooked: updatedHistory };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const updateMeal = useCallback((id: string, updatedFields: Omit<RecentlyCookedMeal, 'id'>) => {
    setPreferences((prev) => {
      const updatedHistory = prev.recentlyCooked.map((meal) => 
        meal.id === id ? { ...meal, ...updatedFields } : meal
      ).sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      
      const updated = { ...prev, recentlyCooked: updatedHistory };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const deleteMeal = useCallback((id: string) => {
    setPreferences((prev) => {
      const updatedHistory = prev.recentlyCooked.filter((meal) => meal.id !== id);
      const updated = { ...prev, recentlyCooked: updatedHistory };
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_preferences', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const clearAll = useCallback(() => {
    setPreferences(defaultPreferences);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user_preferences');
    }
  }, []);

  return {
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
    clearAll,
  };
};
