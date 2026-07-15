'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { CheckSquare } from 'lucide-react';

interface UtilizationCardProps {
  utilizationPercentage: number;
}

export const UtilizationCard = ({ utilizationPercentage }: UtilizationCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans">
      <div className="flex items-center gap-2 mb-3">
        <CheckSquare className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-kitchen-charcoal leading-none">
          {t.insights.utilizationTitle}
        </h3>
      </div>

      <p className="text-xs text-muted-foreground mb-4 font-normal">
        {t.insights.utilizationDesc}
      </p>

      <div className="flex items-center gap-4">
        {/* Visual Progress Bar */}
        <div className="flex-1 bg-border rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-kitchen-clay h-full transition-all duration-500 rounded-full"
            style={{ width: `${utilizationPercentage}%` }}
            role="progressbar"
            aria-valuenow={utilizationPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <span className="text-base font-extrabold text-kitchen-charcoal shrink-0 leading-none">
          {utilizationPercentage}%
        </span>
      </div>
    </div>
  );
};
