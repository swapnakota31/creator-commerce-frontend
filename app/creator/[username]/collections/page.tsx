import CreatorRouteShell from '@/components/creator/CreatorRouteShell';

type CreatorCollectionsPageProps = {
  params: Promise<{ username: string }>;
};

const collections = [
  {
    title: 'Summer Essentials',
    description: 'Premium creator picks for seasonal campaigns and storefront upgrades.',
    count: 24,
  },
  {
    title: 'Workspace Setup',
    description: 'Tools and accessories for a polished creator workflow.',
    count: 18,
  },
  {
    title: 'Content Kit',
    description: 'Assets, templates, and products used across daily content production.',
    count: 32,
  },
];

export default async function CreatorCollectionsPage({ params }: CreatorCollectionsPageProps) {
  const { username } = await params;
  return (
    <CreatorRouteShell username={username} sectionTitle="Collections">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <div key={collection.title} className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-6">
            <div className="h-36 rounded-2xl bg-gradient-to-br from-[#A100FF]/20 to-[#7B2CFF]/20 mb-5" />
            <h2 className="text-xl font-bold mb-2">{collection.title}</h2>
            <p className="text-sm text-muted leading-relaxed">{collection.description}</p>
            <p className="mt-4 text-sm font-semibold text-primary">{collection.count} products</p>
          </div>
        ))}
      </div>
    </CreatorRouteShell>
  );
}
