import React from 'react';
import { useLanguage } from '@/context/language-context';
import { Activity, Dumbbell, Flame, Wheat } from 'lucide-react';

interface NutritionCardProps {
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const NutritionCard = ({ nutrition }: NutritionCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white border border-border rounded-xl p-5 shadow-xs font-sans">
      <h4 className="text-xs font-extrabold text-kitchen-charcoal uppercase tracking-wider mb-4 flex items-center gap-1.5">
        <Activity className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <span>{t.recipe.nutritionHeader}</span>
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Calories */}
        <div className="bg-orange-50/50 border border-orange-100 rounded-lg p-3.5 flex flex-col items-center justify-center text-center">
          <Flame className="w-5 h-5 text-orange-500 mb-1 shrink-0" />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.calories}
          </span>
          <span className="text-sm font-extrabold text-kitchen-charcoal mt-1">
            {nutrition.calories} kcal
          </span>
        </div>

        {/* Protein */}
        <div className="bg-red-50/50 border border-red-100 rounded-lg p-3.5 flex flex-col items-center justify-center text-center">
          <Dumbbell className="w-5 h-5 text-red-500 mb-1 shrink-0" />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.protein}
          </span>
          <span className="text-sm font-extrabold text-kitchen-charcoal mt-1">
            {nutrition.protein}
          </span>
        </div>

        {/* Carbs */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-3.5 flex flex-col items-center justify-center text-center">
          <Wheat className="w-5 h-5 text-amber-600 mb-1 shrink-0" />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.carbs}
          </span>
          <span className="text-sm font-extrabold text-kitchen-charcoal mt-1">
            {nutrition.carbs}
          </span>
        </div>

        {/* Fat */}
        <div className="bg-yellow-50/50 border border-yellow-100 rounded-lg p-3.5 flex flex-col items-center justify-center text-center">
          <Activity className="w-5 h-5 text-yellow-600 mb-1 shrink-0" />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
            {t.recipe.fat}
          </span>
          <span className="text-sm font-extrabold text-kitchen-charcoal mt-1">
            {nutrition.fat}
          </span>
        </div>
      </div>
    </div>
  );
};
