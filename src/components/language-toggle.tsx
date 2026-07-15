'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="border-kitchen-clay/35 text-kitchen-clay hover:bg-kitchen-clay/5 hover:text-kitchen-clay font-medium transition-colors"
      aria-label={language === 'en' ? 'Switch to Tamil language' : 'ஆங்கில மொழிக்கு மாற்றவும்'}
    >
      {language === 'en' ? 'தமிழ்' : 'English'}
    </Button>
  );
};
