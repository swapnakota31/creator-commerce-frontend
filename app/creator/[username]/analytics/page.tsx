import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import { CreatorAnalyticsOverview } from '@/components/creator/CreatorAnalyticsDashboard';

type CreatorAnalyticsPageProps = {
  params: Promise<{ username: string }>;
};

export default async function CreatorAnalyticsPage({ params }: CreatorAnalyticsPageProps) {
  const { username } = await params;
  return (
    <CreatorRouteShell username={username} sectionTitle="Analytics / Overview">
      <CreatorAnalyticsOverview username={username} />
    </CreatorRouteShell>
  );
}
