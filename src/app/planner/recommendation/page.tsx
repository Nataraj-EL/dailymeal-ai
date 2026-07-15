'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { PrimaryButton } from '@/components/primary-button';
import { Sparkles, UtensilsCrossed } from 'lucide-react';

export default function PlannerRecommendationPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center font-sans">
      <div className="p-4 rounded-full bg-kitchen-clay/10 text-kitchen-clay mb-6 animate-pulse" aria-hidden="true">
        <Sparkles className="w-10 h-10" />
      </div>
      <h1 className="text-2xl md:text-4xl font-extrabold text-kitchen-charcoal tracking-tight">
        {language === 'en' ? 'Generating Recommendations' : 'பரிந்துரைகள் தயார் செய்யப்படுகின்றன'}
      </h1>
      <p className="mt-4 text-muted-foreground max-w-lg text-sm md:text-base leading-relaxed">
        {language === 'en' 
          ? 'Sprint 3 integration complete. The AI-powered South Indian meal recommendation engine will process your selected ingredients and household preferences here in Sprint 4.'
          : 'பிரிண்ட் 3 வடிவமைப்பு வெற்றிகரமாக முடிந்தது. சமையலறையில் தேர்ந்தெடுத்த பொருட்கள் மற்றும் குடும்ப விருப்பங்களின் அடிப்படையில் உணவுப் பரிந்துரை இன்ஜின் அடுத்த பிரிண்டில் இங்கு அமையும்.'}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/preferences">
          <PrimaryButton variant="outline" className="w-full sm:w-auto">
            {language === 'en' ? 'Edit Preferences' : 'விருப்பங்களை மாற்று'}
          </PrimaryButton>
        </Link>
        <Link href="/">
          <PrimaryButton className="flex items-center justify-center gap-2 w-full sm:w-auto">
            <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
            <span>{t.common.ctaBackHome}</span>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
