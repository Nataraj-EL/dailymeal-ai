'use client';

import React from 'react';
import { UserPreferences } from '@/hooks/use-preferences';
import { useLanguage } from '@/context/language-context';
import { ingredients } from '@/constants/ingredients';
import { 
  ShieldAlert, 
  Utensils, 
  Flame, 
  Clock, 
  Users 
} from 'lucide-react';

interface PreferenceSummaryProps {
  preferences: UserPreferences;
}

export const PreferenceSummary = ({ preferences }: PreferenceSummaryProps) => {
  const { t, language } = useLanguage();
  const { diet, spiceLevel, cookingTime, familySize, avoidIngredientIds } = preferences;

  const dietLabel = diet === 'veg' ? t.diets.veg : t.diets.nonveg;
  const spiceLabel = t.spices[spiceLevel] || spiceLevel;

  // Map avoided ingredient IDs to localized names
  const avoidedIngredientsList = ingredients
    .filter((ing) => avoidIngredientIds.includes(ing.id))
    .map((ing) => (language === 'en' ? ing.en : ing.ta));

  return (
    <div className="border border-border bg-kitchen-cream/10 rounded-lg p-5 font-sans">
      <h3 className="text-xs font-bold text-kitchen-charcoal uppercase tracking-wider mb-4 border-b border-border/60 pb-2">
        {t.preferences.summaryHeader}
      </h3>

      <ul className="space-y-3.5 text-xs md:text-sm text-kitchen-charcoal">
        {/* Diet */}
        <li className="flex items-start gap-2.5">
          <Utensils className="w-4 h-4 text-kitchen-clay shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold text-muted-foreground block text-[10px] uppercase tracking-wider mb-0.5">
              {t.preferences.summaryDiet}
            </span>
            <span className="font-bold">{dietLabel}</span>
          </div>
        </li>

        {/* Spice */}
        <li className="flex items-start gap-2.5">
          <Flame className="w-4 h-4 text-kitchen-clay shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold text-muted-foreground block text-[10px] uppercase tracking-wider mb-0.5">
              {t.preferences.summarySpice}
            </span>
            <span className="font-bold">{spiceLabel}</span>
          </div>
        </li>

        {/* Cooking time */}
        <li className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-kitchen-clay shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold text-muted-foreground block text-[10px] uppercase tracking-wider mb-0.5">
              {t.preferences.summaryTime}
            </span>
            <span className="font-bold text-xs md:text-sm">
              {cookingTime === '15m' && (language === 'en' ? 'Quick (~15 mins)' : 'விரைவாக (~15 நிமி)')}
              {cookingTime === '30m' && (language === 'en' ? 'Standard (~30 mins)' : 'சாதாரண (~30 நிமி)')}
              {cookingTime === '60m' && (language === 'en' ? 'Elaborate (~60 mins)' : 'விரிவான (~60 நிமி)')}
            </span>
          </div>
        </li>

        {/* Family size */}
        <li className="flex items-start gap-2.5">
          <Users className="w-4 h-4 text-kitchen-clay shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold text-muted-foreground block text-[10px] uppercase tracking-wider mb-0.5">
              {t.preferences.summarySize}
            </span>
            <span className="font-bold">{familySize}</span>
          </div>
        </li>

        {/* Avoided */}
        <li className="flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-kitchen-clay shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold text-muted-foreground block text-[10px] uppercase tracking-wider mb-0.5">
              {t.preferences.summaryAvoid}
            </span>
            {avoidedIngredientsList.length > 0 ? (
              <span className="font-bold line-clamp-2">
                {avoidedIngredientsList.join(', ')}
              </span>
            ) : (
              <span className="font-normal text-muted-foreground italic">
                {t.preferences.none}
              </span>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
