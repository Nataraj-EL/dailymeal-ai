'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { usePreferences } from '@/hooks/use-preferences';
import { getRecommendations } from '@/lib/recommendation-engine';
import { getKitchenInsights } from '@/lib/kitchen-intelligence';
import { RecommendationCard } from '@/components/recommendation-card';
import { PrimaryButton } from '@/components/primary-button';
import { UtilizationCard } from '@/components/utilization-card';
import { DiversityIndicator } from '@/components/diversity-indicator';
import { IngredientSubstitutions } from '@/components/ingredient-substitutions';
import { KitchenInsights } from '@/components/kitchen-insights';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { MealType } from '@/constants/preferences';

export default function RecommendationPage() {
  const { t } = useLanguage();
  const { preferences, isLoaded: preferencesLoaded } = usePreferences();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [ingredientsLoaded, setIngredientsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<MealType>('breakfast');
  const [selectedRecIndex, setSelectedRecIndex] = useState(0);

  const [prevActiveTab, setPrevActiveTab] = useState(activeTab);

  // Sync selected ingredients from localStorage safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selected_ingredients');
      let initialIngredients: string[] = [];
      if (saved) {
        try {
          initialIngredients = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse selected ingredients', e);
        }
      }
      
      const timer = setTimeout(() => {
        setSelectedIngredients(initialIngredients);
        setIngredientsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  // Compute recommendations dynamically using pure engine
  const recommendations = useMemo(() => {
    if (!preferencesLoaded || !ingredientsLoaded) return [];
    return getRecommendations(selectedIngredients, preferences, activeTab);
  }, [selectedIngredients, preferences, activeTab, preferencesLoaded, ingredientsLoaded]);

  // Reset selected index during render when tab changes to avoid cascading effect warning
  if (activeTab !== prevActiveTab) {
    setPrevActiveTab(activeTab);
    setSelectedRecIndex(0);
  }

  const isLoaded = preferencesLoaded && ingredientsLoaded;
  const hasRecommendations = recommendations.length > 0;
  
  // Selected recommendation
  const currentRecommendation = recommendations[selectedRecIndex];

  // Compute kitchen intelligence insights on top of recommendation
  const insights = useMemo(() => {
    if (!currentRecommendation) return null;
    return getKitchenInsights(currentRecommendation.meal, selectedIngredients, preferences.recentlyCooked);
  }, [currentRecommendation, selectedIngredients, preferences.recentlyCooked]);

  // List of alternatives (excluding current selected)
  const alternatives = useMemo(() => {
    return recommendations
      .map((rec, index) => ({ rec, index }))
      .filter((item) => item.index !== selectedRecIndex);
  }, [recommendations, selectedRecIndex]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 w-full font-sans pb-28">
      {/* Back to planner link header */}
      <div className="mb-6">
        <Link 
          href="/planner" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-kitchen-clay transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>{t.recommendations.backToPlanner}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-kitchen-clay shrink-0" aria-hidden="true" />
          <span>{t.recommendations.title}</span>
        </h1>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
          {t.recommendations.subtitle}
        </p>
      </div>

      {/* Tabs Toggles */}
      <div className="flex border-b border-border mb-8 font-bold text-xs md:text-sm" role="tablist">
        {(['breakfast', 'lunch', 'dinner'] as MealType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 border-b-2 transition-all cursor-pointer focus:outline-none ${
              activeTab === tab
                ? 'border-kitchen-clay text-kitchen-clay font-extrabold'
                : 'border-transparent text-muted-foreground hover:text-kitchen-charcoal'
            }`}
            aria-selected={activeTab === tab}
            role="tab"
            id={`tab-${tab}`}
            aria-controls={`panel-${tab}`}
          >
            {t.mealTypes[tab]}
          </button>
        ))}
      </div>

      {/* Main Results grid display */}
      {isLoaded && (
        <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          {hasRecommendations ? (
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Top Recommendation details & Insights dashboard */}
              <div className="lg:col-span-8 space-y-6">
                <RecommendationCard recommendation={currentRecommendation} />
                
                {insights && (
                  <div className="space-y-4 pt-2">
                    <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest block leading-none">
                      Kitchen Intelligence Insights
                    </span>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <UtilizationCard utilizationPercentage={insights.utilizationPercentage} />
                      <DiversityIndicator diversityScore={insights.diversityScore} />
                    </div>

                    {(insights.substitutions.length > 0 || 
                      insights.expiringAlerts.length > 0 || 
                      insights.leftoverSuggestions.length > 0) && (
                      <div className="grid sm:grid-cols-2 gap-4 items-start">
                        {insights.substitutions.length > 0 && (
                          <IngredientSubstitutions substitutions={insights.substitutions} />
                        )}
                        {(insights.expiringAlerts.length > 0 || insights.leftoverSuggestions.length > 0) && (
                          <KitchenInsights 
                            expiringAlerts={insights.expiringAlerts}
                            leftoverSuggestions={insights.leftoverSuggestions}
                          />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Side Alternative list */}
              {alternatives.length > 0 && (
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    {t.recommendations.alternativeMatches}
                  </span>
                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                    {alternatives.map(({ rec, index }) => (
                      <RecommendationCard
                        key={rec.meal.id}
                        recommendation={rec}
                        isAlternative
                        onSelect={() => setSelectedRecIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-border bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-kitchen-charcoal">
                {t.recommendations.noRecommendationsTitle}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-sm leading-relaxed font-normal">
                {t.recommendations.noRecommendationsDesc}
              </p>
              <div className="mt-8">
                <Link href="/planner">
                  <PrimaryButton className="px-6 py-5 text-sm font-semibold">
                    {t.recommendations.backToPlanner}
                  </PrimaryButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
