'use client';

import React from 'react';
import { InventorySummaryData } from '@/lib/inventory-manager';
import { useLanguage } from '@/context/language-context';
import { BarChart3, AlertTriangle, ShieldAlert, Sparkles } from 'lucide-react';

interface InventorySummaryProps {
  summary: InventorySummaryData;
}

export const InventorySummary = ({ summary }: InventorySummaryProps) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
      {/* Total Items */}
      <div className="p-4 border border-border bg-white rounded-lg shadow-xs space-y-2 flex flex-col justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <BarChart3 className="w-4 h-4 shrink-0 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
            {t.inventory.totalLabel}
          </span>
        </div>
        <span className="text-2xl font-extrabold text-kitchen-charcoal mt-1 block">
          {summary.total}
        </span>
      </div>

      {/* Low Stock */}
      <div className={`p-4 border rounded-lg shadow-xs space-y-2 flex flex-col justify-between transition-colors ${
        summary.lowStock > 0 
          ? 'bg-kitchen-turmeric/5 border-kitchen-turmeric/20 text-kitchen-turmeric' 
          : 'bg-white border-border text-muted-foreground'
      }`}>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
            {t.inventory.lowStockLabel}
          </span>
        </div>
        <span className={`text-2xl font-extrabold mt-1 block ${
          summary.lowStock > 0 ? 'text-kitchen-turmeric' : 'text-kitchen-charcoal'
        }`}>
          {summary.lowStock}
        </span>
      </div>

      {/* Expiring Soon */}
      <div className={`p-4 border rounded-lg shadow-xs space-y-2 flex flex-col justify-between transition-colors ${
        summary.expiringSoon > 0 
          ? 'bg-red-50/50 border-red-200 text-red-650' 
          : 'bg-white border-border text-muted-foreground'
      }`}>
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
            {t.inventory.expiringLabel}
          </span>
        </div>
        <span className={`text-2xl font-extrabold mt-1 block ${
          summary.expiringSoon > 0 ? 'text-red-650' : 'text-kitchen-charcoal'
        }`}>
          {summary.expiringSoon}
        </span>
      </div>

      {/* Recently Updated */}
      <div className="p-4 border border-border bg-white rounded-lg shadow-xs space-y-2 flex flex-col justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none">
            {t.inventory.recentLabel}
          </span>
        </div>
        <span className="text-2xl font-extrabold text-kitchen-charcoal mt-1 block">
          {summary.recentlyUpdated}
        </span>
      </div>
    </div>
  );
};
