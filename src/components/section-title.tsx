import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) => {
  return (
    <div className={`flex flex-col mb-8 ${centered ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="w-1.5 h-6 bg-kitchen-clay rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-kitchen-charcoal font-sans">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 text-base text-muted-foreground max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
