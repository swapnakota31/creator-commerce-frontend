import CreatorRouteShell from '@/components/creator/CreatorRouteShell';
import CreatorProductsManager from '@/components/creator/CreatorProductsManager';

type CreatorProductsPageProps = {
  params: Promise<{ username: string }>;
};

export default async function CreatorProductsPage({ params }: CreatorProductsPageProps) {
  const { username } = await params;
  return (
    <CreatorRouteShell username={username} sectionTitle="Products">
      <CreatorProductsManager username={username} />
    </CreatorRouteShell>
  );
}
