import { redirect } from 'next/navigation';

type CreatorLandingPageProps = {
  params: Promise<{ username: string }>;
};

export default async function CreatorLandingPage({ params }: CreatorLandingPageProps) {
  const { username } = await params;
  redirect(`/creator/${username}/profile`);
}
