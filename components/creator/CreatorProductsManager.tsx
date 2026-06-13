'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  Archive,
  ArrowUpRight,
  Check,
  ChevronDown,
  Filter,
  LayoutGrid,
  List,
  MoveRight,
  Package,
  PencilLine,
  Plus,
  Search,
  Sparkles,
  Tag,
  Trash2,
  Upload,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CreatorRightDrawer from '@/components/creator/CreatorRightDrawer';

type CreatorProductsManagerProps = {
  username: string;
};

type ProductStatus = 'Live' | 'Draft' | 'Archived';

type Product = {
  id: string;
  name: string;
  description: string;
  status: ProductStatus;
  price: string;
  revenue: string;
  orders: number;
  collection: string;
  featured: boolean;
  inventory: string;
  image: string;
};

type ProductFormState = {
  name: string;
  description: string;
  status: ProductStatus;
  price: string;
  collection: string;
  featured: boolean;
  inventory: string;
};

type DrawerState =
  | { type: null }
  | { type: 'add' }
  | { type: 'edit'; id: string }
  | { type: 'import' }
  | { type: 'search' }
  | { type: 'filter' }
  | { type: 'preview'; id: string }
  | { type: 'delete'; id: string }
  | { type: 'move'; id: string }
  | { type: 'bulk' };

const initialProducts: Product[] = [
  {
    id: 'neon-vibes-preset-pack',
    name: 'Neon Vibes Preset Pack',
    description: 'A bright pack of color-graded presets built for high-energy creator content.',
    status: 'Live',
    price: '$38',
    revenue: '$4,200',
    orders: 114,
    collection: 'Summer Essentials',
    featured: true,
    inventory: 'Digital delivery',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'creator-desk-kit',
    name: 'Creator Desk Kit',
    description: 'Minimal desk accessories and workflow tools for a polished setup.',
    status: 'Draft',
    price: '$120',
    revenue: '$0',
    orders: 0,
    collection: 'Workspace Setup',
    featured: false,
    inventory: '24 in stock',
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'social-growth-templates',
    name: 'Social Growth Templates',
    description: 'Plug-and-play content systems for hooks, captions, and launch planning.',
    status: 'Live',
    price: '$52',
    revenue: '$2,860',
    orders: 76,
    collection: 'Content Kit',
    featured: false,
    inventory: 'Digital delivery',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'launch-checklist-bundle',
    name: 'Launch Checklist Bundle',
    description: 'A conversion-ready bundle for launches, release planning, and launch day ops.',
    status: 'Archived',
    price: '$22',
    revenue: '$1,120',
    orders: 42,
    collection: 'Launch Week',
    featured: false,
    inventory: 'Archived',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
  },
];

const defaultProductForm = (): ProductFormState => ({
  name: '',
  description: '',
  status: 'Draft',
  price: '',
  collection: 'Summer Essentials',
  featured: false,
  inventory: 'Digital delivery',
});

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'new-product';
}

function productStatusTone(status: ProductStatus) {
  switch (status) {
    case 'Live':
      return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300';
    case 'Archived':
      return 'bg-slate-500/15 text-slate-700 dark:text-slate-300';
    default:
      return 'bg-amber-500/15 text-amber-700 dark:text-amber-300';
  }
}

export default function CreatorProductsManager({ username }: CreatorProductsManagerProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [drawer, setDrawer] = useState<DrawerState>({ type: null });
  const [productForm, setProductForm] = useState<ProductFormState>(defaultProductForm);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | ProductStatus>('All');
  const [collectionFilter, setCollectionFilter] = useState<'All' | string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'revenue' | 'name'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [bulkAction, setBulkAction] = useState<'Archive' | 'Move' | 'Feature'>('Move');
  const [moveTarget, setMoveTarget] = useState('Summer Essentials');

  const collections = ['Summer Essentials', 'Workspace Setup', 'Content Kit', 'Launch Week'];

  const stats = useMemo(() => {
    const live = products.filter((product) => product.status === 'Live').length;
    const draft = products.filter((product) => product.status === 'Draft').length;
    const featured = products.filter((product) => product.featured).length;
    return { live, draft, featured };
  }, [products]);

  const filteredProducts = useMemo(() => {
    const items = products.filter((product) => {
      const matchesQuery =
        query.trim().length === 0 ||
        [product.name, product.description, product.collection, product.price, product.inventory].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'All' || product.status === statusFilter;
      const matchesCollection = collectionFilter === 'All' || product.collection === collectionFilter;
      return matchesQuery && matchesStatus && matchesCollection;
    });

    return [...items].sort((left, right) => {
      if (sortBy === 'name') {
        return left.name.localeCompare(right.name);
      }

      if (sortBy === 'revenue') {
        const leftRevenue = Number.parseFloat(left.revenue.replace(/[^0-9.]/g, '') || '0');
        const rightRevenue = Number.parseFloat(right.revenue.replace(/[^0-9.]/g, '') || '0');
        return rightRevenue - leftRevenue;
      }

      return Number(right.featured) - Number(left.featured);
    });
  }, [collectionFilter, products, query, sortBy, statusFilter]);

  const activeProduct = useMemo(
    () => ('id' in drawer ? products.find((product) => product.id === drawer.id) : undefined),
    [drawer, products]
  );

  const closeDrawer = () => {
    setDrawer({ type: null });
    setSelectedProducts([]);
  };

  const openAddDrawer = () => {
    setProductForm(defaultProductForm());
    setDrawer({ type: 'add' });
  };

  const openEditDrawer = (product: Product) => {
    setProductForm({
      name: product.name,
      description: product.description,
      status: product.status,
      price: product.price,
      collection: product.collection,
      featured: product.featured,
      inventory: product.inventory,
    });
    setDrawer({ type: 'edit', id: product.id });
  };

  const saveProduct = () => {
    if (drawer.type === 'add') {
      const nextId = slugify(productForm.name);
      setProducts((current) => [
        {
          id: nextId,
          name: productForm.name || 'Untitled Product',
          description: productForm.description || 'Add a product description to help shoppers understand what is included.',
          status: productForm.status,
          price: productForm.price || '$0',
          revenue: '$0',
          orders: 0,
          collection: productForm.collection,
          featured: productForm.featured,
          inventory: productForm.inventory,
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop',
        },
        ...current,
      ]);
    }

    if (drawer.type === 'edit' && drawer.id) {
      setProducts((current) =>
        current.map((product) =>
          product.id === drawer.id
            ? {
                ...product,
                name: productForm.name || product.name,
                description: productForm.description || product.description,
                status: productForm.status,
                price: productForm.price || product.price,
                collection: productForm.collection,
                featured: productForm.featured,
                inventory: productForm.inventory,
              }
            : product
        )
      );
    }

    closeDrawer();
  };

  const deleteProduct = () => {
    if (drawer.type !== 'delete' || !drawer.id) {
      return;
    }

    setProducts((current) => current.filter((product) => product.id !== drawer.id));
    closeDrawer();
  };

  const saveBulkAction = () => {
    if (bulkAction === 'Archive') {
      setProducts((current) => current.map((product) => (selectedProducts.includes(product.id) ? { ...product, status: 'Archived' as ProductStatus } : product)));
    }

    if (bulkAction === 'Feature') {
      setProducts((current) => current.map((product) => (selectedProducts.includes(product.id) ? { ...product, featured: true } : product)));
    }

    if (bulkAction === 'Move') {
      setProducts((current) => current.map((product) => (selectedProducts.includes(product.id) ? { ...product, collection: moveTarget } : product)));
    }

    closeDrawer();
  };

  const activeDrawerTitle = drawer.type === 'edit' ? 'Edit Product' : 'Add Product';

  const toggleSelectedProduct = (id: string) => {
    setSelectedProducts((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return (
    <div className="space-y-8 pb-10">
      <section className="rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-muted/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              <Sparkles size={14} />
              Product operations
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Products</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
                Manage products displayed on your storefront. Add, move, preview, and organize everything from right slide-over panels.
              </p>
              <p className="mt-2 text-xs font-medium text-muted">Managing @{username}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={openAddDrawer} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:translate-y-[-1px]">
              <Plus size={18} />
              Add Product
            </button>
            <button type="button" onClick={() => setDrawer({ type: 'import' })} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/50">
              <Upload size={18} />
              Import Products
            </button>
            <button type="button" onClick={() => setDrawer({ type: 'search' })} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/50">
              <Search size={18} />
              Search Products
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Total Products', value: products.length, hint: 'All catalog items' },
            { label: 'Published Products', value: stats.live, hint: 'Live on storefront' },
            { label: 'Draft Products', value: stats.draft, hint: 'Not public yet' },
            { label: 'Featured Products', value: stats.featured, hint: 'Pinned storefront items' },
          ].map((item) => (
            <div key={item.label} className="rounded-[22px] border border-[color:var(--color-border)] bg-background/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{item.label}</p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-3xl font-semibold tracking-tight text-foreground">{item.value}</p>
                <span className="rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted">{item.hint}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => setViewMode('grid')} className={cn('inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition', viewMode === 'grid' ? 'border-primary bg-primary/10 text-primary' : 'border-[color:var(--color-border)] bg-background text-foreground hover:bg-muted/50')}>
            <LayoutGrid size={16} />
            Grid
          </button>
          <button type="button" onClick={() => setViewMode('table')} className={cn('inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition', viewMode === 'table' ? 'border-primary bg-primary/10 text-primary' : 'border-[color:var(--color-border)] bg-background text-foreground hover:bg-muted/50')}>
            <List size={16} />
            Table
          </button>
          <button type="button" onClick={() => setDrawer({ type: 'filter' })} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/50">
            <Filter size={16} />
            Filter and sort
          </button>
          <button type="button" onClick={() => setDrawer({ type: 'bulk' })} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/50">
            <Archive size={16} />
            Bulk actions
          </button>
          <span className="rounded-full border border-[color:var(--color-border)] px-3 py-2 text-sm text-muted">{filteredProducts.length} shown</span>
        </div>
      </section>

      {filteredProducts.length === 0 ? (
        <section className="rounded-[28px] border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-card)] px-6 py-16 text-center shadow-sm md:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#A100FF]/15 to-[#7B2CFF]/15 text-primary">
            <Package size={28} />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">No products added yet.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
            Start with product ideas like a preset pack, a desk setup bundle, or a launch checklist. You can create, import, and organize everything from drawers.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
            {['Preset Pack', 'Desk Kit', 'Templates Bundle'].map((example) => (
              <button key={example} type="button" onClick={openAddDrawer} className="rounded-full border border-[color:var(--color-border)] bg-background px-4 py-2 font-medium text-foreground transition hover:bg-muted/50">
                {example}
              </button>
            ))}
          </div>
        </section>
      ) : viewMode === 'grid' ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-fuchsia-700">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-overlay transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className={cn('rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl', productStatusTone(product.status))}>{product.status}</span>
                  {product.featured ? <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">Featured</span> : null}
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                  {product.price}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">{product.collection}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</h2>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <p className="text-sm leading-6 text-muted">{product.description}</p>

                <div className="grid grid-cols-2 gap-3 rounded-[22px] border border-[color:var(--color-border)] bg-muted/20 p-4 text-sm">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Revenue</p>
                    <p className="mt-1 font-semibold text-foreground">{product.revenue}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Orders</p>
                    <p className="mt-1 font-semibold text-foreground">{product.orders}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Inventory</p>
                    <p className="mt-1 font-semibold text-foreground">{product.inventory}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Collection</p>
                    <p className="mt-1 font-semibold text-foreground">{product.collection}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => setDrawer({ type: 'preview', id: product.id })} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                    <ArrowUpRight size={16} />
                    Preview
                  </button>
                  <button type="button" onClick={() => openEditDrawer(product)} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                    <PencilLine size={16} />
                    Edit
                  </button>
                  <button type="button" onClick={() => setDrawer({ type: 'move', id: product.id })} className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                    <MoveRight size={16} />
                    Move
                  </button>
                  <button type="button" onClick={() => setDrawer({ type: 'delete', id: product.id })} className="inline-flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/5 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-500/10 dark:text-red-300">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <section className="overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-sm">
          <div className="border-b border-[color:var(--color-border)] px-5 py-4 md:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Catalog table</h2>
                <p className="mt-1 text-sm text-muted">Track product lifecycle, revenue, and storefront placement in one place.</p>
              </div>
              <button type="button" onClick={() => setSelectedProducts(filteredProducts.map((product) => product.id))} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                Select visible
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[color:var(--color-border)] text-left">
              <thead className="bg-muted/20 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                <tr>
                  <th className="px-5 py-4 md:px-6">Name</th>
                  <th className="px-5 py-4 md:px-6">Status</th>
                  <th className="px-5 py-4 md:px-6">Revenue</th>
                  <th className="px-5 py-4 md:px-6">Collection</th>
                  <th className="px-5 py-4 md:px-6">Featured</th>
                  <th className="px-5 py-4 md:px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-border)]">
                {filteredProducts.map((product) => {
                  const selected = selectedProducts.includes(product.id);
                  return (
                    <tr key={product.id} className={cn('transition', selected ? 'bg-primary/5' : 'bg-transparent')}>
                      <td className="px-5 py-4 md:px-6">
                        <div className="flex items-center gap-3">
                          <button type="button" onClick={() => toggleSelectedProduct(product.id)} className={cn('flex h-5 w-5 items-center justify-center rounded border transition', selected ? 'border-primary bg-primary text-white' : 'border-[color:var(--color-border)] bg-background text-transparent')}>
                            <Check size={12} />
                          </button>
                          <div>
                            <p className="font-semibold text-foreground">{product.name}</p>
                            <p className="mt-1 text-sm text-muted">
                              {product.price} · {product.orders} orders
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 md:px-6">
                        <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', productStatusTone(product.status))}>{product.status}</span>
                      </td>
                      <td className="px-5 py-4 md:px-6 text-sm font-semibold text-foreground">{product.revenue}</td>
                      <td className="px-5 py-4 md:px-6 text-sm text-muted">{product.collection}</td>
                      <td className="px-5 py-4 md:px-6 text-sm text-muted">{product.featured ? 'Yes' : 'No'}</td>
                      <td className="px-5 py-4 md:px-6">
                        <div className="flex flex-wrap gap-2">
                          <button type="button" onClick={() => setDrawer({ type: 'preview', id: product.id })} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                            Preview
                          </button>
                          <button type="button" onClick={() => openEditDrawer(product)} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                            Edit
                          </button>
                          <button type="button" onClick={() => setDrawer({ type: 'move', id: product.id })} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/50">
                            Move
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {selectedProducts.length > 0 ? (
        <div className="sticky bottom-4 z-20 rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-5 py-4 shadow-xl shadow-black/5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-medium text-foreground">{selectedProducts.length} products selected</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setDrawer({ type: 'bulk' })} className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white">
                Open bulk drawer
              </button>
              <button type="button" onClick={() => setSelectedProducts([])} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground">
                Clear
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <CreatorRightDrawer
        open={drawer.type === 'add' || drawer.type === 'edit'}
        title={activeDrawerTitle}
        subtitle="Create a new storefront product or update an existing one from a right-side workspace."
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={closeDrawer} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground">
              Cancel
            </button>
            <button type="button" onClick={saveProduct} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20">
              <Check size={16} />
              Save Product
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-foreground">
              <span>Product name</span>
              <input
                value={productForm.name}
                onChange={(event) => setProductForm((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Neon Vibes Preset Pack"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-foreground">
              <span>Price</span>
              <input
                value={productForm.price}
                onChange={(event) => setProductForm((current) => ({ ...current, price: event.target.value }))}
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="$38"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-foreground">
            <span>Description</span>
            <textarea
              value={productForm.description}
              onChange={(event) => setProductForm((current) => ({ ...current, description: event.target.value }))}
              className="min-h-28 w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              placeholder="A short description of what the product includes."
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-foreground">
              <span>Status</span>
              <select
                value={productForm.status}
                onChange={(event) => setProductForm((current) => ({ ...current, status: event.target.value as ProductStatus }))}
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              >
                <option>Live</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-foreground">
              <span>Collection</span>
              <select
                value={productForm.collection}
                onChange={(event) => setProductForm((current) => ({ ...current, collection: event.target.value }))}
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              >
                {collections.map((collection) => (
                  <option key={collection}>{collection}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-foreground">
            <span>Inventory</span>
            <input
              value={productForm.inventory}
              onChange={(event) => setProductForm((current) => ({ ...current, inventory: event.target.value }))}
              className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              placeholder="Digital delivery"
            />
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-muted/20 px-4 py-4 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={productForm.featured}
              onChange={(event) => setProductForm((current) => ({ ...current, featured: event.target.checked }))}
              className="h-4 w-4 rounded border-[color:var(--color-border)] text-primary focus:ring-primary"
            />
            Feature this product on the storefront
          </label>
        </div>
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'import'}
        title="Import Products"
        subtitle="Bring in products from a spreadsheet, CSV export, or existing catalog."
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end">
            <button type="button" onClick={closeDrawer} className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white">
              Continue
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="rounded-[22px] border border-[color:var(--color-border)] bg-background p-5 text-sm text-muted">
            <p className="font-semibold text-foreground">Import sources</p>
            <div className="mt-4 space-y-3">
              {['CSV upload', 'Shopify import', 'Manual paste'].map((source) => (
                <button
                  key={source}
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-[color:var(--color-border)] px-4 py-3 text-left text-sm font-medium text-foreground transition hover:bg-muted/50"
                >
                  {source}
                  <ChevronDown size={16} className="text-muted" />
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] border border-dashed border-[color:var(--color-border)] bg-muted/20 p-5 text-sm text-muted">
            Drop files here or pick a source to start an import session.
          </div>
        </div>
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'search'}
        title="Search Products"
        subtitle="Search by product name, price, collection, or inventory note."
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end">
            <button type="button" onClick={closeDrawer} className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white">
              Apply
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3">
            <Search size={18} className="text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Try 'preset' or 'desk kit'"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {['Preset Pack', 'Desk Kit', 'Growth Templates', 'Launch Checklist'].map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => setQuery(suggestion)} className="rounded-2xl border border-[color:var(--color-border)] bg-muted/20 px-4 py-3 text-left text-sm font-medium text-foreground transition hover:bg-muted/40">
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'filter'}
        title="Filter Products"
        subtitle="Combine status, collection, and sort controls in one drawer."
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setStatusFilter('All');
                setCollectionFilter('All');
                setSortBy('featured');
              }}
              className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground"
            >
              Reset
            </button>
            <button type="button" onClick={closeDrawer} className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white">
              Apply Filters
            </button>
          </div>
        }
      >
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Status</p>
            <div className="mt-3 grid gap-2">
              {(['All', 'Live', 'Draft', 'Archived'] as const).map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={cn(
                    'flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition',
                    statusFilter === status ? 'border-primary bg-primary/10 text-primary' : 'border-[color:var(--color-border)] bg-background text-foreground hover:bg-muted/50'
                  )}
                >
                  {status}
                  {statusFilter === status ? <Check size={16} /> : null}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Collection</p>
            <div className="mt-3 grid gap-2">
              {['All', ...collections].map((collection) => (
                <button
                  key={collection}
                  type="button"
                  onClick={() => setCollectionFilter(collection)}
                  className={cn(
                    'flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition',
                    collectionFilter === collection ? 'border-primary bg-primary/10 text-primary' : 'border-[color:var(--color-border)] bg-background text-foreground hover:bg-muted/50'
                  )}
                >
                  {collection}
                  {collectionFilter === collection ? <Check size={16} /> : null}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Sort by</p>
            <div className="mt-3 grid gap-2">
              {[
                { key: 'featured', label: 'Featured first' },
                { key: 'revenue', label: 'Revenue' },
                { key: 'name', label: 'Name' },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSortBy(item.key as typeof sortBy)}
                  className={cn(
                    'flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition',
                    sortBy === item.key ? 'border-primary bg-primary/10 text-primary' : 'border-[color:var(--color-border)] bg-background text-foreground hover:bg-muted/50'
                  )}
                >
                  {item.label}
                  {sortBy === item.key ? <Check size={16} /> : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'preview'}
        title={activeProduct?.name ?? 'Product Preview'}
        subtitle={activeProduct?.description ?? 'Review product details and storefront context.'}
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={() => activeProduct && openEditDrawer(activeProduct)} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground">
              Edit
            </button>
            <button type="button" onClick={closeDrawer} className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white">
              Close Preview
            </button>
          </div>
        }
      >
        {activeProduct ? (
          <div className="space-y-5">
            <div className="relative h-52 overflow-hidden rounded-[26px] bg-gradient-to-br from-slate-900 via-violet-900 to-fuchsia-700">
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                sizes="min(100vw, 560px)"
                className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">{activeProduct.collection}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{activeProduct.name}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[22px] border border-[color:var(--color-border)] bg-muted/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Status</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{activeProduct.status}</p>
              </div>
              <div className="rounded-[22px] border border-[color:var(--color-border)] bg-muted/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Price</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{activeProduct.price}</p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                { label: 'Revenue', value: activeProduct.revenue },
                { label: 'Orders', value: String(activeProduct.orders) },
                { label: 'Inventory', value: activeProduct.inventory },
              ].map((item) => (
                <div key={item.label} className="rounded-[22px] border border-[color:var(--color-border)] bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'delete'}
        title="Delete Product"
        subtitle={activeProduct ? 'This removes the product from the management list immediately.' : undefined}
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={closeDrawer} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground">
              Cancel
            </button>
            <button type="button" onClick={deleteProduct} className="rounded-2xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white">
              Delete Product
            </button>
          </div>
        }
      >
        {activeProduct ? (
          <div className="space-y-4">
            <div className="rounded-[22px] border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-700 dark:text-red-200">
              <p className="font-semibold">{activeProduct.name}</p>
              <p className="mt-1">This action deletes the product and removes it from the catalog list.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-[22px] border border-[color:var(--color-border)] bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Collection</p>
                <p className="mt-2 font-semibold text-foreground">{activeProduct.collection}</p>
              </div>
              <div className="rounded-[22px] border border-[color:var(--color-border)] bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Revenue</p>
                <p className="mt-2 font-semibold text-foreground">{activeProduct.revenue}</p>
              </div>
            </div>
          </div>
        ) : null}
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'move'}
        title="Move to Collection"
        subtitle="Reassign this product without leaving the dashboard."
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={closeDrawer} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground">
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (drawer.type === 'move' && activeProduct) {
                  setProducts((current) => current.map((product) => (product.id === activeProduct.id ? { ...product, collection: moveTarget } : product)));
                }
                closeDrawer();
              }}
              className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Move Product
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="rounded-[22px] border border-[color:var(--color-border)] bg-background p-4 text-sm">
            <p className="font-semibold text-foreground">Current product</p>
            <p className="mt-1 text-muted">{activeProduct?.name ?? 'Select a product to move.'}</p>
          </div>

          <label className="space-y-2 text-sm font-medium text-foreground">
            <span>Target collection</span>
            <select
              value={moveTarget}
              onChange={(event) => setMoveTarget(event.target.value)}
              className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            >
              {collections.map((collection) => (
                <option key={collection}>{collection}</option>
              ))}
            </select>
          </label>

          <div className="rounded-[22px] border border-[color:var(--color-border)] bg-muted/20 p-4 text-sm text-muted">
            Moving products is reflected instantly in the catalog and preview drawers.
          </div>
        </div>
      </CreatorRightDrawer>

      <CreatorRightDrawer
        open={drawer.type === 'bulk'}
        title="Bulk Actions"
        subtitle="Apply changes to the selected products from one drawer."
        onClose={closeDrawer}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={closeDrawer} className="rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-2.5 text-sm font-semibold text-foreground">
              Cancel
            </button>
            <button type="button" onClick={saveBulkAction} className="rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] px-4 py-2.5 text-sm font-semibold text-white">
              Apply Action
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="rounded-[22px] border border-[color:var(--color-border)] bg-background p-4 text-sm">
            <p className="font-semibold text-foreground">{selectedProducts.length} selected products</p>
            <p className="mt-1 text-muted">Choose a bulk operation and apply it to the selected catalog rows.</p>
          </div>

          <div className="grid gap-2">
            {[
              { label: 'Move', icon: MoveRight },
              { label: 'Archive', icon: Archive },
              { label: 'Feature', icon: Tag },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setBulkAction(item.label as typeof bulkAction)}
                className={cn(
                  'flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition',
                  bulkAction === item.label ? 'border-primary bg-primary/10 text-primary' : 'border-[color:var(--color-border)] bg-background text-foreground hover:bg-muted/50'
                )}
              >
                <span className="flex items-center gap-2">
                  <item.icon size={16} />
                  {item.label}
                </span>
                {bulkAction === item.label ? <Check size={16} /> : null}
              </button>
            ))}
          </div>

          {bulkAction === 'Move' ? (
            <label className="space-y-2 text-sm font-medium text-foreground">
              <span>Target collection</span>
              <select
                value={moveTarget}
                onChange={(event) => setMoveTarget(event.target.value)}
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              >
                {collections.map((collection) => (
                  <option key={collection}>{collection}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      </CreatorRightDrawer>
    </div>
  );
}
