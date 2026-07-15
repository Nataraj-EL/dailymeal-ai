'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { PrimaryButton } from '@/components/primary-button';
import { SectionTitle } from '@/components/section-title';
import { FeatureCard } from '@/components/feature-card';
import { 
  Flame, 
  Sliders, 
  RefreshCw, 
  ClipboardList 
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border py-16 md:py-24 bg-kitchen-cream/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kitchen-clay/20 bg-kitchen-clay/5 text-kitchen-clay text-xs font-semibold mb-6">
            <span>{t.hero.tagline}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-kitchen-charcoal tracking-tight max-w-3xl leading-tight">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-8">
            <Link href="/planner">
              <PrimaryButton className="px-8 py-5 text-sm md:text-base shadow-sm">
                {t.common.ctaStart}
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 border-b border-border bg-white font-sans">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle 
            title={t.intro.title} 
            centered 
          />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
            {t.intro.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 border-b border-border bg-kitchen-cream/5">
        <div className="max-w-6xl mx-auto px-6 font-sans">
          <SectionTitle 
            title={t.features.title} 
            subtitle={t.features.subtitle} 
            centered 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <FeatureCard
              title={t.features.card1Title}
              description={t.features.card1Desc}
              icon={<Flame className="w-4 h-4" />}
            />
            <FeatureCard
              title={t.features.card2Title}
              description={t.features.card2Desc}
              icon={<Sliders className="w-4 h-4" />}
            />
            <FeatureCard
              title={t.features.card3Title}
              description={t.features.card3Desc}
              icon={<RefreshCw className="w-4 h-4" />}
            />
            <FeatureCard
              title={t.features.card4Title}
              description={t.features.card4Desc}
              icon={<ClipboardList className="w-4 h-4" />}
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-20 border-b border-border bg-white font-sans">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle 
            title={t.howItWorks.title} 
            subtitle={t.howItWorks.subtitle} 
            centered 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="flex flex-col p-4">
              <span className="text-xs font-bold text-kitchen-clay tracking-wider uppercase mb-1">Step 1</span>
              <h3 className="font-bold text-base text-kitchen-charcoal mb-2">{t.howItWorks.step1Title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t.howItWorks.step1Desc}</p>
            </div>
            <div className="flex flex-col p-4 border-t sm:border-t-0 sm:border-l border-border">
              <span className="text-xs font-bold text-kitchen-clay tracking-wider uppercase mb-1">Step 2</span>
              <h3 className="font-bold text-base text-kitchen-charcoal mb-2">{t.howItWorks.step2Title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t.howItWorks.step2Desc}</p>
            </div>
            <div className="flex flex-col p-4 border-t lg:border-t-0 lg:border-l border-border">
              <span className="text-xs font-bold text-kitchen-clay tracking-wider uppercase mb-1">Step 3</span>
              <h3 className="font-bold text-base text-kitchen-charcoal mb-2">{t.howItWorks.step3Title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t.howItWorks.step3Desc}</p>
            </div>
            <div className="flex flex-col p-4 border-t lg:border-t-0 lg:border-l border-border">
              <span className="text-xs font-bold text-kitchen-clay tracking-wider uppercase mb-1">Step 4</span>
              <h3 className="font-bold text-base text-kitchen-charcoal mb-2">{t.howItWorks.step4Title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t.howItWorks.step4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-16 md:py-20 bg-kitchen-cream/10 font-sans">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight">
            {t.ctaSection.title}
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted-foreground max-w-md mx-auto">
            {t.ctaSection.subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/planner">
              <PrimaryButton className="px-8 py-5 text-sm md:text-base">
                {t.common.ctaStart}
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
