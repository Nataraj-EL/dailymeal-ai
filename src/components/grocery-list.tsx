'use client';

import React from 'react';
import { GroceryItem } from '@/lib/grocery-generator';
import { useLanguage } from '@/context/language-context';
import { ShoppingBag, Check } from 'lucide-react';
import { ingredients } from '@/constants/ingredients';

interface GroceryListProps {
  items: GroceryItem[];
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export const GroceryList = ({ items, checkedItems, onToggle }: GroceryListProps) => {
  const { t, language } = useLanguage();

  const getIngredientDetail = (id: string) => {
    const ing = ingredients.find((i) => i.id === id);
    return ing
      ? { name: language === 'en' ? ing.en : ing.ta, emoji: ing.emoji }
      : { name: id, emoji: '🍲' };
  };

  const getCategoryLabel = (category: string) => {
    return (t.categories as Record<string, string>)[category] || category;
  };

  if (items.length === 0) {
    return (
      <div className="border border-border bg-white rounded-lg p-6 font-sans text-center space-y-3">
        <div className="w-10 h-10 rounded-full bg-kitchen-leaf/10 text-kitchen-leaf flex items-center justify-center mx-auto" aria-hidden="true">
          <Check className="w-5 h-5" />
        </div>
        <h3 className="text-sm font-bold text-kitchen-charcoal">
          {t.weekly.groceryHeader}
        </h3>
        <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
          {t.weekly.emptyGrocery}
        </p>
      </div>
    );
  }

  const categories = Array.from(new Set(items.map((item) => item.category)));

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <ShoppingBag className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h2 className="text-xs md:text-sm font-extrabold text-kitchen-charcoal tracking-tight">
          {t.weekly.groceryHeader}
        </h2>
      </div>

      <div className="space-y-5">
        {categories.map((category) => {
          const categoryItems = items.filter((item) => item.category === category);
          if (categoryItems.length === 0) return null;

          return (
            <div key={category} className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block border-b border-border/40 pb-1">
                {getCategoryLabel(category)}
              </span>
              
              <div className="space-y-1.5">
                {categoryItems.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  const { name, emoji } = getIngredientDetail(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onToggle(item.id)}
                      className={`w-full flex items-center justify-between gap-3 p-2 rounded text-left transition-colors cursor-pointer border focus:outline-none focus:ring-1 focus:ring-kitchen-clay/40 ${
                        isChecked
                          ? 'bg-gray-50 border-gray-150 text-muted-foreground line-through opacity-65'
                          : 'bg-white border-border/40 text-kitchen-charcoal hover:border-kitchen-clay/20'
                      }`}
                      aria-pressed={isChecked}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked 
                            ? 'bg-kitchen-leaf border-kitchen-leaf text-white' 
                            : 'border-border bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-base shrink-0" aria-hidden="true">{emoji}</span>
                        <span className="text-xs font-semibold truncate leading-none mt-0.5">{name}</span>
                      </div>

                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 leading-none self-center shrink-0">
                        {item.quantity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
