import HeroSection from '@/components/landing/HeroSection';
import Navbar from '@/components/landing/Navbar';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why LinkShelf', href: '#why-linkshelf' },
  { label: 'Creators', href: '#creators' },
  { label: 'Get started', href: '#get-started' },
];

const heroData = {
  badgeText: 'AI-Powered Creator Commerce',
  headline: 'Turn Any Product Link Into A Powerful Storefront',
  subheadline:
    'Transform links into a premium creator storefront, organize your products, and grow a business that feels polished from the first click.',
  primaryCta: { label: 'Get Started', href: '/creator/alexrivera_official/dashboard' },
  secondaryCta: { label: 'Explore Creators', href: '#creators' },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Navbar items={navItems} />
      <HeroSection {...heroData} />
    </main>
  );
}