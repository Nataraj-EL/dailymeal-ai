import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 font-sans">
      <div className="w-8 h-8 border-3 border-kitchen-clay/20 border-t-kitchen-clay rounded-full animate-spin" aria-hidden="true" />
      <p className="mt-4 text-sm text-muted-foreground font-medium">
        Loading...
      </p>
    </div>
  );
}
