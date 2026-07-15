'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { LanguageToggle } from '@/components/language-toggle';

export const Navbar = () => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: t.nav.planner, href: '/planner' },
    { name: language === 'en' ? 'Weekly Planner' : 'வார உணவுத் திட்டம்', href: '/planner/weekly' },
    { name: t.nav.history, href: '/history' },
    { name: t.nav.preferences, href: '/preferences' },
    { name: language === 'en' ? 'Inventory' : 'இருப்பு', href: '/inventory' },
    { name: language === 'en' ? 'AI Assistant' : 'AI உதவியாளர்', href: '/assistant' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border font-sans">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-5 h-5 text-kitchen-clay transition-transform group-hover:rotate-12" />
          <span className="font-bold text-lg text-kitchen-charcoal tracking-tight">
            {t.nav.brand}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-kitchen-clay ${
                isActive(item.href)
                  ? 'text-kitchen-clay font-semibold border-b-2 border-kitchen-clay pb-1'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <span className="w-px h-4 bg-border" aria-hidden="true" />
          <LanguageToggle />
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button
            onClick={toggleMenu}
            className="p-1 text-muted-foreground hover:text-kitchen-charcoal focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-kitchen-clay ${
                  isActive(item.href) ? 'text-kitchen-clay font-semibold' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
