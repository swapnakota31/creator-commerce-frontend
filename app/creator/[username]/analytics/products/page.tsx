import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import { CreatorProductAnalytics } from '@/components/creator/CreatorAnalyticsDashboard';

type CreatorAnalyticsProductsPageProps = {
  params: Promise<{ username: string }>;
};

export default async function CreatorAnalyticsProductsPage({ params }: CreatorAnalyticsProductsPageProps) {
  const { username } = await params;

  return (
    <CreatorRouteShell username={username} sectionTitle="Analytics / Product Analytics">
      <CreatorProductAnalytics username={username} />
    </CreatorRouteShell>
  );
}