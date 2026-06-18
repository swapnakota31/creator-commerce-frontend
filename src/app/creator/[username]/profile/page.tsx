 'use client';

import { use, useState } from 'react';
import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import CreatorProfileEditor from '@/components/creator/CreatorProfileEditor';
import CreatorProfileStats from '@/components/creator/CreatorProfileStats';
import CreatorFeaturedCollections from '@/components/creator/CreatorFeaturedCollections';
import CreatorSocialLinks, { initialSocialLinks } from '@/components/creator/CreatorSocialLinks';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type CreatorProfilePageProps = {
  params: Promise<{ username: string }>;
};

export default function CreatorProfilePage({ params }: CreatorProfilePageProps) {
  const { username } = use(params);
  const [socialLinks, setSocialLinks] = useState(initialSocialLinks);

  const handleLinkChange = (key: typeof initialSocialLinks[number]['key'], value: string) => {
    setSocialLinks((current) => current.map((link) => (link.key === key ? { ...link, value } : link)));
  };

  const handleLinkClear = (key: typeof initialSocialLinks[number]['key']) => {
    handleLinkChange(key, '');
  };

  const activeLinks = socialLinks.filter((link) => link.value.trim().length > 0);
  const publicViewSlots = Array.from({ length: 6 }, (_, index) => activeLinks[index] ?? null);

  return (
    <CreatorRouteShell username={username} sectionTitle="Profile">
      <CreatorProfileEditor username={username} />
      <CreatorProfileStats />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-12">
        <div className="xl:col-span-2 space-y-8">
          <CreatorFeaturedCollections />

          <CreatorSocialLinks
            links={socialLinks}
            onLinkChange={handleLinkChange}
            onLinkClear={handleLinkClear}
          />
        </div>

        <div className="space-y-8 xl:sticky xl:top-8 h-fit">
          <div className="bg-[color:var(--color-card)] p-8 rounded-[24px] border border-[color:var(--color-border)] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Public View</h3>
                <p className="text-sm text-muted mt-1">This is what visitors see first.</p>
              </div>
              <ExternalLink size={18} className="text-primary" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {publicViewSlots.map((link, index) => {
                if (link) {
                  return (
                    <motion.a
                      key={link.key}
                      href={link.value}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      className={cn(
                        'group flex aspect-square items-center justify-center rounded-[20px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] transition-all duration-300 hover:shadow-sm',
                        'bg-gradient-to-br from-background to-muted/20'
                      )}
                      aria-label={`Open ${link.name}`}
                    >
                      <div className={cn('flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-sm transition-transform group-hover:scale-105', link.tone)}>
                        <link.icon size={20} />
                      </div>
                    </motion.a>
                  );
                }

                return (
                  <div
                    key={`empty-slot-${index}`}
                    className={cn(
                      'flex aspect-square items-center justify-center rounded-[20px] border border-dashed border-[color:var(--color-border)] bg-background/60 transition-all duration-300',
                      'bg-gradient-to-br from-background to-muted/10'
                    )}
                    aria-hidden="true"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-[color:var(--color-border)] bg-background text-[11px] font-semibold text-muted">
                      +
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </CreatorRouteShell>
  );
}
