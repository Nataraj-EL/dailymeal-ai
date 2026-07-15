'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface IngredientSearchProps {
  value: string;
  onSearch: (query: string) => void;
}

export const IngredientSearch = ({
  value,
  onSearch,
}: IngredientSearchProps) => {
  const { t } = useLanguage();
  const [prevValue, setPrevValue] = useState(value);
  const [localQuery, setLocalQuery] = useState(value);

  // Sync local query with outer value if outer value changes (e.g. on clear all)
  if (value !== prevValue) {
    setPrevValue(value);
    setLocalQuery(value);
  }

  // Debounce local query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(localQuery);
    }, 250); // 250ms debounce for quick response

    return () => clearTimeout(timer);
  }, [localQuery, onSearch]);

  const handleClear = () => {
    setLocalQuery('');
    onSearch('');
  };

  return (
    <div className="relative w-full max-w-md font-sans">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground" aria-hidden="true">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder={t.planner.searchPlaceholder}
        className="w-full pl-9 pr-9 py-2.5 rounded-md border border-border bg-white text-sm text-kitchen-charcoal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 focus:border-kitchen-clay/60 transition-all"
        aria-label={t.planner.searchPlaceholder}
      />
      {localQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-kitchen-charcoal focus:outline-none cursor-pointer"
          aria-label="Clear search query"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
