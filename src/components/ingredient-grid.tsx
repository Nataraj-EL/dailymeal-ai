import React, { ReactNode } from 'react';

interface IngredientGridProps {
  children: ReactNode;
}

export const IngredientGrid = ({ children }: IngredientGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {children}
    </div>
  );
};
