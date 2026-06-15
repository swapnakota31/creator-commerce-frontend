'use client';

import React, { useMemo } from 'react';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Globe } from 'lucide-react';

type SocialPlatformKey = 'instagram' | 'youtube' | 'x' | 'linkedin' | 'whatsapp' | 'website';

export type SocialLink = {
  key: SocialPlatformKey;
  name: string;
  placeholder: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tone: string;
};

export const initialSocialLinks: SocialLink[] = [
  { key: 'instagram', name: 'Instagram', placeholder: 'https://instagram.com/yourname', value: '', icon: FaInstagram, tone: 'text-[#E4405F]' },
  { key: 'youtube', name: 'YouTube', placeholder: 'https://youtube.com/@yourname', value: '', icon: FaYoutube, tone: 'text-[#FF0000]' },
  { key: 'x', name: 'X', placeholder: 'https://x.com/yourname', value: '', icon: FaXTwitter, tone: 'text-black dark:text-white' },
  { key: 'linkedin', name: 'LinkedIn', placeholder: 'https://linkedin.com/in/yourname', value: '', icon: FaLinkedinIn, tone: 'text-[#0A66C2]' },
  { key: 'whatsapp', name: 'WhatsApp', placeholder: 'https://wa.me/123456789', value: '', icon: FaWhatsapp, tone: 'text-[#25D366]' },
  { key: 'website', name: 'Website', placeholder: 'https://yourwebsite.com', value: '', icon: Globe, tone: 'text-primary' },
];

type CreatorSocialLinksProps = {
  links: SocialLink[];
  onLinkChange: (key: SocialPlatformKey, value: string) => void;
  onLinkClear: (key: SocialPlatformKey) => void;
};

export default function CreatorSocialLinks({ links, onLinkChange, onLinkClear }: CreatorSocialLinksProps) {
  const activeCount = useMemo(() => links.filter((link) => link.value.trim().length > 0).length, [links]);

  return (
    <div className="rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">Social Channels</p>
          <h3 className="mt-1.5 text-xl font-bold text-foreground">Link Manager</h3>
        </div>
        <div className="rounded-full bg-[color:var(--color-background)] border border-[color:var(--color-border)] px-3 py-1 text-xs font-semibold text-muted">
          {activeCount} / {links.length} Active
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {links.map((link) => (
          <div
            key={link.key}
            className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/40 p-3 focus-within:border-primary/50 focus-within:bg-[color:var(--color-background)]/80 focus-within:ring-4 focus-within:ring-primary/5 transition-all"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] shadow-sm">
              <link.icon className={cn('h-5 w-5', link.tone)} />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-muted uppercase tracking-wider">{link.name}</p>
              <input
                value={link.value}
                onChange={(event) => onLinkChange(link.key, event.target.value)}
                placeholder={link.placeholder}
                className="w-full bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted/50 mt-0.5"
              />
            </div>

            {link.value.trim() && (
              <button
                type="button"
                onClick={() => onLinkClear(link.key)}
                className="p-1.5 text-muted hover:text-red-500 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                aria-label={`Clear ${link.name} link`}
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
