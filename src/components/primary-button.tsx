'use client';

import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export const PrimaryButton = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  disabled = false,
}: PrimaryButtonProps) => {
  let colorClasses = 'bg-kitchen-clay hover:bg-kitchen-clay/90 text-white';
  
  if (variant === 'secondary') {
    colorClasses = 'bg-kitchen-leaf hover:bg-kitchen-leaf/90 text-white';
  } else if (variant === 'outline') {
    colorClasses = 'border border-kitchen-clay/40 text-kitchen-clay hover:bg-kitchen-clay/5 bg-transparent';
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold px-6 py-5 rounded-md transition-all duration-150 cursor-pointer ${colorClasses} ${className}`}
    >
      {children}
    </Button>
  );
};
