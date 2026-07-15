'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { AlertTriangle, Lightbulb } from 'lucide-react';

interface KitchenInsightsProps {
  expiringAlerts: Array<{ ingredientId: string; priority: 'high' | 'medium' }>;
  leftoverSuggestions: string[];
}

export const KitchenInsights = ({
  expiringAlerts,
  leftoverSuggestions,
}: KitchenInsightsProps) => {
  const { t, language } = useLanguage();

  const getIngredientDetail = (id: string) => {
    const ing = ingredients.find((i) => i.id === id);
    if (!ing) return { name: id, emoji: '🍲' };
    return {
      name: language === 'en' ? ing.en : ing.ta,
      emoji: ing.emoji,
    };
  };

  const hasAlerts = expiringAlerts.length > 0;
  const hasLeftovers = leftoverSuggestions.length > 0;

  if (!hasAlerts && !hasLeftovers) return null;

  return (
    <div className="border border-border bg-white rounded-lg p-5 font-sans space-y-4">
      {/* Expiring Alerts */}
      {hasAlerts && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-red-650">
            <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <h3 className="text-[10px] font-bold uppercase tracking-wider leading-none">
              {t.insights.expiringTitle}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground font-normal">
            {t.insights.expiringDesc}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {expiringAlerts.map(({ ingredientId, priority }) => {
              const { name, emoji } = getIngredientDetail(ingredientId);
              const badgeColor =
                priority === 'high'
                  ? 'bg-red-50 text-red-700 border-red-100'
                  : 'bg-amber-50 text-amber-700 border-amber-100';
              return (
                <span
                  key={ingredientId}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-bold leading-none ${badgeColor}`}
                >
                  <span>{emoji}</span>
                  <span>{name}</span>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {hasAlerts && hasLeftovers && <div className="h-px bg-border/60" aria-hidden="true" />}

      {/* Leftover suggestions */}
      {hasLeftovers && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-kitchen-clay">
            <Lightbulb className="w-4 h-4 shrink-0" aria-hidden="true" />
            <h3 className="text-[10px] font-bold uppercase tracking-wider leading-none">
              {t.insights.leftoversTitle}
            </h3>
          </div>
          <ul className="space-y-1.5">
            {leftoverSuggestions.map((key) => {
              const tip = (t.insights as Record<string, string>)[key] || key;
              return (
                <li
                  key={key}
                  className="text-xs text-muted-foreground font-normal leading-relaxed pl-1"
                >
                  • {tip}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
