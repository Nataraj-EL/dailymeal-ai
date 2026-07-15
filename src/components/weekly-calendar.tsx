'use client';

import React from 'react';
import { WeeklyPlan } from '@/lib/weekly-planner';
import { MealType } from '@/constants/preferences';
import { useLanguage } from '@/context/language-context';
import { DayMealCard } from './day-meal-card';
import { CalendarDays } from 'lucide-react';

interface WeeklyCalendarProps {
  plan: WeeklyPlan;
  onRegenerate: (dayId: string, mealType: MealType) => void;
}

export const WeeklyCalendar = ({ plan, onRegenerate }: WeeklyCalendarProps) => {
  const { t } = useLanguage();

  const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const getDayName = (dayId: string) => {
    return (t.weekly.days as Record<string, string>)[dayId] || dayId;
  };

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <CalendarDays className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h2 className="text-xs md:text-sm font-extrabold text-kitchen-charcoal tracking-tight">
          {t.weekly.calendarHeader}
        </h2>
      </div>

      <div className="space-y-6">
        {daysOrder.map((dayId) => {
          const dayPlan = plan[dayId];
          if (!dayPlan) return null;

          return (
            <div key={dayId} className="border-b border-border/40 pb-5 last:border-0 last:pb-0">
              <span className="font-extrabold text-xs text-kitchen-clay block mb-3">
                {getDayName(dayId)}
              </span>
              
              <div className="grid sm:grid-cols-3 gap-3">
                <DayMealCard
                  meal={dayPlan.breakfast}
                  dayId={dayId}
                  mealType="breakfast"
                  onRegenerate={onRegenerate}
                />
                <DayMealCard
                  meal={dayPlan.lunch}
                  dayId={dayId}
                  mealType="lunch"
                  onRegenerate={onRegenerate}
                />
                <DayMealCard
                  meal={dayPlan.dinner}
                  dayId={dayId}
                  mealType="dinner"
                  onRegenerate={onRegenerate}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
