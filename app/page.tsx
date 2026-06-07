import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Need of LinkShelf", href: "#need" },
  { label: "Why creators need", href: "#why-creators" },
  { label: "How to become an affiliate", href: "#affiliate" },
];

const heroData = {
  badgeText: "AI-Powered Creator Commerce",
  headline: "Turn Any Product Link Into A Powerful Storefront",
  subheadline:
    "Transform Amazon, Flipkart, and Myntra product links into beautiful creator storefronts. Organize collections, share recommendations, and build your creator brand with AI.",
  primaryCta: { label: "Get Started", href: "/auth" },
  secondaryCta: { label: "Explore Creators", href: "#creators" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8FC] text-[#111827]">
      <Navbar items={navItems} />
      <HeroSection {...heroData} />
    </main>
  );
}
