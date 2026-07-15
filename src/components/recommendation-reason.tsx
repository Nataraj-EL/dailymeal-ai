'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { Check } from 'lucide-react';

interface RecommendationReasonProps {
  reasonKeys: string[];
}

export const RecommendationReason = ({ reasonKeys }: RecommendationReasonProps) => {
  const { t } = useLanguage();

  if (reasonKeys.length === 0) return null;

  return (
    <div className="space-y-2 font-sans">
      <span className="text-xs font-bold text-kitchen-charcoal uppercase tracking-wider block mb-1">
        {t.recommendations.whyRecommended}
      </span>
      <ul className="space-y-1.5">
        {reasonKeys.map((key) => {
          const explanation = (t.reasons as Record<string, string>)[key] || key;
          return (
            <li key={key} className="flex items-start gap-2 text-xs text-muted-foreground font-normal leading-relaxed">
              <Check className="w-3.5 h-3.5 text-kitchen-clay shrink-0 mt-0.5" aria-hidden="true" />
              <span>{explanation}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
