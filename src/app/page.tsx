"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyLinkNest from "@/components/landing/WhyLinkNest";
import BuildStorefrontSection from "@/components/landing/BuildStorefrontSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ImportSection from "@/components/landing/ImportSection";
import AnalyticsDashboardSection from "@/components/landing/AnalyticsDashboardSection";
import Footer from "@/components/landing/Footer";
import StoreSetupForm from "@/components/onboarding/StoreSetupForm";
import LoadingState from "@/components/onboarding/LoadingState";

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
  const [status, setStatus] = useState<"form" | "loading">("form");

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {status === "loading" && <LoadingState />}
      
      <Navbar items={navItems} />
      <HeroSection {...heroData} />
      <HowItWorksSection />
      <WhyLinkNest />
      <BuildStorefrontSection />
      <FeaturesGrid />
      <ImportSection />
      <AnalyticsDashboardSection />
      
      {/* Onboarding Section */}
      <section id="get-started" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-purple-100 to-transparent rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-transparent rounded-full translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

        <div className="container-shell relative z-10 px-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl" style={{ fontFamily: "var(--font-space)" }}>
            Launch Your Storefront in <span className="brand-gradient bg-clip-text text-transparent">Seconds</span>
          </h2>
          <p className="mt-3 text-sm text-[#6B7280] font-medium max-w-md mx-auto mb-10">
            Enter a store name and paste any product link below. Our AI will handle the rest and set up your dashboard automatically.
          </p>

          <div className="w-full">
            <StoreSetupForm onSubmit={() => setStatus("loading")} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}