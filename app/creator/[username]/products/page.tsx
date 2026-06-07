import CreatorRouteShell from '@/components/creator/CreatorRouteShell';

type CreatorProductsPageProps = {
  params: { username: string };
};

const products = [
  { name: 'Neon Vibes Preset Pack', status: 'Live', revenue: '$4,200' },
  { name: 'Creator Desk Kit', status: 'Draft', revenue: '$0' },
  { name: 'Social Growth Templates', status: 'Live', revenue: '$2,860' },
];

export default function CreatorProductsPage({ params }: CreatorProductsPageProps) {
  return (
    <CreatorRouteShell username={params.username} sectionTitle="Products">
      <div className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[color:var(--color-border)]">
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-muted mt-1">Manage the products attached to @{params.username}.</p>
        </div>
        <div className="divide-y divide-[color:var(--color-border)]">
          {products.map((product) => (
            <div key={product.name} className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-sm text-muted mt-1">Status: {product.status}</p>
              </div>
              <div className="text-sm font-semibold text-foreground">{product.revenue}</div>
            </div>
          ))}
        </div>
      </div>
    </CreatorRouteShell>
  );
}
