'use client';

import React from 'react';
import { RecentlyCookedMeal } from '@/hooks/use-preferences';
import { useLanguage } from '@/context/language-context';
import { Edit2, Trash2, Calendar, Star } from 'lucide-react';

interface MealHistoryCardProps {
  meal: RecentlyCookedMeal;
  onEdit: () => void;
  onDelete: () => void;
}

export const MealHistoryCard = ({
  meal,
  onEdit,
  onDelete,
}: MealHistoryCardProps) => {
  const { t } = useLanguage();

  // Map meal types dynamically
  const mealTypeLabel = t.mealTypes[meal.mealType] || meal.mealType;

  return (
    <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-kitchen-cream/10 font-sans">
      <div className="flex flex-col min-w-0 pr-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-sm text-kitchen-charcoal truncate">
            {meal.name}
          </span>
          <span className="inline-flex px-2 py-0.5 rounded bg-kitchen-leaf/10 text-kitchen-leaf text-[10px] font-bold uppercase tracking-wider">
            {mealTypeLabel}
          </span>
        </div>
        
        <div className="flex items-center gap-3.5 mt-2 text-xs text-muted-foreground flex-wrap">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{meal.date}</span>
          </div>
          
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-3 h-3 ${
                  index < meal.rating
                    ? 'fill-kitchen-turmeric text-kitchen-turmeric'
                    : 'text-border fill-transparent'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={onEdit}
          className="p-1.5 rounded hover:bg-kitchen-clay/10 text-muted-foreground hover:text-kitchen-clay transition-colors cursor-pointer"
          aria-label={`Edit ${meal.name}`}
        >
          <Edit2 className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="p-1.5 rounded hover:bg-red-50 text-muted-foreground hover:text-red-600 transition-colors cursor-pointer"
          aria-label={`Delete ${meal.name}`}
        >
          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
