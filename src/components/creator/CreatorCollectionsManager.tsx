'use client';

import React, { useMemo, useState } from 'react';
import {
  Archive,
  Check,
  FolderOpen,
  PencilLine,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CreatorRightDrawer from '@/components/creator/CreatorRightDrawer';

type CreatorCollectionsManagerProps = {
  username: string;
};

type CollectionStatus = 'Live' | 'Draft' | 'Archived';

type Collection = {
  id: string;
  title: string;
  description: string;
  status: CollectionStatus;
  products: number;
  revenue: string;
  conversion: string;
  featured: boolean;
  image: string;
};

type CollectionFormState = {
  title: string;
  description: string;
  status: CollectionStatus;
  featured: boolean;
};

type DrawerState = { type: null } | { type: 'add' } | { type: 'edit'; id: string } | { type: 'delete'; id: string };

const initialCollections: Collection[] = [
  {
    id: 'summer-essentials',
    title: 'Summer Essentials',
    description: 'Seasonal favorites, presets, and bundles for warm-weather creator campaigns.',
    status: 'Live',
    products: 24,
    revenue: '$8,420',
    conversion: '7.8%',
    featured: true,
    image: 'https://images.unsplash.com/photo-1523381235212-d7b2d5299448?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'workspace-setup',
    title: 'Workspace Setup',
    description: 'Desk gear, templates, and accessories for a clean creator workflow.',
    status: 'Draft',
    products: 18,
    revenue: '$3,180',
    conversion: '4.9%',
    featured: false,
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'content-kit',
    title: 'Content Kit',
    description: 'Launch scripts, captions, hooks, and planning systems for social growth.',
    status: 'Live',
    products: 32,
    revenue: '$6,780',
    conversion: '6.4%',
    featured: true,
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'launch-week',
    title: 'Launch Week',
    description: 'Archived campaign assets and checklists from past product drops.',
    status: 'Archived',
    products: 9,
    revenue: '$1,120',
    conversion: '2.1%',
    featured: false,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
  },
];

const emptyForm = (): CollectionFormState => ({
  title: '',
  description: '',
  status: 'Draft',
  featured: false,
});

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'new-collection';
}

function statusTone(status: CollectionStatus) {
  switch (status) {
    case 'Live':
      return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300';
    case 'Archived':
      return 'bg-slate-500/15 text-slate-700 dark:text-slate-300';
    default:
      return 'bg-amber-500/15 text-amber-700 dark:text-amber-300';
  }
}

export default function CreatorCollectionsManager({ username }: CreatorCollectionsManagerProps) {
  const [collections, setCollections] = useState<Collection[]>(initialCollections);
  const [drawer, setDrawer] = useState<DrawerState>({ type: null });
  const [form, setForm] = useState<CollectionFormState>(emptyForm);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | CollectionStatus>('All');

  const activeCollection = useMemo(
    () => ('id' in drawer ? collections.find((collection) => collection.id === drawer.id) : undefined),
    [collections, drawer]
  );

  const stats = useMemo(() => {
    const live = collections.filter((collection) => collection.status === 'Live').length;
    const featured = collections.filter((collection) => collection.featured).length;
    const products = collections.reduce((total, collection) => total + collection.products, 0);
    return { live, featured, products };
  }, [collections]);

  const filteredCollections = useMemo(() => {
    return collections.filter((collection) => {
      const matchesQuery =
        query.trim().length === 0 ||
        [collection.title, collection.description, collection.status].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'All' || collection.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [collections, query, statusFilter]);

  const closeDrawer = () => setDrawer({ type: null });

  const openAddDrawer = () => {
    setForm(emptyForm());
    setDrawer({ type: 'add' });
  };

  const openEditDrawer = (collection: Collection) => {
    setForm({
      title: collection.title,
      description: collection.description,
      status: collection.status,
      featured: collection.featured,
    });
    setDrawer({ type: 'edit', id: collection.id });
  };

  const saveCollection = () => {
    if (drawer.type === 'add') {
      const title = form.title.trim() || 'Untitled collection';
      setCollections((current) => [
        {
          id: `${slugify(title)}-${Date.now()}`,
          title,
          description: form.description.trim() || 'Add a short collection description.',
          status: form.status,
          products: 0,
          revenue: '$0',
          conversion: '0%',
          featured: form.featured,
          image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1600&auto=format&fit=crop',
        },
        ...current,
      ]);
    }

    if (drawer.type === 'edit') {
      setCollections((current) =>
        current.map((collection) =>
          collection.id === drawer.id
            ? {
                ...collection,
                title: form.title.trim() || collection.title,
                description: form.description.trim() || collection.description,
                status: form.status,
                featured: form.featured,
              }
            : collection
        )
      );
    }

    closeDrawer();
  };

  const deleteCollection = () => {
    if (drawer.type !== 'delete') {
      return;
    }

    setCollections((current) => current.filter((collection) => collection.id !== drawer.id));
    closeDrawer();
  };

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-4 rounded-[18px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-4 shadow-sm md:flex-row md:items-center md:justify-between md:p-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">@{username}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Collections</h1>
          <p className="mt-1 max-w-2xl text-sm text-muted">Organize products into storefront-ready collections.</p>
        </div>
        <button
          type="button"
          onClick={openAddDrawer}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          <Plus size={17} />
          New collection
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {[
          { label: 'Live collections', value: stats.live, icon: FolderOpen },
          { label: 'Products grouped', value: stats.products, icon: Archive },
          { label: 'Featured rails', value: stats.featured, icon: Sparkles },
        ].map((stat) => (
          <div key={stat.label} className="rounded-[18px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted">{stat.label}</p>
              <stat.icon size={18} className="text-primary" />
            </div>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[18px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search collections"
              className="w-full rounded-xl border border-[color:var(--color-border)] bg-background py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['All', 'Live', 'Draft', 'Archived'] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setStatusFilter(status)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition',
                  statusFilter === status
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-[color:var(--color-border)] bg-background text-muted hover:text-foreground'
                )}
              >
                {status}
                {statusFilter === status ? <Check size={15} /> : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredCollections.map((collection) => (
            <article key={collection.id} className="overflow-hidden rounded-[18px] border border-[color:var(--color-border)] bg-background">
              <div
                className="flex min-h-44 flex-col justify-between bg-cover bg-center p-4 text-white"
                style={{ backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.64), rgba(0,0,0,0.12)), url(${collection.image})` }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', statusTone(collection.status))}>{collection.status}</span>
                  {collection.featured ? <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">Featured</span> : null}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">{collection.products} products</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">{collection.title}</h2>
                </div>
              </div>

              <div className="p-4">
                <p className="min-h-10 text-sm leading-relaxed text-muted">{collection.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-muted/35 p-3">
                    <p className="text-xs text-muted">Revenue</p>
                    <p className="mt-1 font-semibold text-foreground">{collection.revenue}</p>
                  </div>
                  <div className="rounded-xl bg-muted/35 p-3">
                    <p className="text-xs text-muted">Conversion</p>
                    <p className="mt-1 font-semibold text-foreground">{collection.conversion}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openEditDrawer(collection)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[color:var(--color-border)] px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50"
                  >
                    <PencilLine size={16} />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setDrawer({ type: 'delete', id: collection.id })}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/25 text-red-500 transition hover:bg-red-500/10"
                    aria-label={`Delete ${collection.title}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CreatorRightDrawer
        open={drawer.type === 'add' || drawer.type === 'edit'}
        title={drawer.type === 'edit' ? 'Edit collection' : 'New collection'}
        subtitle="Keep collection copy concise so it scans cleanly in the storefront."
        onClose={closeDrawer}
        footer={
          <button
            type="button"
            onClick={saveCollection}
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Save collection
          </button>
        }
      >
        <div className="space-y-4">
          <label className="block text-sm font-medium text-foreground">
            <span>Title</span>
            <input
              value={form.title}
              onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
              className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            <span>Description</span>
            <textarea
              value={form.description}
              onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-[color:var(--color-border)] bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            <span>Status</span>
            <select
              value={form.status}
              onChange={(event) => setForm((current) => ({ ...current, status: event.target.value as CollectionStatus }))}
              className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
            >
              <option>Live</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
          </label>
          <label className="flex items-center justify-between gap-3 rounded-xl border border-[color:var(--color-border)] bg-background p-3 text-sm font-medium text-foreground">
            <span>Feature on profile</span>
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(event) => setForm((current) => ({ ...current, featured: event.target.checked }))}
              className="h-4 w-4 accent-primary"
            />
          </label>
        </div>
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'delete'}
        title="Delete collection"
        subtitle={activeCollection ? `Remove ${activeCollection.title} from this storefront.` : undefined}
        onClose={closeDrawer}
        footer={
          <button
            type="button"
            onClick={deleteCollection}
            className="w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Delete collection
          </button>
        }
      >
        <p className="text-sm leading-relaxed text-muted">
          Products are not deleted, but this collection card and its profile placement will be removed from @{username}.
        </p>
      </CreatorRightDrawer>
    </section>
  );
}
