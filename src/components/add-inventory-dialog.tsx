'use client';

import React, { useState } from 'react';
import { InventoryItem } from '@/lib/inventory-manager';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { X, Sparkles } from 'lucide-react';

interface AddInventoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ingredientId: string, quantity: string, expiryPriority: 'low' | 'medium' | 'high') => void;
  editItem: InventoryItem | null;
  currentInventoryIds: string[];
}

export const AddInventoryDialog = ({
  isOpen,
  onClose,
  onSave,
  editItem,
  currentInventoryIds,
}: AddInventoryDialogProps) => {
  const { t, language } = useLanguage();

  const [ingredientId, setIngredientId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryPriority, setExpiryPriority] = useState<'low' | 'medium' | 'high'>('low');

  const [errorSelect, setErrorSelect] = useState('');
  const [errorQty, setErrorQty] = useState('');

  const [prevIsOpen, setPrevIsOpen] = useState(false);
  const [prevEditItem, setPrevEditItem] = useState<InventoryItem | null>(null);

  // Sync state values during render phase to avoid effect cascading render warnings
  if (isOpen !== prevIsOpen || editItem !== prevEditItem) {
    setPrevIsOpen(isOpen);
    setPrevEditItem(editItem);
    if (isOpen) {
      if (editItem) {
        setIngredientId(editItem.ingredientId);
        setQuantity(editItem.quantity);
        setExpiryPriority(editItem.expiryPriority);
      } else {
        setIngredientId('');
        setQuantity('');
        setExpiryPriority('low');
      }
      setErrorSelect('');
      setErrorQty('');
    }
  }

  if (!isOpen) return null;

  // Filter out ingredients already in inventory when in ADD mode
  const availableIngredients = ingredients
    .filter((ing) => editItem || !currentInventoryIds.includes(ing.id))
    .sort((a, b) => {
      const nameA = language === 'en' ? a.en : a.ta;
      const nameB = language === 'en' ? b.en : b.ta;
      return nameA.localeCompare(nameB);
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!ingredientId) {
      setErrorSelect(t.inventory.errSelect);
      hasError = true;
    } else {
      setErrorSelect('');
    }

    if (!quantity.trim()) {
      setErrorQty(t.inventory.errQty);
      hasError = true;
    } else {
      setErrorQty('');
    }

    if (hasError) return;

    onSave(ingredientId, quantity.trim(), expiryPriority);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-kitchen-charcoal/45 flex items-center justify-center p-4 z-50 font-sans backdrop-blur-xs">
      <div className="bg-white rounded-lg border border-border w-full max-w-md overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-250">
        {/* Header */}
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
            <h3 className="font-extrabold text-sm text-kitchen-charcoal">
              {editItem ? t.inventory.editTitle : t.inventory.addTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-kitchen-charcoal rounded hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Ingredient dropdown */}
          <div>
            <label htmlFor="inventory-dialog-ingredient" className="block text-xs font-bold text-kitchen-charcoal mb-1.5">
              {t.inventory.dialogIngredientSelect}
            </label>
            {editItem ? (
              // Disable choosing in edit mode
              <div className="w-full px-3.5 py-2.5 bg-gray-100 border border-border rounded text-xs font-semibold text-muted-foreground capitalize">
                {ingredients.find((i) => i.id === editItem.ingredientId)
                  ? (language === 'en'
                      ? ingredients.find((i) => i.id === editItem.ingredientId)!.en
                      : ingredients.find((i) => i.id === editItem.ingredientId)!.ta)
                  : editItem.ingredientId}
              </div>
            ) : (
              <select
                id="inventory-dialog-ingredient"
                value={ingredientId}
                onChange={(e) => {
                  setIngredientId(e.target.value);
                  setErrorSelect('');
                }}
                className="w-full px-3.5 py-2.5 border border-border rounded text-xs text-kitchen-charcoal bg-white focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40 capitalize"
              >
                <option value="">-- {t.dialog.dishPlaceholder} --</option>
                {availableIngredients.map((ing) => (
                  <option key={ing.id} value={ing.id}>
                    {ing.emoji} {language === 'en' ? ing.en : ing.ta}
                  </option>
                ))}
              </select>
            )}
            {errorSelect && (
              <p className="text-[10px] text-red-650 font-bold mt-1" role="alert">
                {errorSelect}
              </p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="inventory-dialog-quantity" className="block text-xs font-bold text-kitchen-charcoal mb-1.5">
              {t.inventory.tableQuantity}
            </label>
            <input
              id="inventory-dialog-quantity"
              type="text"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                setErrorQty('');
              }}
              placeholder={t.inventory.dialogQuantityPlaceholder}
              className="w-full px-3.5 py-2.5 border border-border rounded text-xs text-kitchen-charcoal focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40"
            />
            {errorQty && (
              <p className="text-[10px] text-red-650 font-bold mt-1" role="alert">
                {errorQty}
              </p>
            )}
          </div>

          {/* Expiry Priority */}
          <div>
            <span className="block text-xs font-bold text-kitchen-charcoal mb-1.5">
              {t.inventory.tableExpiry}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'medium', 'high'] as const).map((priority) => (
                <button
                  key={priority}
                  type="button"
                  onClick={() => setExpiryPriority(priority)}
                  className={`py-2 px-3 rounded border text-center text-xs font-bold transition-all cursor-pointer focus:outline-none ${
                    expiryPriority === priority
                      ? 'border-kitchen-clay bg-kitchen-clay text-white'
                      : 'border-border bg-white text-muted-foreground hover:border-kitchen-clay/20'
                  }`}
                >
                  {priority === 'low' && t.inventory.priorityLow.split(' ')[0]}
                  {priority === 'medium' && t.inventory.priorityMedium.split(' ')[0]}
                  {priority === 'high' && t.inventory.priorityHigh.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-border/40 flex justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-border text-xs font-bold text-muted-foreground hover:bg-gray-50 rounded transition-colors cursor-pointer"
            >
              {t.inventory.dialogCancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-kitchen-clay border border-kitchen-clay text-xs font-bold text-white hover:bg-kitchen-clay/90 rounded transition-colors cursor-pointer"
            >
              {t.inventory.dialogSave}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
