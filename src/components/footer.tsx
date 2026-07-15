'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-kitchen-cream/10 py-8 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-muted-foreground font-sans">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-kitchen-charcoal">{t.nav.brand}</span>
          <span className="text-center md:text-left">{t.footer.text}</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-kitchen-clay transition-colors">
              {t.footer.privacy}
            </Link>
            <span className="text-border" aria-hidden="true">|</span>
            <Link href="/terms" className="hover:text-kitchen-clay transition-colors">
              {t.footer.terms}
            </Link>
          </div>
          <span className="text-center">{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
