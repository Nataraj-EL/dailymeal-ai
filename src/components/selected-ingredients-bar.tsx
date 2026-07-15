'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { PrimaryButton } from '@/components/primary-button';
import { Trash2, ArrowRight } from 'lucide-react';

interface SelectedIngredientsBarProps {
  count: number;
  onClear: () => void;
}

export const SelectedIngredientsBar = ({
  count,
  onClear,
}: SelectedIngredientsBarProps) => {
  const { t, language } = useLanguage();

  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-white py-4 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] z-40 font-sans">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-5 px-2 items-center justify-center rounded-full bg-kitchen-clay text-white text-[11px] font-bold">
            {count}
          </span>
          <span className="text-xs md:text-sm font-medium text-kitchen-charcoal hidden sm:inline">
            {language === 'en' ? `${count} selected` : `${count} தேர்ந்தெடுக்கப்பட்டது`}
          </span>
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-red-600 transition-colors focus:outline-none cursor-pointer"
            aria-label={t.planner.clearAll}
          >
            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.planner.clearAll}</span>
          </button>
        </div>

        <Link href="/preferences" className="shrink-0">
          <PrimaryButton className="flex items-center gap-2 px-5 py-4 text-xs md:text-sm">
            <span>{t.planner.continueCTA}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};
