import React from 'react';
import { useLanguage } from '@/context/language-context';
import { Sparkles, ArchiveRestore } from 'lucide-react';

interface CookingTipsProps {
  chefTips: {
    en: string;
    ta: string;
  }[];
  storageLeftoverTips: {
    en: string;
    ta: string;
  };
}

export const CookingTips = ({ chefTips, storageLeftoverTips }: CookingTipsProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-4 font-sans">
      {/* Chef Tips */}
      {chefTips.length > 0 && (
        <div className="bg-kitchen-cream/5 border border-kitchen-clay/10 rounded-xl p-5 shadow-xs flex flex-col">
          <h4 className="text-xs font-extrabold text-kitchen-clay uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.recipe.chefTips}</span>
          </h4>
          <ul className="space-y-2.5 flex-1">
            {chefTips.map((tip, idx) => (
              <li key={idx} className="text-xs md:text-sm text-kitchen-charcoal leading-relaxed font-normal list-disc pl-1 ml-4">
                {language === 'en' ? tip.en : tip.ta}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Storage and Leftover Tips */}
      <div className="bg-blue-50/20 border border-blue-100/50 rounded-xl p-5 shadow-xs flex flex-col">
        <h4 className="text-xs font-extrabold text-blue-650 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <ArchiveRestore className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{t.recipe.storageTips}</span>
        </h4>
        <p className="text-xs md:text-sm text-kitchen-charcoal leading-relaxed font-normal flex-1">
          {language === 'en' ? storageLeftoverTips.en : storageLeftoverTips.ta}
        </p>
      </div>
    </div>
  );
};
