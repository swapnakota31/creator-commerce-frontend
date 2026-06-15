import CreatorRouteShell from '@/components/creator/CreatorRouteShell';

type CreatorSettingsPageProps = {
  params: Promise<{ username: string }>;
};

const settings = [
  'Edit Profile',
  'Change Banner',
  'Update Social Links',
  'Theme Preferences',
  'Billing Settings',
];

export default async function CreatorSettingsPage({ params }: CreatorSettingsPageProps) {
  const { username } = await params;
  return (
    <CreatorRouteShell username={username} sectionTitle="Settings">
      <div className="bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm p-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted mt-1">Quick access for @{username}.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {settings.map((setting) => (
            <button key={setting} className="text-left rounded-2xl border border-[color:var(--color-border)] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all bg-background">
              <span className="font-semibold">{setting}</span>
            </button>
          ))}
        </div>
      </div>
    </CreatorRouteShell>
  );
}
