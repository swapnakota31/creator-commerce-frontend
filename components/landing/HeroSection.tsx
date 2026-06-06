
"use client";

import { useEffect, useState } from "react";

interface HeroSectionProps {
  badgeText: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const backgroundSlides = [
  {
    title: "Storefront dashboard",
    details: ["Live product cards", "Creator profile", "Customization tools"],
  },
  {
    title: "Creator commerce page",
    details: ["Digital products", "Courses & memberships", "Affiliate offers"],
  },
  {
    title: "AI analytics suite",
    details: ["Audience growth", "Engagement metrics", "Conversion charts"],
  },
];

export default function HeroSection({
  badgeText,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % backgroundSlides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden bg-white py-12 md:py-20">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(180,255,57,0.14),transparent_30%),radial-gradient(circle_at_top_right,_rgba(107,114,128,0.06),transparent_30%)] sm:h-96" />
      
      {/* Carousel Background (Hidden on very small screens to improve focus) */}
      <div className="absolute inset-0 -z-10 hidden overflow-hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
        <div className="absolute inset-0 flex h-full w-[300%] transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {backgroundSlides.map((slide) => (
            <div key={slide.title} className="relative min-w-full px-4 sm:px-8 lg:px-12">
              <div className="absolute inset-y-0 left-1/2 h-full w-[92%] -translate-x-1/2 rounded-[3rem] border border-slate-200/60 bg-white/20 shadow-[0_35px_80px_rgba(15,23,42,0.08)]" />
              <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between rounded-[2.5rem] border border-slate-200/60 bg-white/30 p-5 shadow-[0_35px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-3 rounded-[2rem] bg-white/50 px-4 py-3 text-sm font-semibold text-[#111827] shadow-sm">
                  <span>{slide.title}</span>
                  <span className="rounded-full bg-[#B4FF39]/30 px-3 py-1 text-xs text-[#1F2937]">Creator view</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center rounded-full border border-[#B4FF39]/30 bg-[#B4FF39]/10 px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm">
              ⚡ {badgeText}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
              Build Your Creator Storefront in Minutes
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-8">
              Paste your product links once and instantly create a premium storefront that helps you organize, share and grow your creator business.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={primaryCta.href}
                className="inline-flex w-fit items-center justify-center rounded-full border border-[#D1D5DB] bg-[#B4FF39] px-6 py-3 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-8 sm:py-3 md:text-base"
              >
                {primaryCta.label}
              </a>
            </div>

            <div className="mt-8 w-full max-w-md rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 lg:max-w-none">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Preview</p>
              <p className="mt-2 text-lg font-medium text-[#111827]">🔗 yourname.linkshells.ai</p>
              <p className="mt-1 text-sm text-[#6B7280]">Share this single link anywhere including YouTube, Instagram, TikTok, WhatsApp and other platforms.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">AI Store Builder</h2>
              <p className="mt-3 text-sm text-[#6B7280]">Paste your product links and instantly generate a professional creator storefront.</p>
              <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your product links"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#111827] placeholder:text-slate-400 shadow-sm outline-none transition-all duration-300 focus:border-[#B4FF39] focus:ring-2 focus:ring-[#B4FF39]/20"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#B4FF39] px-5 py-3 text-sm font-semibold text-[#111827] transition-all duration-300 hover:bg-[#daff72] hover:-translate-y-0.5"
                >
                  Generate Store
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

