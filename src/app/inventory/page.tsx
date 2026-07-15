'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { useInventory } from '@/hooks/use-inventory';
import { calculateInventorySummary, InventoryItem as InventoryItemType } from '@/lib/inventory-manager';
import { InventoryItem } from '@/components/inventory-item';
import { InventorySummary } from '@/components/inventory-summary';
import { AddInventoryDialog } from '@/components/add-inventory-dialog';
import { ingredients } from '@/constants/ingredients';
import { Plus, Search, Filter, Sparkles } from 'lucide-react';

export default function InventoryPage() {
  const { t } = useLanguage();
  const {
    inventory,
    isLoaded,
    addInventoryItem,
    updateInventoryItem,
    toggleStockStatus,
    deleteInventoryItem,
  } = useInventory();

  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState<'all' | 'in-stock' | 'out-of-stock'>('all');

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<InventoryItemType | null>(null);

  const summary = useMemo(() => {
    return calculateInventorySummary(inventory);
  }, [inventory]);

  // Compute filtered inventory list
  const filteredInventory = useMemo(() => {
    return inventory
      .filter((item) => {
        const ing = ingredients.find((i) => i.id === item.ingredientId);
        
        // 1. Search filter (English, Tamil, and ID matches)
        if (searchQuery.trim()) {
          const query = searchQuery.trim().toLowerCase();
          const matchesId = item.ingredientId.toLowerCase().includes(query);
          const matchesEn = ing?.en.toLowerCase().includes(query);
          const matchesTa = ing?.ta.toLowerCase().includes(query);
          if (!matchesId && !matchesEn && !matchesTa) return false;
        }

        // 2. Category filter
        if (categoryFilter && ing?.category !== categoryFilter) {
          return false;
        }

        // 3. Stock filter
        if (stockFilter === 'in-stock' && item.outOfStock) return false;
        if (stockFilter === 'out-of-stock' && !item.outOfStock) return false;

        return true;
      })
      .sort((a, b) => b.lastUpdated - a.lastUpdated); // Show recently updated at the top
  }, [inventory, searchQuery, categoryFilter, stockFilter]);

  const currentInventoryIds = useMemo(() => {
    return inventory.map((item) => item.ingredientId);
  }, [inventory]);

  const handleEdit = (item: InventoryItemType) => {
    setEditItem(item);
    setIsDialogOpen(true);
  };

  const handleAddNew = () => {
    setEditItem(null);
    setIsDialogOpen(true);
  };

  const handleSave = (id: string, qty: string, priority: 'low' | 'medium' | 'high') => {
    if (editItem) {
      updateInventoryItem(id, qty, priority);
    } else {
      addInventoryItem(id, qty, priority);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 w-full font-sans pb-28">
      {/* Header section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-kitchen-clay shrink-0" aria-hidden="true" />
            <span>{t.inventory.title}</span>
          </h1>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed font-normal">
            {t.inventory.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-kitchen-clay hover:bg-kitchen-clay/90 border border-kitchen-clay text-xs font-bold text-white rounded-lg transition-colors shrink-0 self-start sm:self-auto cursor-pointer focus:outline-none"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          <span>{t.inventory.addIngredientBtn}</span>
        </button>
      </div>

      {isLoaded && (
        <div className="space-y-6">
          {/* Summary Dashboard widgets */}
          <InventorySummary summary={summary} />

          {/* Search and Filters Bar */}
          <div className="p-4 border border-border bg-white rounded-lg shadow-xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-muted-foreground/60 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.inventory.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2 border border-border rounded text-xs text-kitchen-charcoal bg-white focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40 placeholder:text-muted-foreground/50"
              />
            </div>

            {/* Category and stock filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Category */}
              <div className="relative flex items-center">
                <Filter className="w-3.5 h-3.5 text-muted-foreground/60 absolute left-3" aria-hidden="true" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="pl-8 pr-4 py-2 border border-border rounded text-xs text-kitchen-charcoal bg-white focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40"
                  aria-label="Filter by category"
                >
                  <option value="">{t.inventory.filterCategory}</option>
                  {(['vegetables', 'grains', 'dairy', 'protein', 'spices_pantry'] as const).map((cat) => (
                    <option key={cat} value={cat}>
                      {t.categories[cat]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stock status */}
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value as 'all' | 'in-stock' | 'out-of-stock')}
                className="px-4 py-2 border border-border rounded text-xs text-kitchen-charcoal bg-white focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40"
                aria-label="Filter by stock status"
              >
                <option value="all">{t.inventory.stockAll}</option>
                <option value="in-stock">{t.inventory.stockIn}</option>
                <option value="out-of-stock">{t.inventory.stockOut}</option>
              </select>
            </div>
          </div>

          {/* Inventory list items */}
          <div className="space-y-3">
            {filteredInventory.length > 0 ? (
              filteredInventory.map((item) => (
                <InventoryItem
                  key={item.ingredientId}
                  item={item}
                  onEdit={handleEdit}
                  onDelete={deleteInventoryItem}
                  onToggleStock={toggleStockStatus}
                />
              ))
            ) : (
              <div className="p-12 text-center border border-dashed border-border rounded-lg bg-gray-50/20">
                <p className="text-xs md:text-sm text-muted-foreground font-normal">
                  {t.inventory.noItems}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add / Edit Dialog Modal */}
      <AddInventoryDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
        editItem={editItem}
        currentInventoryIds={currentInventoryIds}
      />
    </div>
  );
}
