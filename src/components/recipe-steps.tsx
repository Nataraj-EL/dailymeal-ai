import React from 'react';
import { useLanguage } from '@/context/language-context';
import { ChefHat } from 'lucide-react';
import { RecipeStep } from '@/constants/recipes';

interface RecipeStepsProps {
  steps: RecipeStep[];
}

export const RecipeSteps = ({ steps }: RecipeStepsProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white border border-border rounded-xl p-5 shadow-xs font-sans">
      <h4 className="text-xs font-extrabold text-kitchen-charcoal uppercase tracking-wider mb-4 flex items-center gap-1.5">
        <ChefHat className="w-4 h-4 text-kitchen-clay shrink-0" aria-hidden="true" />
        <span>{t.recipe.instructions}</span>
      </h4>

      <div className="space-y-4">
        {steps
          .sort((a, b) => a.stepNumber - b.stepNumber)
          .map((step) => (
            <div key={step.stepNumber} className="flex gap-4 items-start">
              {/* Step number badge */}
              <span className="w-6 h-6 rounded-full bg-kitchen-clay/10 text-kitchen-clay text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                {step.stepNumber}
              </span>
              
              {/* Step content */}
              <p className="text-xs md:text-sm text-kitchen-charcoal leading-relaxed font-normal">
                {language === 'en' ? step.en : step.ta}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
