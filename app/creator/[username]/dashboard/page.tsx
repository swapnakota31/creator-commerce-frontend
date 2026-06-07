import CreatorRouteShell from '@/components/creator/CreatorRouteShell';

type CreatorDashboardPageProps = {
  params: { username: string };
};

const dashboardStats = [
  { label: 'Products', value: '48', detail: '+12% this month' },
  { label: 'Collections', value: '12', detail: '+2 this week' },
  { label: 'Clicks', value: '12.4K', detail: '+18.5% vs last week' },
  { label: 'Views', value: '84.2K', detail: '+4.2% vs last week' },
];

export default function CreatorDashboardPage({ params }: CreatorDashboardPageProps) {
  return (
    <CreatorRouteShell username={params.username} sectionTitle="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-6">
            <p className="text-sm text-muted font-medium">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-2 text-sm text-primary font-semibold">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-12">
        <div className="xl:col-span-2 bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>
              <p className="text-sm text-muted mt-1">Performance summary for @{params.username}.</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] text-white font-semibold">
              Share Profile
            </button>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Top performing collection', value: 'Summer Essentials', note: '3.8K clicks this week' },
              { title: 'Newest product', value: 'Creator Desk Kit', note: 'Published 6 hours ago' },
              { title: 'Best traffic source', value: 'Instagram', note: '41% of total clicks' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[color:var(--color-border)] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-sm text-muted">{item.title}</p>
                  <p className="font-bold text-lg mt-1">{item.value}</p>
                </div>
                <p className="text-sm text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Today</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">New link clicks</span>
                <span className="font-semibold">+318</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">New followers</span>
                <span className="font-semibold">+64</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted">Saved products</span>
                <span className="font-semibold">+22</span>
              </div>
            </div>
          </div>

          <div className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {['Product published', 'Collection updated', 'Profile viewed'].map((label) => (
                <div key={label} className="rounded-2xl bg-background border border-[color:var(--color-border)] p-4">
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs text-muted mt-1">Just now</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CreatorRouteShell>
  );
}
