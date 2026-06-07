import CreatorRouteShell from '@/components/creator/CreatorRouteShell';

type CreatorAnalyticsPageProps = {
  params: { username: string };
};

const metrics = [
  { label: 'Profile Views', value: '84.2K' },
  { label: 'Link Clicks', value: '12.4K' },
  { label: 'Conversion Rate', value: '4.8%' },
  { label: 'Revenue', value: '$18.9K' },
];

export default function CreatorAnalyticsPage({ params }: CreatorAnalyticsPageProps) {
  return (
    <CreatorRouteShell username={params.username} sectionTitle="Analytics">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-6">
            <p className="text-sm text-muted font-medium">{metric.label}</p>
            <p className="mt-3 text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
    </CreatorRouteShell>
  );
}
