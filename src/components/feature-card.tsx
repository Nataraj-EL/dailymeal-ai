import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className = '',
}: FeatureCardProps) => {
  return (
    <Card className={`border border-border bg-kitchen-cream/30 hover:border-kitchen-clay/30 transition-all duration-200 ${className}`}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {icon && (
          <div className="p-2 rounded-lg bg-kitchen-clay/10 text-kitchen-clay shrink-0" aria-hidden="true">
            {icon}
          </div>
        )}
        <CardTitle className="text-lg font-bold text-kitchen-charcoal font-sans">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-sm font-sans leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
