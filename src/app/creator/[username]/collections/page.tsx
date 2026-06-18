import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import CreatorCollectionsManager from '@/components/creator/CreatorCollectionsManager';

type CreatorCollectionsPageProps = {
  params: Promise<{ username: string }>;
};

export default async function CreatorCollectionsPage({ params }: CreatorCollectionsPageProps) {
  const { username } = await params;
  return (
    <CreatorRouteShell username={username} sectionTitle="Collections">
      <CreatorCollectionsManager username={username} />
    </CreatorRouteShell>
  );
}
