'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { PrimaryButton } from '@/components/primary-button';
import { Settings } from 'lucide-react';

export default function PreferencesPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center font-sans">
      <div className="p-4 rounded-full bg-kitchen-clay/10 text-kitchen-clay mb-6" aria-hidden="true">
        <Settings className="w-10 h-10" />
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-kitchen-charcoal tracking-tight">
        {t.preferencesPlaceholder.title}
      </h1>
      <p className="mt-4 text-muted-foreground max-w-lg text-sm md:text-base leading-relaxed">
        {t.preferencesPlaceholder.desc}
      </p>
      <div className="mt-8">
        <Link href="/">
          <PrimaryButton variant="outline">
            {t.common.ctaBackHome}
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
