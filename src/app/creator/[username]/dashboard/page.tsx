import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Download,
  Layers3,
  MousePointerClick,
  PackagePlus,
  Palette,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import { cn } from '@/lib/utils';

type CreatorDashboardPageProps = {
  params: Promise<{ username: string }>;
};

type SnapshotMetric = {
  label: string;
  value: string;
  trend: string;
  featured?: boolean;
};

type ProductPerformance = {
  name: string;
  image: string;
  views: string;
  ctr: string;
  badge: string;
};

const snapshotMetrics: SnapshotMetric[] = [
  { label: 'Storefront Visitors', value: '84.2K', trend: '+18.4%', featured: true },
  { label: 'Product Views', value: '128.4K', trend: '+22.1%' },
  { label: 'Buy Now Clicks', value: '9,284', trend: '+16.7%' },
  { label: 'CTR', value: '7.2%', trend: '+1.4%' },
];

const growthValues = [42, 48, 45, 57, 63, 61, 72, 78, 74, 84, 91, 88, 101, 108, 118, 126];

const topProducts: ProductPerformance[] = [
  {
    name: 'Creator Desk Kit',
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
    views: '18.4K',
    ctr: '7.3%',
    badge: 'Top Performer',
  },
  {
    name: 'Studio Light Duo',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    views: '15.2K',
    ctr: '7.1%',
    badge: 'Highest CTR',
  },
  {
    name: 'Travel Content Pack',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    views: '14.1K',
    ctr: '6.5%',
    badge: 'Growing Fast',
  },
];

const activityItems = [
  'Product "Creator Desk Kit" received 12 clicks.',
  'New visitor arrived from Instagram.',
  'Collection "Summer Essentials" gained traction.',
  'Product CTR increased by 2%.',
];

const insights = [
  'Instagram drives 45% of traffic.',
  'Studio Light Duo has the highest CTR.',
  'Travel Content Pack is growing rapidly.',
  'CTR increased 1.4% this week.',
];

const quickActions = [
  {
    title: 'Create Product',
    description: 'Add a new item to your storefront.',
    href: 'products',
    icon: PackagePlus,
  },
  {
    title: 'Create Collection',
    description: 'Group products into a curated drop.',
    href: 'collections',
    icon: Layers3,
  },
  {
    title: 'View Analytics',
    description: 'Understand traffic and conversion trends.',
    href: 'analytics',
    icon: TrendingUp,
  },
  {
    title: 'Customize Storefront',
    description: 'Tune profile, visuals, and storefront details.',
    href: 'profile',
    icon: Palette,
  },
];

function creatorName(username: string) {
  return (
    username
      .replace(/^@/, '')
      .split(/[_\-.]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ') || username
  );
}

function SectionHeader({ title, caption }: { title: string; caption?: string }) {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <h2 className="text-[22px] font-semibold tracking-tight text-foreground">{title}</h2>
      {caption ? <p className="text-[13px] leading-5 text-muted">{caption}</p> : null}
    </div>
  );
}

function TrendPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22C55E]/10 px-3 py-1.5 text-[13px] font-semibold text-[#16A34A] dark:text-[#4ADE80]">
      <ArrowUpRight size={14} />
      {children}
    </span>
  );
}

function GrowthChart() {
  const width = 980;
  const height = 330;
  const paddingX = 34;
  const paddingTop = 28;
  const paddingBottom = 44;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingTop - paddingBottom;
  const min = Math.min(...growthValues);
  const max = Math.max(...growthValues);
  const points = growthValues.map((value, index) => {
    const x = paddingX + (chartWidth / (growthValues.length - 1)) * index;
    const y = paddingTop + chartHeight - ((value - min) / (max - min)) * chartHeight;
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
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`;

  return (
    <div className="rounded-[24px] border border-white/70 bg-white/75 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-950/70 sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeader title="Storefront Growth" caption="Visitors across the last 30 days." />
        <div className="inline-flex w-fit rounded-full border border-[color:var(--color-border)] bg-background/70 p-1">
          <span className="rounded-full bg-foreground px-3.5 py-2 text-[13px] font-semibold text-background">30D</span>
          <span className="px-3.5 py-2 text-[13px] font-semibold text-muted">90D</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-background/80 to-background/35">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-[280px] w-full sm:h-[330px]" role="img" aria-label="Storefront visitors growth chart">
          <defs>
            <linearGradient id="dashboardGrowthLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#7B2CFF" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="dashboardGrowthArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#7B2CFF" stopOpacity="0.26" />
              <stop offset="55%" stopColor="#06B6D4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2].map((tick) => (
            <line
              key={tick}
              x1={paddingX}
              x2={width - paddingX}
              y1={paddingTop + tick * (chartHeight / 2)}
              y2={paddingTop + tick * (chartHeight / 2)}
              stroke="currentColor"
              strokeOpacity="0.08"
            />
          ))}
          <path d={areaPath} fill="url(#dashboardGrowthArea)" />
          <path d={linePath} fill="none" stroke="url(#dashboardGrowthLine)" strokeLinecap="round" strokeWidth="5" />
          {points.map((point, index) => (
            <g key={index}>
              <title>{`${point.value}K visitors`}</title>
              <circle cx={point.x} cy={point.y} r="4.5" fill="#fff" stroke="#7B2CFF" strokeWidth="2.5" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default async function CreatorDashboardPage({ params }: CreatorDashboardPageProps) {
  const { username } = await params;
  const displayName = creatorName(username);

  return (
    <CreatorRouteShell username={username} sectionTitle="Dashboard">
      <div className="space-y-8 pb-12">
        <section className="relative overflow-hidden rounded-[24px] border border-white/70 bg-[linear-gradient(135deg,rgba(123,44,255,0.14),rgba(6,182,212,0.10)_45%,rgba(255,255,255,0.78))] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(123,44,255,0.22),rgba(6,182,212,0.12)_45%,rgba(24,24,27,0.88))] sm:p-8 lg:p-10">
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7B2CFF]">Creator Command Center</p>
              <h1 className="mt-5 text-[36px] font-semibold leading-[1.04] tracking-tight text-foreground sm:text-[40px]">
                Good Morning, {displayName} 👋
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-8 text-muted">
                Your storefront generated <span className="font-semibold text-foreground">84.2K visitors</span> this month.
              </p>
              <div className="mt-5">
                <TrendPill>+18.4% compared to last month</TrendPill>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-11 items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 text-[13px] font-semibold text-foreground shadow-sm backdrop-blur transition hover:border-[#7B2CFF]/30 dark:border-white/10 dark:bg-zinc-950/55">
                <CalendarDays size={15} />
                Last 30 days
              </button>
              <button className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-4 text-[13px] font-semibold text-background shadow-sm transition hover:-translate-y-0.5">
                <Download size={15} />
                Export
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {snapshotMetrics.map((metric) => (
            <div
              key={metric.label}
              className={cn(
                'rounded-[24px] border border-white/70 bg-white/76 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-zinc-950/70',
                metric.featured && 'bg-[linear-gradient(135deg,rgba(123,44,255,0.12),rgba(6,182,212,0.08),rgba(255,255,255,0.78))] dark:bg-[linear-gradient(135deg,rgba(123,44,255,0.22),rgba(6,182,212,0.12),rgba(24,24,27,0.78))]'
              )}
            >
              <p className="text-[44px] font-semibold leading-none tracking-tight text-foreground">{metric.value}</p>
              <p className="mt-4 text-[14px] font-medium text-muted">{metric.label}</p>
              <div className="mt-5">
                <TrendPill>{metric.trend}</TrendPill>
              </div>
            </div>
          ))}
        </section>

        <GrowthChart />

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-950/70 sm:p-6">
            <SectionHeader title="Top Performing Products" caption="The three products creating the most storefront momentum." />
            <div className="space-y-3">
              {topProducts.map((product, index) => (
                <article key={product.name} className="group grid grid-cols-[76px_1fr] gap-4 rounded-[24px] border border-transparent bg-background/58 p-3 transition hover:border-[#7B2CFF]/20 hover:bg-background sm:grid-cols-[86px_1fr_auto] sm:items-center">
                  <div className="relative h-[76px] overflow-hidden rounded-[18px] bg-zinc-100 dark:bg-zinc-900 sm:h-[86px]">
                    <Image src={product.image} alt="" fill sizes="96px" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">#{index + 1}</p>
                    <h3 className="mt-1 text-[16px] font-semibold tracking-tight text-foreground">{product.name}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-muted">
                      <span>{product.views} Views</span>
                      <span>{product.ctr} CTR</span>
                    </div>
                  </div>
                  <span className="col-span-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#7B2CFF]/10 px-3 py-1.5 text-[12px] font-semibold text-[#7B2CFF] sm:col-span-1">
                    <Sparkles size={13} />
                    {product.badge}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-950/70 sm:p-6">
            <SectionHeader title="Recent Activity" caption="What changed across your storefront today." />
            <div className="space-y-5">
              {activityItems.map((item) => (
                <div key={item} className="relative flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/12 text-[#0891B2]">
                    <MousePointerClick size={14} />
                  </span>
                  <div className="border-b border-[color:var(--color-border)] pb-5 last:border-b-0 last:pb-0">
                    <p className="text-[14px] leading-6 text-foreground">{item}</p>
                    <p className="mt-1 text-[12px] text-muted">Just now</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-950/70 sm:p-6">
          <SectionHeader title="Quick Insights" caption="Short signals worth acting on this week." />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {insights.map((insight) => (
              <div key={insight} className="rounded-[24px] bg-background/62 p-5">
                <Sparkles className="mb-4 text-[#7B2CFF]" size={18} />
                <p className="text-[14px] leading-6 text-foreground">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Quick Actions" caption="Move from insight to storefront updates." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.title}
                  href={`/creator/${username}/${action.href}`}
                  className="group rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.055)] transition hover:-translate-y-1 hover:border-[#7B2CFF]/25 hover:shadow-[0_22px_70px_rgba(123,44,255,0.12)] dark:border-white/10 dark:bg-zinc-950/70"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7B2CFF]/10 text-[#7B2CFF]">
                      <Icon size={19} />
                    </span>
                    <ArrowRight className="text-muted transition group-hover:translate-x-1 group-hover:text-[#7B2CFF]" size={18} />
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-tight text-foreground">{action.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-muted">{action.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </CreatorRouteShell>
  );
}
