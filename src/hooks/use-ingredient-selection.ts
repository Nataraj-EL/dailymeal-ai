'use client';

import { useState, useEffect, useCallback } from 'react';

export const useIngredientSelection = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Safely initialize state from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selected_ingredients');
      let initialIds: string[] = [];
      if (saved) {
        try {
          initialIds = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse selected ingredients from localStorage', e);
        }
      }
      
      // Update state asynchronously to avoid React synchronous render cascading lint warning
      const timer = setTimeout(() => {
        setSelectedIds(initialIds);
        setIsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const toggleSelection = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const updated = prev.includes(id) 
        ? prev.filter((item) => item !== id) 
        : [...prev, id];
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('selected_ingredients', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const removeSelection = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const updated = prev.filter((item) => item !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('selected_ingredients', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const clearSelections = useCallback(() => {
    setSelectedIds([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('selected_ingredients');
    }
  }, []);

  const isSelected = useCallback((id: string) => {
    return selectedIds.includes(id);
  }, [selectedIds]);

  return {
    selectedIds,
    isLoaded,
    toggleSelection,
    removeSelection,
    clearSelections,
    isSelected,
  };
};
export type UseIngredientSelectionReturn = ReturnType<typeof useIngredientSelection>;
