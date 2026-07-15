import { WeeklyPlan } from './weekly-planner';
import { ingredients } from '@/constants/ingredients';
import { kitchenInventory } from '@/constants/inventory';
import { MealType } from '@/constants/preferences';
import { InventoryItem } from '@/lib/inventory-manager';

export interface GroceryItem {
  id: string;
  name: string;
  emoji: string;
  category: string;
  quantity: string;
  checked: boolean;
}

/**
 * Parses a quantity string (e.g. "500g", "1 Litre") into value and unit components.
 */
const parseQuantity = (qty: string): { val: number; unit: string } => {
  const match = qty.trim().match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    return { val: parseFloat(match[1]), unit: match[2].trim() };
  }
  return { val: 1, unit: qty.trim() || 'piece' };
};

/**
 * Multiplies a base quantity by a multiplier and simplifies units (e.g. g -> kg, ml -> Litre).
 */
const multiplyAndFormatQuantity = (baseQty: string, multiplier: number): string => {
  const { val, unit } = parseQuantity(baseQty);
  const totalVal = val * multiplier;

  const lowUnit = unit.toLowerCase();
  
  if (lowUnit === 'g' && totalVal >= 1000) {
    const kgVal = totalVal / 1000;
    return `${kgVal.toFixed(1).replace(/\.0$/, '')} kg`;
  }

  if (lowUnit === 'ml' && totalVal >= 1000) {
    const LVal = totalVal / 1000;
    return `${LVal.toFixed(1).replace(/\.0$/, '')} Litre`;
  }

  // Handle plural units
  if (totalVal > 1 && (lowUnit === 'piece' || lowUnit === 'bunch')) {
    return `${totalVal} ${unit}s`;
  }

  return `${totalVal} ${unit}`;
};

/**
 * Compiles a weekly grocery list containing only missing ingredients, aggregated by quantities and grouped by category.
 * Pure deterministic function.
 */
export const generateGroceryList = (
  plan: WeeklyPlan,
  selectedIngredients: string[],
  inventory?: InventoryItem[]
): GroceryItem[] => {
  const activeInventory = inventory || (kitchenInventory as unknown as InventoryItem[]);
  const ingredientOccurrences: Record<string, number> = {};

  // 1. Gather all required ingredients and count their occurrences in the weekly plan
  Object.values(plan).forEach((dayPlan) => {
    const slots: MealType[] = ['breakfast', 'lunch', 'dinner'];
    slots.forEach((slot) => {
      const meal = dayPlan[slot];
      if (meal) {
        meal.requiredIngredientIds.forEach((id) => {
          ingredientOccurrences[id] = (ingredientOccurrences[id] || 0) + 1;
        });
      }
    });
  });

  const groceryItems: GroceryItem[] = [];

  // 2. Filter out selected ingredients, parse quantities, and build missing checklist
  Object.entries(ingredientOccurrences).forEach(([id, occurrences]) => {
    // Skip if user already has it in their kitchen
    if (selectedIngredients.includes(id)) return;

    const ing = ingredients.find((i) => i.id === id);
    const inv = activeInventory.find((item) => item.ingredientId === id);

    if (!ing) return;

    const baseQuantity = inv?.quantity || '1 piece';
    const aggregatedQuantity = multiplyAndFormatQuantity(baseQuantity, occurrences);

    groceryItems.push({
      id,
      name: id, // Will be localized in visual components
      emoji: ing.emoji,
      category: ing.category, // e.g. vegetables, grains, dairy, protein, spices_pantry
      quantity: aggregatedQuantity,
      checked: false,
    });
  });

  // Sort by category index, then alphabetically
  const categoryOrder = ['vegetables', 'grains', 'dairy', 'protein', 'spices_pantry'];
  return groceryItems.sort((a, b) => {
    const orderA = categoryOrder.indexOf(a.category);
    const orderB = categoryOrder.indexOf(b.category);
    if (orderA !== orderB) return orderA - orderB;
    return a.id.localeCompare(b.id);
  });
};
export { multiplyAndFormatQuantity as testMultiplyAndFormatQuantity };
