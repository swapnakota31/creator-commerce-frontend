'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ExternalLink,
  Globe,
  Link as LinkIcon,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';

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
  const [expandedKey, setExpandedKey] = useState<SocialPlatformKey | null>('instagram');

  const activeLinks = useMemo(() => links.filter((link) => link.value.trim().length > 0), [links]);

  return (
    <div className="h-full rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-8 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">Social Ecosystem</p>
          <h3 className="mt-2 text-xl font-bold text-foreground">Systematic link manager</h3>
        </div>
        <ExternalLink size={18} className="mt-1 text-muted" />
      </div>

      <div className="space-y-0 overflow-hidden rounded-[22px] border border-[color:var(--color-border)] bg-background">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Manage links</p>
              <p className="text-xs text-muted">Leave a field empty to hide that icon from your public profile.</p>
            </div>
            <div className="rounded-full bg-muted/40 px-3 py-1 text-xs font-semibold text-muted">
              {activeLinks.length} live
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 overflow-hidden rounded-[20px] border border-[color:var(--color-border)]">
            {links.map((link) => {
              const isExpanded = expandedKey === link.key;

              return (
                <div
                  key={link.key}
                  className={cn(
                    'relative flex aspect-square flex-col border-r border-b border-[color:var(--color-border)] bg-[color:var(--color-card)] p-3 transition hover:shadow-sm',
                    'bg-gradient-to-br from-background to-muted/10'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedKey((current) => (current === link.key ? null : link.key))}
                    className="flex flex-1 flex-col items-center justify-center gap-3 rounded-[18px] text-center"
                  >
                    <div className={cn('flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-sm transition-transform', link.tone, isExpanded && 'scale-105')}>
                      <link.icon size={20} />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{link.name}</p>
                      <p className="text-[11px] font-semibold text-muted">
                        {link.value.trim() ? 'Linked' : 'Click to add'}
                      </p>
                    </div>

                    <ChevronDown size={14} className={cn('text-muted transition-transform', isExpanded && 'rotate-180')} />
                  </button>

                  {isExpanded ? (
                    <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-[color:var(--color-border)] bg-background p-2 shadow-sm">
                      <div className="flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-2 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                        <LinkIcon size={14} className="text-muted" />
                        <input
                          autoFocus
                          value={link.value}
                          onChange={(event) => onLinkChange(link.key, event.target.value)}
                          placeholder={link.placeholder}
                          className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => onLinkClear(link.key)}
                          className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-border)] px-2.5 py-1 text-[11px] font-semibold text-muted transition hover:text-red-500"
                        >
                          <Trash2 size={12} /> Clear
                        </button>
                        <span className="text-[11px] text-muted">Paste URL</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[color:var(--color-border)] bg-muted/20 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Public view</p>
              <p className="text-xs text-muted">Only links with a valid URL are shown to visitors.</p>
            </div>
            <div className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted">
              {activeLinks.length} visible
            </div>
          </div>

          {activeLinks.length > 0 ? (
            <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-[20px] border border-[color:var(--color-border)]">
              {activeLinks.map((platform) => (
                <motion.a
                  key={platform.key}
                  href={platform.value}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className={cn(
                    'group flex aspect-square items-center justify-center border-r border-b border-[color:var(--color-border)] bg-[color:var(--color-card)] p-4 transition-all duration-300 hover:shadow-sm',
                    'bg-gradient-to-br from-background to-muted/20'
                  )}
                >
                  <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl bg-background shadow-sm transition-transform group-hover:scale-105', platform.tone)}>
                    <platform.icon size={18} />
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="rounded-[20px] border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 text-center">
              <p className="text-sm font-semibold text-foreground">No live social links yet</p>
              <p className="mt-1 text-xs text-muted">Paste at least one link above to show icons on the public profile.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
