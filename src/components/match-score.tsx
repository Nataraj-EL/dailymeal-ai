'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';

interface MatchScoreProps {
  score: number;
  confidence: 'high' | 'medium' | 'low';
}

export const MatchScore = ({ score, confidence }: MatchScoreProps) => {
  const { t } = useLanguage();

  let badgeColor = 'bg-gray-100 text-gray-700 border-gray-200';
  let badgeText = t.recommendations.confidenceLow;

  if (confidence === 'high') {
    badgeColor = 'bg-kitchen-leaf/10 text-kitchen-leaf border-kitchen-leaf/20';
    badgeText = t.recommendations.confidenceHigh;
  } else if (confidence === 'medium') {
    badgeColor = 'bg-kitchen-turmeric/10 text-kitchen-turmeric border-kitchen-turmeric/20';
    badgeText = t.recommendations.confidenceMedium;
  }

  return (
    <div className="flex items-center gap-3 font-sans">
      <div className="flex flex-col items-start">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider leading-none">
          {t.recommendations.matchScore}
        </span>
        <span className="text-3xl font-extrabold text-kitchen-charcoal leading-none mt-1">
          {score}%
        </span>
      </div>

      <div className="h-8 w-px bg-border" aria-hidden="true" />

      <div className="flex flex-col items-start">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider leading-none">
          {t.recommendations.confidenceLabel}
        </span>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded border text-[10px] font-bold leading-none mt-1.5 ${badgeColor}`}>
          {badgeText}
        </span>
      </div>
    </div>
  );
};
