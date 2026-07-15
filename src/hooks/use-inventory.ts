'use client';

import { useState, useEffect, useCallback } from 'react';
import { InventoryItem } from '@/lib/inventory-manager';
import { kitchenInventory } from '@/constants/inventory';

export const useInventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync state from localStorage after mount safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dailymeal_inventory');
      let loadedInventory: InventoryItem[] = [];

      if (saved) {
        try {
          loadedInventory = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse inventory from localStorage', e);
        }
      } else {
        // Initialize with default seeded list from constants/inventory.ts
        loadedInventory = kitchenInventory.map((item) => ({
          ingredientId: item.ingredientId,
          quantity: item.quantity || '1 piece',
          expiryPriority: item.expiryPriority || 'low',
          outOfStock: false,
          lastUpdated: Date.now(),
        }));
        localStorage.setItem('dailymeal_inventory', JSON.stringify(loadedInventory));
      }

      const timer = setTimeout(() => {
        setInventory(loadedInventory);
        setIsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const saveInventoryState = useCallback((updated: InventoryItem[]) => {
    setInventory(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dailymeal_inventory', JSON.stringify(updated));
    }
  }, []);

  const addInventoryItem = useCallback(
    (ingredientId: string, quantity: string, expiryPriority: 'low' | 'medium' | 'high') => {
      const existingIdx = inventory.findIndex((item) => item.ingredientId === ingredientId);

      if (existingIdx > -1) {
        // If it exists, update it instead of making a duplicate
        const updated = [...inventory];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity,
          expiryPriority,
          outOfStock: false,
          lastUpdated: Date.now(),
        };
        saveInventoryState(updated);
      } else {
        const newItem: InventoryItem = {
          ingredientId,
          quantity,
          expiryPriority,
          outOfStock: false,
          lastUpdated: Date.now(),
        };
        saveInventoryState([newItem, ...inventory]);
      }
    },
    [inventory, saveInventoryState]
  );

  const updateInventoryItem = useCallback(
    (ingredientId: string, quantity: string, expiryPriority: 'low' | 'medium' | 'high') => {
      const updated = inventory.map((item) => {
        if (item.ingredientId === ingredientId) {
          return {
            ...item,
            quantity,
            expiryPriority,
            lastUpdated: Date.now(),
          };
        }
        return item;
      });
      saveInventoryState(updated);
    },
    [inventory, saveInventoryState]
  );

  const toggleStockStatus = useCallback(
    (ingredientId: string) => {
      const updated = inventory.map((item) => {
        if (item.ingredientId === ingredientId) {
          return {
            ...item,
            outOfStock: !item.outOfStock,
            lastUpdated: Date.now(),
          };
        }
        return item;
      });
      saveInventoryState(updated);
    },
    [inventory, saveInventoryState]
  );

  const deleteInventoryItem = useCallback(
    (ingredientId: string) => {
      const updated = inventory.filter((item) => item.ingredientId !== ingredientId);
      saveInventoryState(updated);
    },
    [inventory, saveInventoryState]
  );

  return {
    inventory,
    isLoaded,
    addInventoryItem,
    updateInventoryItem,
    toggleStockStatus,
    deleteInventoryItem,
  };
};
