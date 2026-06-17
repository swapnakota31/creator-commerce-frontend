'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Camera,
  Check,
  Edit3,
  Globe,
  Link as LinkIcon,
  MapPin,
  PenLine,
  Plus,
  Save,
  Share2,
  Sparkles,
  Upload,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type CreatorProfileEditorProps = {
  username?: string;
};

type EditorState = {
  name: string;
  username: string;
  bio: string;
  location: string;
  website: string;
  bannerStyle: string;
};

const bannerStyles = ['Aurora Glow', 'Midnight Prism', 'Soft Gradient', 'Editorial Light'] as const;

const bannerStyleDetails = {
  'Aurora Glow': {
    accent: 'from-fuchsia-400 via-violet-500 to-indigo-500',
    description: 'Bright, editorial and high-energy with soft luxury cues.',
  },
  'Midnight Prism': {
    accent: 'from-slate-900 via-violet-900 to-fuchsia-700',
    description: 'Darker, premium and sharp with a nightlife-inspired edge.',
  },
  'Soft Gradient': {
    accent: 'from-rose-200 via-fuchsia-200 to-indigo-200',
    description: 'Gentle, airy and polished for a lifestyle creator feel.',
  },
  'Editorial Light': {
    accent: 'from-neutral-200 via-zinc-100 to-slate-200',
    description: 'Minimal, magazine-like and calm with clean contrast.',
  },
} as const;

function toSlug(value: string) {
  return (value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'creator';
}

export default function CreatorProfileEditor({ username }: CreatorProfileEditorProps) {
  const router = useRouter();
  const initialUsername = username ?? 'alexrivera_official';
  const bannerUploadRef = useRef<HTMLInputElement | null>(null);
  const brandKitUploadRef = useRef<HTMLInputElement | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [bannerImageUrl, setBannerImageUrl] = useState<string | null>(null);
  const [brandKitName, setBrandKitName] = useState<string | null>(null);
  const [form, setForm] = useState<EditorState>({
    name: 'Alex Rivera',
    username: initialUsername,
    bio: 'Digital creator & product designer shaping the future of creator commerce. Sharing curated products, brand-safe recommendations, and polished storefront experiences.',
    location: 'Los Angeles, CA',
    website: 'alexrivera.design',
    bannerStyle: 'Aurora Glow',
  });

  const profileUrl = useMemo(() => `/creator/${initialUsername}/profile`, [initialUsername]);
  const previewSlug = useMemo(() => toSlug(form.username), [form.username]);
  const selectedBanner = bannerStyleDetails[form.bannerStyle as keyof typeof bannerStyleDetails];

  useEffect(() => {
    return () => {
      if (bannerImageUrl) {
        URL.revokeObjectURL(bannerImageUrl);
      }
    };
  }, [bannerImageUrl]);

  const handleShare = async () => {
    const shareData = {
      title: `${form.name} | Creator Profile`,
      text: 'Premium creator profile',
      url: typeof window !== 'undefined' ? window.location.href : profileUrl,
    };

    try {
      setIsSharing(true);
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
      }
    } catch {
      // Ignore cancellations.
    } finally {
      setIsSharing(false);
    }
  };

  const handleSave = () => {
    setSaved(true);
    if (previewSlug && previewSlug !== initialUsername) {
      router.push(`/creator/${previewSlug}/profile`);
    }

    window.setTimeout(() => {
      setSaved(false);
      setIsEditorOpen(false);
    }, 800);
  };

  const handleBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const nextUrl = URL.createObjectURL(file);
    setBannerImageUrl((current) => {
      if (current) {
        URL.revokeObjectURL(current);
      }
      return nextUrl;
    });
    setSaved(false);
  };

  const handleBrandKitUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setBrandKitName(file.name);
    setSaved(false);
  };

  return (
    <>
      <div className="relative mb-8 w-full overflow-hidden rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-sm">
        <div
          className={cn(
            'relative h-48 w-full overflow-hidden md:h-64',
            bannerImageUrl
              ? 'bg-black'
              : 'bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20'
          )}
        >
          {bannerImageUrl ? (
            <div
              role="img"
              aria-label="Banner preview"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerImageUrl})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay dark:opacity-50" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <button
            type="button"
            onClick={() => setIsEditorOpen(true)}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-transform hover:scale-[1.02]"
          >
            <Camera size={16} />
            Edit banner
          </button>

          {saved ? (
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xl">
              <Check size={14} /> Changes saved
            </div>
          ) : null}
        </div>

        <div className="px-6 pb-10 md:px-10">
          <div className="relative z-10 -mt-16 flex flex-col gap-6 md:-mt-20 md:flex-row md:items-end">
            <div className="group relative">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[color:var(--color-card)] bg-[color:var(--color-card)] p-1.5 shadow-xl md:h-40 md:w-40">
                <Image
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop"
                  alt="Creator"
                  width={160}
                  height={160}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4 border-[color:var(--color-card)] bg-green-500 shadow-lg" />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground">{form.name}</h1>
                  <p className="font-medium text-muted">@{form.username}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] px-4 py-2.5 font-medium transition hover:bg-muted/50"
                  >
                    {isSharing ? <Sparkles size={18} className="animate-pulse" /> : <Share2 size={18} />}
                    <span>{isSharing ? 'Sharing...' : 'Share'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditorOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-6 py-2.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02]"
                  >
                    <Edit3 size={18} />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">{form.bio}</p>

            <div className="flex flex-wrap gap-4 text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                <span className="text-sm font-medium">{form.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LinkIcon size={16} />
                <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  {form.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isEditorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm md:items-center md:p-6"
            onClick={() => setIsEditorOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-2xl"
            >
              <div className="border-b border-[color:var(--color-border)] px-6 py-5 md:px-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">Edit profile</p>
                    <h3 className="mt-2 text-xl font-bold">Update your public profile</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {saved ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                        <Check size={14} /> Saved
                      </span>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setIsEditorOpen(false)}
                      className="rounded-full border border-[color:var(--color-border)] bg-background p-2 text-foreground transition hover:bg-muted/50 cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8">
                <div className="space-y-6">
                  <label className="block">
                    <span className="text-sm font-semibold text-foreground">Display name</span>
                    <input
                      value={form.name}
                      onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </label>

                  <label className="block">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-foreground">Username</span>
                      <span className="text-xs font-medium text-muted">This updates the profile URL</span>
                    </div>
                    <div className="mt-2 flex rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                      <span className="text-sm text-muted">@</span>
                      <input
                        value={form.username}
                        onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
                        className="w-full bg-transparent pl-1 text-sm outline-none"
                      />
                    </div>
                    <p className="mt-2 text-xs text-muted">Preview: /creator/{previewSlug}/profile</p>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-foreground">Bio</span>
                    <textarea
                      value={form.bio}
                      onChange={(event) => setForm((current) => ({ ...current, bio: event.target.value }))}
                      rows={4}
                      className="mt-2 w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </label>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-foreground">Location</span>
                      <input
                        value={form.location}
                        onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-foreground">Website</span>
                      <input
                        value={form.website}
                        onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => bannerUploadRef.current?.click()}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[color:var(--color-border)] px-4 py-3 text-sm font-semibold transition hover:bg-muted/40 cursor-pointer"
                    >
                      <Upload size={16} /> Upload banner
                    </button>
                    <button
                      type="button"
                      onClick={() => brandKitUploadRef.current?.click()}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[color:var(--color-border)] px-4 py-3 text-sm font-semibold transition hover:bg-muted/40 cursor-pointer"
                    >
                      <PenLine size={16} /> Upload brand kit
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.01] cursor-pointer"
                    >
                      <Save size={16} /> Save changes
                    </button>
                  </div>

                  <input ref={bannerUploadRef} type="file" accept="image/*" className="hidden" onChange={handleBannerUpload} />
                  <input ref={brandKitUploadRef} type="file" accept="image/*,.pdf,.zip" className="hidden" onChange={handleBrandKitUpload} />

                  <div className="rounded-[22px] border border-dashed border-[color:var(--color-border)] bg-muted/20 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white dark:bg-zinc-800 p-2 shadow-sm">
                        <Plus size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Quick actions</p>
                        <p className="text-xs text-muted">Keep the edit flow fast and creator-first.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
