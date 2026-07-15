'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { usePreferences } from '@/hooks/use-preferences';
import { buildAIContext } from '@/lib/ai-context';
import { useChat } from '@/hooks/use-chat';
import { ChatMessage } from '@/components/chat-message';
import { ChatInput } from '@/components/chat-input';
import { AIInsights } from '@/components/ai-insights';
import { Sparkles, Trash2 } from 'lucide-react';
import { MealType } from '@/constants/preferences';

export default function AssistantPage() {
  const { t, language } = useLanguage();
  const { preferences, isLoaded: preferencesLoaded } = usePreferences();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [ingredientsLoaded, setIngredientsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<MealType>('breakfast');

  // Load ingredients safely from localStorage
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

  const { messages, isLoading, error, sendMessage, clearHistory } = useChat();

  const isLoaded = preferencesLoaded && ingredientsLoaded;

  // Build strict AIContext using pure context builder helper
  const aiContext = useMemo(() => {
    if (!isLoaded) return null;
    return buildAIContext(selectedIngredients, preferences, activeTab);
  }, [selectedIngredients, preferences, activeTab, isLoaded]);

  const handleSend = (text: string) => {
    if (aiContext) {
      sendMessage(text, aiContext, language);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 w-full font-sans pb-28">
      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-kitchen-charcoal tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-kitchen-clay shrink-0" aria-hidden="true" />
            <span>{t.assistant.title}</span>
          </h1>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            {t.assistant.subtitle}
          </p>
        </div>

        {messages.length > 0 && (
          <button
            type="button"
            onClick={clearHistory}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-bold text-muted-foreground hover:text-red-650 hover:bg-red-50/50 rounded transition-colors shrink-0 self-start sm:self-auto cursor-pointer focus:outline-none"
          >
            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.assistant.clearHistory}</span>
          </button>
        )}
      </div>

      {/* Tabs Selector for AI Context */}
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
            id={`tab-assistant-${tab}`}
            aria-controls={`panel-assistant-${tab}`}
          >
            {t.mealTypes[tab]}
          </button>
        ))}
      </div>

      {isLoaded && aiContext && (
        <div id={`panel-assistant-${activeTab}`} role="tabpanel" aria-labelledby={`tab-assistant-${activeTab}`} className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Shared Structured Context Panel */}
          <div className="lg:col-span-4">
            <AIInsights context={aiContext} />
          </div>

          {/* Right Column: Chat Dashboard */}
          <div className="lg:col-span-8 flex flex-col border border-border rounded-lg bg-white overflow-hidden shadow-xs h-[500px]">
            {/* Messages List Container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 flex flex-col">
              {/* Initial localized welcome message bubble */}
              {messages.length === 0 && (
                <ChatMessage message={{ role: 'assistant', content: t.assistant.welcome }} />
              )}

              {/* Historic messages */}
              {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-kitchen-cream/5 border border-border/40 text-xs text-muted-foreground max-w-[50%] animate-pulse">
                  <Sparkles className="w-4 h-4 text-kitchen-clay animate-spin" />
                  <span>{t.assistant.loading}</span>
                </div>
              )}

              {/* Error Box */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-650 font-bold self-center max-w-md w-full" role="alert">
                  {t.assistant.error}
                </div>
              )}
            </div>

            {/* Input Form Bar */}
            <div className="border-t border-border p-4 bg-gray-50/50">
              <ChatInput onSend={handleSend} disabled={isLoading} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
