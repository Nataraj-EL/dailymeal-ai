'use client';

import React from 'react';

interface PreferenceChipProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

export const PreferenceChip = ({
  label,
  selected,
  onToggle,
}: PreferenceChipProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-full border text-xs md:text-sm font-semibold cursor-pointer transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 ${
        selected
          ? 'border-kitchen-clay bg-kitchen-clay/5 text-kitchen-clay font-bold'
          : 'border-border bg-white text-muted-foreground hover:border-kitchen-clay/35 hover:text-kitchen-charcoal'
      }`}
    >
      {label}
    </div>
  );
};
