export interface InventoryItem {
  ingredientId: string;
  quantity: string;
  expiryPriority: 'low' | 'medium' | 'high';
  outOfStock: boolean;
  lastUpdated: number; // Date.now() timestamp
}

export interface InventorySummaryData {
  total: number;
  lowStock: number;
  expiringSoon: number;
  recentlyUpdated: number;
}

/**
 * Deterministic helper to detect if an inventory item has low stock.
 * Handles fractional units, grams, milliliters, and discrete counts.
 */
export const isLowStock = (item: InventoryItem): boolean => {
  if (item.outOfStock) return true;
  
  const match = item.quantity.trim().match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    const val = parseFloat(match[1]);
    const unit = match[2].trim().toLowerCase();
    
    if (unit === 'g' || unit === 'ml') {
      return val <= 250; // 250g or 250ml or less is low stock
    }
    if (unit === 'kg' || unit === 'litre') {
      return val <= 0.5; // 0.5kg or 0.5L or less is low stock
    }
    if (unit === 'piece' || unit === 'pieces' || unit === 'bunch' || unit === 'bunches') {
      return val <= 1; // 1 piece/bunch or less is low stock
    }
  }
  
  return false;
};

/**
 * Pure calculation mapping to compile summary metrics from active inventory.
 */
export const calculateInventorySummary = (inventory: InventoryItem[]): InventorySummaryData => {
  const total = inventory.length;
  
  const lowStock = inventory.filter(isLowStock).length;
  
  const expiringSoon = inventory.filter(
    (item) => item.expiryPriority === 'high' && !item.outOfStock
  ).length;

  // Let's count items updated in the last 24 hours
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const recentlyUpdated = inventory.filter(
    (item) => now - item.lastUpdated <= ONE_DAY_MS
  ).length;

  return {
    total,
    lowStock,
    expiringSoon,
    recentlyUpdated,
  };
};

/**
 * Filter and sort inventory items based on query strings and category boundaries.
 */
export const queryInventory = (
  inventory: InventoryItem[],
  query: string,
  category: string,
  stockStatus: 'all' | 'in-stock' | 'out-of-stock'
): InventoryItem[] => {
  const term = query.trim().toLowerCase();
  
  return inventory.filter((item) => {
    // 1. Search term match (e.g. tomato)
    if (term && !item.ingredientId.toLowerCase().includes(term)) {
      return false;
    }
    
    // 2. Stock status filter
    if (stockStatus === 'in-stock' && item.outOfStock) {
      return false;
    }
    if (stockStatus === 'out-of-stock' && !item.outOfStock) {
      return false;
    }
    
    return true;
  });
};
