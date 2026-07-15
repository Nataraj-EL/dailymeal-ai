import React, { ReactNode } from 'react';

interface PreferenceSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const PreferenceSection = ({
  title,
  description,
  children,
  className = '',
}: PreferenceSectionProps) => {
  return (
    <section className={`border border-border bg-white rounded-lg p-5 font-sans ${className}`}>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-bold text-kitchen-charcoal tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-normal">
            {description}
          </p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};
