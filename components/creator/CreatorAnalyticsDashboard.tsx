'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Download,
  Eye,
  Filter,
  Flame,
  Globe,
  MousePointer2,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type AnalyticsSectionProps = {
  username: string;
};

type TrendDirection = 'up' | 'down';

type KpiCard = {
  label: string;
  value: string;
  change: string;
  direction: TrendDirection;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  accent: string;
};

type PlatformRow = {
  platform: string;
  visitors: string;
  productViews: string;
  clicks: string;
  ctr: string;
  growth: string;
};

type ProductRow = {
  name: string;
  image: string;
  views: number;
  clicks: number;
  ctr: string;
  trend: string;
  status: 'Hot' | 'Growing' | 'Stable';
  badge: string;
};

const overviewKpis: KpiCard[] = [
  { label: 'Storefront Visitors', value: '84.2K', change: '+18.4%', direction: 'up', icon: Eye, accent: 'from-[#7B2CFF] to-[#06B6D4]' },
  { label: 'Unique Visitors', value: '62.8K', change: '+13.2%', direction: 'up', icon: Target, accent: 'from-violet-500 to-fuchsia-500' },
  { label: 'Product Views', value: '128.4K', change: '+22.1%', direction: 'up', icon: ShoppingBag, accent: 'from-cyan-500 to-sky-500' },
  { label: 'Buy Now Clicks', value: '9,284', change: '+16.7%', direction: 'up', icon: MousePointer2, accent: 'from-emerald-500 to-green-500' },
  { label: 'Overall CTR', value: '7.2%', change: '+1.4%', direction: 'up', icon: TrendingUp, accent: 'from-amber-500 to-orange-500' },
  { label: 'Collection Views', value: '41.6K', change: '+10.8%', direction: 'up', icon: BarChart3, accent: 'from-zinc-500 to-zinc-700' },
];

const trafficSeries = {
  daily: [42, 58, 46, 69, 81, 74, 92, 88, 104, 96, 111, 125, 118, 136, 148],
  weekly: [210, 246, 238, 282, 314, 301, 352, 368, 391, 410, 428, 456],
  monthly: [980, 1042, 1128, 1210, 1305, 1368, 1458, 1520, 1604, 1718, 1802, 1894],
};

const trafficSources = [
  { label: 'Instagram', value: '45%', amount: '37.8K', color: 'bg-[#7B2CFF]' },
  { label: 'YouTube', value: '21%', amount: '17.7K', color: 'bg-[#06B6D4]' },
  { label: 'TikTok', value: '14%', amount: '11.8K', color: 'bg-zinc-900 dark:bg-zinc-100' },
  { label: 'X (Twitter)', value: '8%', amount: '6.7K', color: 'bg-zinc-500' },
  { label: 'Facebook', value: '7%', amount: '5.9K', color: 'bg-[#22C55E]' },
  { label: 'Direct Traffic', value: '5%', amount: '4.3K', color: 'bg-[#F59E0B]' },
];

const topProducts = [
  { name: 'Creator Desk Kit', views: '18.4K', clicks: '1,268', ctr: '6.9%' },
  { name: 'Studio Light Duo', views: '15.2K', clicks: '1,104', ctr: '7.3%' },
  { name: 'Travel Content Pack', views: '14.1K', clicks: '924', ctr: '6.5%' },
  { name: 'Minimal Launch Bundle', views: '12.7K', clicks: '871', ctr: '6.8%' },
];

const insights = [
  { title: 'Instagram generated 45% of total traffic.', icon: Globe },
  { title: 'Travel Content Pack is gaining momentum.', icon: Flame },
  { title: 'CTR increased 1.4% this week.', icon: TrendingUp },
  { title: 'Studio Light Duo converts at 7.3%.', icon: Trophy },
];

const platformRows: PlatformRow[] = [
  { platform: 'Instagram', visitors: '37.8K', productViews: '61.2K', clicks: '4,128', ctr: '6.7%', growth: '+18%' },
  { platform: 'YouTube', visitors: '17.7K', productViews: '28.9K', clicks: '2,004', ctr: '7.0%', growth: '+11%' },
  { platform: 'TikTok', visitors: '11.8K', productViews: '19.1K', clicks: '1,312', ctr: '6.8%', growth: '+22%' },
  { platform: 'X (Twitter)', visitors: '6.7K', productViews: '9.4K', clicks: '548', ctr: '5.8%', growth: '+7%' },
  { platform: 'Facebook', visitors: '5.9K', productViews: '8.2K', clicks: '472', ctr: '5.7%', growth: '+4%' },
  { platform: 'Direct', visitors: '4.3K', productViews: '6.3K', clicks: '312', ctr: '4.9%', growth: '+3%' },
  { platform: 'Referral', visitors: '2.1K', productViews: '3.6K', clicks: '158', ctr: '4.4%', growth: '+9%' },
];

const platformDistribution = [
  { label: 'Instagram', value: 45, color: '#7B2CFF' },
  { label: 'YouTube', value: 21, color: '#06B6D4' },
  { label: 'TikTok', value: 14, color: '#18181b' },
  { label: 'X', value: 8, color: '#71717a' },
  { label: 'Facebook', value: 7, color: '#22C55E' },
  { label: 'Direct', value: 5, color: '#F59E0B' },
  { label: 'Referral', value: 3, color: '#EF4444' },
];

const platformInsights = [
  { label: 'Best platform', value: 'Instagram', note: '37.8K visitors and 45% of total traffic.', icon: Globe },
  { label: 'Fastest growth', value: 'TikTok', note: '+22% month over month.', icon: TrendingUp },
  { label: 'Highest CTR', value: 'YouTube', note: '7.0% click-through rate.', icon: Trophy },
  { label: 'Most conversions', value: 'Instagram', note: '4,128 Buy Now clicks.', icon: MousePointer2 },
];

const productRows: ProductRow[] = [
  { name: 'Creator Desk Kit', image: 'Desk Kit', views: 18400, clicks: 1268, ctr: '6.9%', trend: '+18%', status: 'Hot', badge: 'High traffic' },
  { name: 'Studio Light Duo', image: 'Light Duo', views: 15200, clicks: 1104, ctr: '7.3%', trend: '+14%', status: 'Hot', badge: 'Top CTR' },
  { name: 'Travel Content Pack', image: 'Travel Pack', views: 14100, clicks: 924, ctr: '6.5%', trend: '+24%', status: 'Growing', badge: 'Fast rising' },
  { name: 'Minimal Launch Bundle', image: 'Launch Bundle', views: 12700, clicks: 871, ctr: '6.8%', trend: '+9%', status: 'Stable', badge: 'Consistent' },
  { name: 'Pro Creator Course', image: 'Creator Course', views: 9800, clicks: 681, ctr: '6.9%', trend: '+11%', status: 'Growing', badge: 'Balanced' },
];

const productInsights = [
  { title: 'Creator Desk Kit receives the highest traffic.', icon: Sparkles },
  { title: 'Studio Light Duo has the best CTR.', icon: Trophy },
  { title: 'Travel Content Pack is trending upward.', icon: Flame },
];

const productTrendWindows: { label: string; value: '7d' | '30d' | '90d' }[] = [
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '90D', value: '90d' },
];

const platformShareByName = platformDistribution.reduce<Record<string, number>>((shares, platform) => {
  shares[platform.label] = platform.value;
  return shares;
}, {});

function creatorName(username: string) {
  return username
    .replace(/^@/, '')
    .split(/[_\-.]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || username;
}

function DashboardCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -m-4 min-h-screen overflow-hidden px-4 py-4 sm:-m-6 sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(123,44,255,0.12),transparent_30%),radial-gradient(circle_at_90%_12%,rgba(6,182,212,0.11),transparent_32%)]" />
      <div className="relative space-y-6 pb-12">{children}</div>
    </div>
  );
}

function HeroSection({
  eyebrow,
  title,
  metric,
  detail,
  children,
}: {
  eyebrow: string;
  title: string;
  metric: string;
  detail: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[32px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7B2CFF]">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-[34px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[40px]">
            {title}
          </h1>
          <p className="mt-4 text-[15px] text-muted sm:text-base">{metric}</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#22C55E]/10 px-3 py-1.5 text-[13px] font-semibold text-[#16A34A] dark:text-[#4ADE80]">
            <ArrowUpRight size={14} />
            {detail}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">{children}</div>
      </div>
    </motion.section>
  );
}

function ActionButton({ children, isActive = false }: { children: React.ReactNode; isActive?: boolean }) {
  return (
    <button
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-all',
        isActive
          ? 'bg-foreground text-background shadow-sm'
          : 'border border-[color:var(--color-border)] bg-[color:var(--color-card)] text-muted hover:border-[#7B2CFF]/30 hover:text-foreground'
      )}
    >
      {children}
    </button>
  );
}

function SectionShell({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <section className="rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[22px] font-semibold tracking-tight text-foreground">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function TrendChip({ direction, text }: { direction: TrendDirection; text: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold', direction === 'up' ? 'bg-[#22C55E]/10 text-[#16A34A] dark:text-[#4ADE80]' : 'bg-[#EF4444]/10 text-[#EF4444]')}>
      {direction === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
      {text}
    </span>
  );
}

function MetricCard({ metric, featured = false }: { metric: KpiCard; featured?: boolean }) {
  const Icon = metric.icon;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={cn(
        'group relative overflow-hidden rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 shadow-sm transition-all',
        featured && 'md:col-span-2'
      )}
    >
      <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-90', metric.accent)} />
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className={cn('font-bold tracking-tight text-foreground', featured ? 'text-[46px] leading-none' : 'text-[40px] leading-none')}>{metric.value}</p>
          <p className="mt-3 text-[14px] font-medium text-muted">{metric.label}</p>
        </div>
        <div className="rounded-2xl bg-[color:var(--color-background)] p-2.5 text-muted transition-colors group-hover:text-[#7B2CFF]">
          <Icon size={18} />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <TrendChip direction={metric.direction} text={metric.change} />
        <span className="text-[12px] text-muted">compared to last month</span>
      </div>
    </motion.div>
  );
}

function AreaChart({ values }: { values: number[] }) {
  const width = 1000;
  const height = 350;
  const left = 42;
  const right = 42;
  const top = 42;
  const bottom = 56;
  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values.map((value, index) => {
    const x = left + (chartWidth / Math.max(values.length - 1, 1)) * index;
    const y = top + chartHeight - ((value - min) / Math.max(max - min, 1)) * chartHeight;
    return { x, y, value };
  });

  const linePath = points
    .map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      const previous = points[index - 1];
      const control = (point.x - previous.x) / 2;
      return `C ${previous.x + control} ${previous.y}, ${point.x - control} ${point.y}, ${point.x} ${point.y}`;
    })
    .join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - bottom} L ${points[0].x} ${height - bottom} Z`;

  return (
    <div className="overflow-hidden rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-3 text-[12px] font-semibold text-muted">
          <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#7B2CFF]" /> Visitors</span>
          <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#06B6D4]" /> Trend</span>
        </div>
        <p className="text-[12px] text-muted">Hover points for daily volume</p>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[320px] w-full">
        <defs>
          <linearGradient id="trafficLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#7B2CFF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="trafficArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7B2CFF" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#06B6D4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((tick) => (
          <line key={tick} x1={left} x2={width - right} y1={top + tick * (chartHeight / 3)} y2={top + tick * (chartHeight / 3)} stroke="currentColor" strokeOpacity="0.08" />
        ))}
        <path d={areaPath} fill="url(#trafficArea)" />
        <path d={linePath} fill="none" stroke="url(#trafficLine)" strokeWidth="5" strokeLinecap="round" />
        {points.map((point, index) => (
          <g key={index} className="group">
            <title>{`${point.value}K visitors`}</title>
            <circle cx={point.x} cy={point.y} r="14" fill="transparent" />
            <circle cx={point.x} cy={point.y} r="5" fill="#fff" stroke="#7B2CFF" strokeWidth="3" className="opacity-0 transition-opacity group-hover:opacity-100" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function DonutDistribution({ segments }: { segments: { label: string; value: number; color: string }[] }) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  const gradient = segments
    .map((segment, index) => {
      const start = (segments.slice(0, index).reduce((sum, item) => sum + item.value, 0) / total) * 100;
      const end = start + (segment.value / total) * 100;
      return `${segment.color} ${start}% ${end}%`;
    })
    .join(', ');

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="flex justify-center">
        <div className="relative flex h-72 w-72 items-center justify-center rounded-full shadow-[0_24px_70px_rgba(123,44,255,0.18)] transition-transform hover:scale-[1.02]" style={{ background: `conic-gradient(${gradient})` }}>
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[color:var(--color-card)] text-center shadow-inner">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">Traffic Share</p>
              <p className="mt-2 text-[42px] font-bold tracking-tight text-foreground">100%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {segments.map((segment) => (
          <div key={segment.label} className="group flex items-center justify-between rounded-2xl border border-[color:var(--color-border)]/50 bg-[color:var(--color-background)]/40 px-4 py-3 transition-colors hover:bg-[color:var(--color-background)] hover:border-[color:var(--color-border)]">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full shadow-sm" style={{ backgroundColor: segment.color }} />
              <span className="text-sm font-medium text-foreground">{segment.label}</span>
            </div>
            <span className="text-sm font-bold text-muted group-hover:text-foreground">{segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductBars({ products }: { products: ProductRow[] }) {
  const max = Math.max(...products.map((product) => product.views));

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.name} className="grid gap-3 sm:grid-cols-[180px_1fr_64px] sm:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">{product.name}</p>
            <p className="text-[12px] text-muted">{product.clicks.toLocaleString()} clicks</p>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-muted/20">
            <div className="h-full rounded-full bg-gradient-to-r from-[#7B2CFF] to-[#06B6D4] shadow-[0_8px_22px_rgba(123,44,255,0.18)]" style={{ width: `${(product.views / max) * 100}%` }} />
          </div>
          <p className="text-sm font-bold text-foreground sm:text-right">{(product.views / 1000).toFixed(1)}K</p>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: ProductRow['status'] }) {
  return (
    <span className={cn('rounded-full px-3 py-1 text-[12px] font-semibold', status === 'Hot' ? 'bg-[#EF4444]/10 text-[#EF4444]' : status === 'Growing' ? 'bg-[#22C55E]/10 text-[#16A34A] dark:text-[#4ADE80]' : 'bg-zinc-500/10 text-zinc-500')}>
      {status}
    </span>
  );
}

export function CreatorAnalyticsOverview({ username }: AnalyticsSectionProps) {
  const [range, setRange] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <DashboardCanvas>
      <HeroSection
        eyebrow="Analytics Overview"
        title={`Good morning, ${creatorName(username)}`}
        metric="Your storefront generated 84.2K visitors this month"
        detail="+18.4% compared to last month"
      >
        <div className="flex items-center gap-1 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-1">
          {(['daily', 'weekly', 'monthly'] as const).map((option) => (
            <button
              key={option}
              onClick={() => setRange(option)}
              className={cn('rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all', range === option ? 'bg-[#7B2CFF] text-white shadow-sm' : 'text-muted hover:text-foreground')}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        <ActionButton>Compare</ActionButton>
        <ActionButton><Download size={14} /> Export</ActionButton>
      </HeroSection>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewKpis.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} featured={index === 0} />
        ))}
      </div>

      <SectionShell title="Traffic Overview">
        <AreaChart values={trafficSeries[range]} />
      </SectionShell>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionShell title="Top Products">
          <div className="space-y-1">
            {topProducts.map((product, index) => (
              <div key={product.name} className="grid grid-cols-[32px_1fr] gap-4 rounded-2xl px-2 py-3 transition-colors hover:bg-[color:var(--color-background)] sm:grid-cols-[32px_1fr_90px_110px_70px] sm:items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-background)] text-sm font-bold text-muted">{index + 1}</span>
                <div>
                  <p className="font-semibold text-foreground">{product.name}</p>
                  <p className="text-[12px] text-muted sm:hidden">{product.views} views, {product.clicks} clicks, {product.ctr} CTR</p>
                </div>
                <span className="hidden text-sm text-muted sm:block">{product.views}</span>
                <span className="hidden text-sm text-muted sm:block">{product.clicks} clicks</span>
                <span className="hidden text-sm font-bold text-foreground sm:block">{product.ctr}</span>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell title="Insights">
          <div className="space-y-4">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <div key={insight.title} className="flex items-start gap-3 rounded-2xl px-1 py-2">
                  <div className="mt-0.5 rounded-full bg-[#7B2CFF]/10 p-2 text-[#7B2CFF]">
                    <Icon size={16} />
                  </div>
                  <p className="text-[15px] leading-6 text-foreground">{insight.title}</p>
                </div>
              );
            })}
          </div>
        </SectionShell>
      </div>
    </DashboardCanvas>
  );
}

export function CreatorPlatformAnalytics({ username }: AnalyticsSectionProps) {
  return (
    <DashboardCanvas>
      <HeroSection
        eyebrow="Platform Analytics"
        title={`Traffic source performance for ${creatorName(username)}`}
        metric="Instagram, YouTube, and TikTok are driving the strongest storefront discovery."
        detail="Social traffic is up 18% compared to last month"
      >
        <ActionButton isActive><CalendarDays size={14} /> Last 30 days</ActionButton>
        <ActionButton>Compare</ActionButton>
        <ActionButton><Download size={14} /> Export</ActionButton>
      </HeroSection>

      <SectionShell title="Platform Summary">
        <div className="grid gap-4 lg:grid-cols-3">
          {platformRows.slice(0, 3).map((row) => (
            <motion.div key={row.platform} whileHover={{ y: -3 }} className="rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-semibold text-foreground">{row.platform}</p>
                  <p className="mt-4 text-[42px] font-bold leading-none tracking-tight text-foreground">{platformShareByName[row.platform] ?? 0}%</p>
                </div>
                <TrendChip direction="up" text={row.growth} />
              </div>
              <p className="mt-4 text-[14px] text-muted">{row.visitors} visitors</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Traffic Distribution">
        <DonutDistribution segments={platformDistribution} />
      </SectionShell>

      <SectionShell title="Platform Insights">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {platformInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.label} className="rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-background)]/50 p-5 transition-colors hover:bg-[color:var(--color-background)]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7B2CFF]/10 text-[#7B2CFF]">
                  <Icon size={18} />
                </div>
                <p className="text-[13px] font-medium text-muted">{insight.label}</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{insight.value}</p>
                <p className="mt-3 text-[13px] leading-5 text-muted">{insight.note}</p>
              </div>
            );
          })}
        </div>
      </SectionShell>
    </DashboardCanvas>
  );
}

export function CreatorProductAnalytics({ username }: AnalyticsSectionProps) {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<'views' | 'clicks' | 'ctr'>('views');
  const [filter, setFilter] = useState<'All' | 'Hot' | 'Growing' | 'Stable'>('All');
  const [trendWindow, setTrendWindow] = useState<'7d' | '30d' | '90d'>('30d');

  const visibleProducts = useMemo(() => {
    const filtered = productRows.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'All' || product.status === filter;
      return matchesQuery && matchesFilter;
    });

    return filtered.sort((left, right) => {
      if (sortBy === 'ctr') {
        return parseFloat(right.ctr) - parseFloat(left.ctr);
      }
      if (sortBy === 'clicks') {
        return right.clicks - left.clicks;
      }
      return right.views - left.views;
    });
  }, [filter, query, sortBy]);

  return (
    <DashboardCanvas>
      <HeroSection
        eyebrow="Product Analytics"
        title={`Product performance for ${creatorName(username)}`}
        metric="Track which storefront products earn attention and convert discovery into clicks."
        detail="Top products are up 14% this week"
      >
        <ActionButton isActive><CalendarDays size={14} /> Last 30 days</ActionButton>
        <ActionButton>Compare</ActionButton>
        <ActionButton><Download size={14} /> Export</ActionButton>
      </HeroSection>

      <SectionShell
        title="Product Leaderboard"
        action={
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-10 items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4">
              <Search size={14} className="text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products"
                className="w-36 bg-transparent text-[13px] outline-none placeholder:text-muted"
              />
            </div>
            <ActionButton><Filter size={14} /> Filters</ActionButton>
          </div>
        }
      >
        <div className="mb-5 flex flex-wrap gap-2">
          {(['All', 'Hot', 'Growing', 'Stable'] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn('rounded-full px-4 py-2 text-[13px] font-semibold transition-colors', filter === item ? 'bg-foreground text-background' : 'bg-[color:var(--color-background)] text-muted hover:bg-[color:var(--color-background)]/85 hover:text-foreground')}
            >
              {item}
            </button>
          ))}
          {(['views', 'clicks', 'ctr'] as const).map((item) => (
            <button
              key={item}
              onClick={() => setSortBy(item)}
              className={cn('rounded-full px-4 py-2 text-[13px] font-semibold transition-colors', sortBy === item ? 'bg-[#7B2CFF] text-white' : 'bg-[color:var(--color-background)] text-muted hover:bg-[color:var(--color-background)]/85 hover:text-foreground')}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <motion.article key={product.name} whileHover={{ y: -4 }} className="overflow-hidden rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-sm">
              <div className="flex aspect-[1.8] items-end justify-between bg-gradient-to-br from-[#7B2CFF]/18 via-[#06B6D4]/12 to-transparent p-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/70 text-center text-[12px] font-bold text-[#7B2CFF] shadow-sm dark:bg-zinc-950/70">
                  {product.image}
                </div>
                <StatusBadge status={product.status} />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">{product.name}</h3>
                    <p className="mt-1 text-[13px] text-muted">{product.badge}</p>
                  </div>
                  <TrendChip direction="up" text={product.trend} />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-[12px] text-muted">Views</p>
                    <p className="mt-1 text-base font-bold text-foreground">{product.views.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-muted">Clicks</p>
                    <p className="mt-1 text-base font-bold text-foreground">{product.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-muted">CTR</p>
                    <p className="mt-1 text-base font-bold text-foreground">{product.ctr}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Product Performance"
        action={
          <div className="flex rounded-full bg-[color:var(--color-background)] p-1">
            {productTrendWindows.map((option) => (
              <button
                key={option.value}
                onClick={() => setTrendWindow(option.value)}
                className={cn('rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors', trendWindow === option.value ? 'bg-[#7B2CFF] text-white' : 'text-muted hover:text-foreground')}
              >
                {option.label}
              </button>
            ))}
          </div>
        }
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
          <ProductBars products={visibleProducts} />
          <div className="rounded-[24px] border border-[color:var(--color-border)] bg-gradient-to-br from-[#7B2CFF]/10 to-[#06B6D4]/10 p-5">
            <p className="text-[13px] font-semibold text-[#7B2CFF] dark:text-muted">Selected window</p>
            <p className="mt-2 text-[40px] font-bold tracking-tight text-foreground">{trendWindow === '7d' ? '+8.4%' : trendWindow === '30d' ? '+18.1%' : '+31.6%'}</p>
            <p className="mt-2 text-[13px] leading-5 text-foreground/80 dark:text-muted">Product views across the active leaderboard.</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell title="Product Insights">
        <div className="grid gap-4 md:grid-cols-3">
          {productInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.title} className="flex items-start gap-4 rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-background)]/50 p-5">
                <div className="rounded-2xl bg-[#06B6D4]/10 p-2.5 text-[#0891B2]">
                  <Icon size={18} />
                </div>
                <p className="text-[15px] leading-6 text-foreground">{insight.title}</p>
              </div>
            );
          })}
        </div>
      </SectionShell>
    </DashboardCanvas>
  );
}
