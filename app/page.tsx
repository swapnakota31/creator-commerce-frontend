import HeroSection from "@/components/landing/HeroSection";
import WhyLinkNest from "@/components/landing/WhyLinkNest";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BuildStorefrontSection from "@/components/landing/BuildStorefrontSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ImportSection from "@/components/landing/ImportSection";
import AnalyticsDashboardSection from "@/components/landing/AnalyticsDashboardSection";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const navItems = [
  { label: "Templates", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why LinkNest", href: "#need-of-linknest" },
  { label: "Features", href: "#features-grid" },
  { label: "How to Earn", href: "#how-to-earn" },
];

const heroData = {
  badgeText: "All-in-one link for Business",
  headline: "Turn Any Product Link Into a Powerful Creator Storefront.",
  subheadline:
    "From a single link, share beauty of curated pages, smart collections, and your own storefront to help you share and earn more.",
  primaryCta: { label: "Get Started Free", href: "#get-started" },
  secondaryCta: { label: "Watch 30s Demo", href: "#how-it-works" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar items={navItems} />
      <HeroSection {...heroData} />
      <HowItWorksSection />
      <WhyLinkNest />
      <BuildStorefrontSection />
      <FeaturesGrid />
      <ImportSection />
      <AnalyticsDashboardSection />
      <Footer />
    </main>
  );
}
