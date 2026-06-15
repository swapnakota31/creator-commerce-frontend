'use client';

import React from 'react';
import { 
  User, 
  Image as ImageIcon, 
  Share2, 
  Monitor, 
  ChevronRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

const settings = [
  { label: 'Edit Profile Info', icon: User, color: 'text-blue-500 bg-blue-500/10' },
  { label: 'Change Banner Image', icon: ImageIcon, color: 'text-purple-500 bg-purple-500/10' },
  { label: 'Social Graph Setup', icon: Share2, color: 'text-orange-500 bg-orange-500/10' },
  { label: 'Appearance & Theme', icon: Monitor, color: 'text-emerald-500 bg-emerald-500/10' },
  { label: 'Account Security', icon: ShieldCheck, color: 'text-indigo-500 bg-indigo-500/10' },
  { label: 'Billing & Payouts', icon: CreditCard, color: 'text-rose-500 bg-rose-500/10' },
];

export default function CreatorSettingsQuickAccess() {
  return (
    <div className="bg-[color:var(--color-card)] p-8 rounded-[24px] border border-[color:var(--color-border)] shadow-sm h-full">
      <h3 className="text-xl font-bold text-foreground mb-6">Quick Settings</h3>
      
      <div className="space-y-2">
        {settings.map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center justify-between p-4 rounded-[20px] hover:bg-muted/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-2.5 rounded-xl transition-transform group-hover:scale-110 shadow-sm", item.color)}>
                <item.icon size={20} />
              </div>
              <span className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">{item.label}</span>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[color:var(--color-border)] transition-all">
              <ChevronRight size={16} className="text-muted" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-[20px] bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] shadow-lg shadow-purple-500/20 relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Growth Plan</p>
        <p className="text-white font-bold text-lg mb-4 leading-tight">Professional Creator</p>
        <button className="w-full py-2.5 bg-white text-primary text-sm font-bold rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95">
          Manager Subscription
        </button>
      </div>
    </div>
  );
}
