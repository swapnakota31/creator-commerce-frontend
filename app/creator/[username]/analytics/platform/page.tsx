import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import { CreatorPlatformAnalytics } from '@/components/creator/CreatorAnalyticsDashboard';

type CreatorAnalyticsPlatformPageProps = {
  params: Promise<{ username: string }>;
};

export default async function CreatorAnalyticsPlatformPage({ params }: CreatorAnalyticsPlatformPageProps) {
  const { username } = await params;

  return (
    <CreatorRouteShell username={username} sectionTitle="Analytics / Platform Analytics">
      <CreatorPlatformAnalytics username={username} />
    </CreatorRouteShell>
  );
}