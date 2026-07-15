'use client';

import React from 'react';
import { InventoryItem as InventoryItemType } from '@/lib/inventory-manager';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { Edit2, Trash2, ShieldAlert } from 'lucide-react';

interface InventoryItemProps {
  item: InventoryItemType;
  onEdit: (item: InventoryItemType) => void;
  onDelete: (id: string) => void;
  onToggleStock: (id: string) => void;
}

export const InventoryItem = ({ item, onEdit, onDelete, onToggleStock }: InventoryItemProps) => {
  const { t, language } = useLanguage();

  const ing = ingredients.find((i) => i.id === item.ingredientId);
  const localizedName = ing ? (language === 'en' ? ing.en : ing.ta) : item.ingredientId;
  const emoji = ing ? ing.emoji : '🍲';

  const getPriorityBadge = (priority: 'low' | 'medium' | 'high') => {
    if (priority === 'high') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-red-200 bg-red-50 text-red-650 text-[10px] font-bold leading-none">
          <ShieldAlert className="w-3 h-3" />
          <span>{t.inventory.priorityHigh}</span>
        </span>
      );
    }
    if (priority === 'medium') {
      return (
        <span className="inline-flex px-2 py-0.5 rounded border border-kitchen-turmeric/20 bg-kitchen-turmeric/5 text-kitchen-turmeric text-[10px] font-bold leading-none">
          {t.inventory.priorityMedium}
        </span>
      );
    }
    return (
      <span className="inline-flex px-2 py-0.5 rounded border border-kitchen-leaf/20 bg-kitchen-leaf/5 text-kitchen-leaf text-[10px] font-bold leading-none">
        {t.inventory.priorityLow}
      </span>
    );
  };

  return (
    <div className={`p-4 border rounded-lg bg-white shadow-xs font-sans flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all ${
      item.outOfStock ? 'border-border bg-gray-50/50 opacity-60' : 'border-border hover:border-kitchen-clay/20'
    }`}>
      {/* Ingredient Details */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-2xl shrink-0" aria-hidden="true">{emoji}</span>
        <div className="min-w-0">
          <span className={`font-extrabold text-sm block leading-snug ${
            item.outOfStock ? 'text-muted-foreground line-through' : 'text-kitchen-charcoal'
          }`}>
            {localizedName}
          </span>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-gray-100 px-1.5 py-0.5 rounded">
              {ing ? t.categories[ing.category as keyof typeof t.categories] : ''}
            </span>
            {!item.outOfStock && getPriorityBadge(item.expiryPriority)}
          </div>
        </div>
      </div>

      {/* Quantity & Stock status */}
      <div className="flex items-center justify-between sm:justify-end gap-5 flex-wrap sm:flex-nowrap border-t sm:border-t-0 pt-3 sm:pt-0 border-border/40">
        <div className="text-left sm:text-right">
          <span className="text-[9px] uppercase font-bold text-muted-foreground block tracking-wider leading-none mb-0.5">
            {t.inventory.tableQuantity}
          </span>
          <span className={`text-xs font-bold ${item.outOfStock ? 'text-muted-foreground' : 'text-kitchen-charcoal'}`}>
            {item.outOfStock ? '0' : item.quantity}
          </span>
        </div>

        {/* Toggle Stock button */}
        <button
          type="button"
          onClick={() => onToggleStock(item.ingredientId)}
          className={`px-3 py-1.5 rounded text-[11px] font-bold transition-colors cursor-pointer border focus:outline-none ${
            item.outOfStock
              ? 'bg-red-50 text-red-650 border-red-200 hover:bg-red-100/55'
              : 'bg-kitchen-leaf/5 text-kitchen-leaf border-kitchen-leaf/20 hover:bg-kitchen-leaf/10'
          }`}
        >
          {item.outOfStock ? t.inventory.outOfStockBadge : t.inventory.inStockBadge}
        </button>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(item)}
            className="p-2 border border-border/60 hover:border-kitchen-clay/35 text-muted-foreground hover:text-kitchen-clay rounded transition-colors cursor-pointer focus:outline-none"
            aria-label={`Edit ${localizedName}`}
          >
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm(t.inventory.deleteConfirm)) {
                onDelete(item.ingredientId);
              }
            }}
            className="p-2 border border-border/60 hover:border-red-300 hover:bg-red-50/50 text-muted-foreground hover:text-red-650 rounded transition-colors cursor-pointer focus:outline-none"
            aria-label={`Delete ${localizedName}`}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
