import { redirect } from 'next/navigation';

type CreatorLandingPageProps = {
  params: { username: string };
};

export default function CreatorLandingPage({ params }: CreatorLandingPageProps) {
  const { username } = params;
  redirect(`/creator/${username}/profile`);
}
