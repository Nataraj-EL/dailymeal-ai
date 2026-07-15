'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { BarChart3 } from 'lucide-react';

interface DiversityIndicatorProps {
  diversityScore: number;
}

export const DiversityIndicator = ({ diversityScore }: DiversityIndicatorProps) => {
  const { t } = useLanguage();

  let levelColor = 'text-red-600 bg-red-50 border-red-200';
  let levelText = t.insights.diversityLevelLow;

  if (diversityScore >= 80) {
    levelColor = 'text-kitchen-leaf bg-kitchen-leaf/5 border-kitchen-leaf/20';
    levelText = t.insights.diversityLevelHigh;
  } else if (diversityScore >= 50) {
    levelColor = 'text-kitchen-turmeric bg-kitchen-turmeric/5 border-kitchen-turmeric/20';
    levelText = t.insights.diversityLevelMedium;
  }

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans">
      <div className="flex items-center gap-2 mb-3">
        <BarChart3 className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-kitchen-charcoal leading-none">
          {t.insights.diversityTitle}
        </h3>
      </div>

      <p className="text-xs text-muted-foreground mb-4 font-normal">
        {t.insights.diversityDesc}
      </p>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-kitchen-charcoal">
          <span className={`inline-flex px-2 py-0.5 rounded border text-[10px] font-bold leading-none ${levelColor}`}>
            {levelText}
          </span>
          <span className="font-extrabold leading-none">{diversityScore} / 100</span>
        </div>

        <div className="bg-border rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-kitchen-clay h-full transition-all duration-500 rounded-full"
            style={{ width: `${diversityScore}%` }}
            role="progressbar"
            aria-valuenow={diversityScore}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
};
