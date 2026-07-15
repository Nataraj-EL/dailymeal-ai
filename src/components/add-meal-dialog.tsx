'use client';

import React, { useState, useEffect } from 'react';
import { RecentlyCookedMeal } from '@/hooks/use-preferences';
import { useLanguage } from '@/context/language-context';
import { X, Star } from 'lucide-react';
import { PrimaryButton } from './primary-button';
import { MealType } from '@/constants/preferences';

interface AddMealDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (meal: Omit<RecentlyCookedMeal, 'id'>) => void;
  editMeal: RecentlyCookedMeal | null;
}

export const AddMealDialog = ({
  isOpen,
  onClose,
  onSave,
  editMeal,
}: AddMealDialogProps) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [mealType, setMealType] = useState<MealType>('breakfast');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(5);
  const [errors, setErrors] = useState<string[]>([]);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [prevEditMeal, setPrevEditMeal] = useState(editMeal);

  // Reset or pre-fill form during render when open state or edit target changes
  if (isOpen !== prevIsOpen || editMeal !== prevEditMeal) {
    setPrevIsOpen(isOpen);
    setPrevEditMeal(editMeal);
    if (isOpen) {
      if (editMeal) {
        setName(editMeal.name);
        setMealType(editMeal.mealType);
        setDate(editMeal.date);
        setRating(editMeal.rating);
      } else {
        setName('');
        setMealType('breakfast');
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
        setRating(5);
      }
      setErrors([]);
    }
  }

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    const trimmedName = name.trim();
    if (!trimmedName) {
      newErrors.push(t.dialog.errName);
    }

    if (!date) {
      newErrors.push(t.dialog.errDate);
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Allow until end of today
      if (selectedDate > today) {
        newErrors.push(t.dialog.errFuture);
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      name: trimmedName,
      mealType,
      date,
      rating,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 font-sans backdrop-blur-xs">
      <div 
        className="bg-white border border-border rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 id="dialog-title" className="text-sm md:text-base font-bold text-kitchen-charcoal">
            {editMeal ? t.dialog.titleEdit : t.dialog.titleAdd}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-muted-foreground hover:text-kitchen-charcoal focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {errors.length > 0 && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-[11px] text-red-600 space-y-1" role="alert">
              {errors.map((err, i) => (
                <p key={i} className="font-bold">• {err}</p>
              ))}
            </div>
          )}

          {/* Dish Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dish-name" className="text-xs font-bold text-kitchen-charcoal">
              {t.dialog.dishLabel}
            </label>
            <input
              id="dish-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.dialog.dishPlaceholder}
              className="w-full px-3 py-2 border border-border rounded text-sm bg-white text-kitchen-charcoal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40"
            />
          </div>

          {/* Meal Type */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="meal-type" className="text-xs font-bold text-kitchen-charcoal">
              {t.dialog.typeLabel}
            </label>
            <select
              id="meal-type"
              value={mealType}
              onChange={(e) => setMealType(e.target.value as MealType)}
              className="w-full px-3 py-2 border border-border rounded text-sm bg-white text-kitchen-charcoal focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 cursor-pointer"
            >
              <option value="breakfast">{t.mealTypes.breakfast}</option>
              <option value="lunch">{t.mealTypes.lunch}</option>
              <option value="dinner">{t.mealTypes.dinner}</option>
            </select>
          </div>

          {/* Date Cooked */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="date-cooked" className="text-xs font-bold text-kitchen-charcoal">
              {t.dialog.dateLabel}
            </label>
            <input
              id="date-cooked"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded text-sm bg-white text-kitchen-charcoal focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 cursor-pointer"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-kitchen-charcoal">
              {t.dialog.ratingLabel}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              {Array.from({ length: 5 }).map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setRating(starValue)}
                    className="focus:outline-none cursor-pointer p-0.5"
                    aria-label={`Rate ${starValue} stars`}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        starValue <= rating
                          ? 'fill-kitchen-turmeric text-kitchen-turmeric'
                          : 'text-border fill-transparent hover:text-kitchen-turmeric/50'
                      } transition-colors`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-border mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-border rounded text-sm font-semibold text-muted-foreground hover:bg-muted/10 transition-colors cursor-pointer"
            >
              {t.dialog.cancel}
            </button>
            <PrimaryButton type="submit" className="px-4 py-2 text-xs md:text-sm font-semibold">
              {t.dialog.save}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};
