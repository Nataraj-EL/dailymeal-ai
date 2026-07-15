'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { BarChart3, CheckSquare, ShoppingBag } from 'lucide-react';

interface WeeklySummaryProps {
  diversityScore: number;
  utilization: number;
  groceryCount: number;
}

export const WeeklySummary = ({ diversityScore, utilization, groceryCount }: WeeklySummaryProps) => {
  const { t } = useLanguage();

  let varietyColor = 'text-red-650 bg-red-50/50 border-red-200';
  let varietyText = t.weekly.diversityLow;

  if (diversityScore >= 80) {
    varietyColor = 'text-kitchen-leaf bg-kitchen-leaf/5 border-kitchen-leaf/20';
    varietyText = t.weekly.diversityHigh;
  } else if (diversityScore >= 50) {
    varietyColor = 'text-kitchen-turmeric bg-kitchen-turmeric/5 border-kitchen-turmeric/20';
    varietyText = t.weekly.diversityMedium;
  }

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans space-y-4">
      <h2 className="text-xs md:text-sm font-extrabold text-kitchen-charcoal tracking-tight border-b border-border/40 pb-2.5">
        {t.weekly.summaryHeader}
      </h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {/* Recipe Diversity */}
        <div className="p-3.5 border border-border rounded-lg bg-gray-50/30 space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BarChart3 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
              {t.weekly.diversityScore}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2 mt-1">
            <span className="text-lg font-extrabold text-kitchen-charcoal leading-none">
              {diversityScore}%
            </span>
            <span className={`inline-flex px-1.5 py-0.5 rounded border text-[9px] font-bold leading-none ${varietyColor}`}>
              {varietyText}
            </span>
          </div>
        </div>

        {/* Ingredient Utilization */}
        <div className="p-3.5 border border-border rounded-lg bg-gray-50/30 space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
              {t.weekly.utilizationRate}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2 mt-1">
            <span className="text-lg font-extrabold text-kitchen-charcoal leading-none">
              {utilization}%
            </span>
            <div className="w-12 bg-border/80 rounded-full h-1.5 overflow-hidden shrink-0 self-center">
              <div className="bg-kitchen-clay h-full rounded-full" style={{ width: `${utilization}%` }} />
            </div>
          </div>
        </div>

        {/* Grocery Count */}
        <div className="p-3.5 border border-border rounded-lg bg-gray-50/30 space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
              {t.weekly.totalGroceries}
            </span>
          </div>
          <div className="mt-1">
            <span className="text-lg font-extrabold text-kitchen-charcoal leading-none">
              {groceryCount}
            </span>
            <span className="text-[10px] text-muted-foreground ml-1.5 font-normal">
              items
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
