"use client";

import { useState, useEffect } from "react";

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      title: "Customizable Storefront",
      desc: "Design your store to match your brand with our intuitive builder. Tune colors, layouts, and banners without any code.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
    },
    {
      id: "02",
      title: "Smart Analytics",
      desc: "Get deep insights into what performs best. Track clicks, conversions, and audience engagement with real-time data.",
      img: "https://images.unsplash.com/photo-1551288049-bbda38a5647e?w=800&h=600&fit=crop",
    },
    {
      id: "03",
      title: "Lead Generation",
      desc: "Grow your email list and audience with custom forms integrated directly into your storefront.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      id: "04",
      title: "Multi-Platform Sync",
      desc: "Import and sync products from Amazon, Flipkart, Myntra, and 100+ other platforms instantly.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      id: "05",
      title: "Creator Success Team",
      desc: "Get strategic support from our team to create & monetize content effectively, with personalized insights and tailored strategies.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    },
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % features.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-24 bg-[#fdf8f4]">
      <div className="container-shell">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            LinkNest provides all <br /> features in one place
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Card */}
          <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden bg-white shadow-xl transition-all duration-700 ease-in-out">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeTab ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <div className="relative h-64">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === activeTab
                      ? "translate-y-0 opacity-100"
                      : index < activeTab
                      ? "-translate-y-8 opacity-0"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#111827] text-sm font-bold mb-8">
                    {feature.id}
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#111827] mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#6B7280] leading-relaxed max-w-md">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-16 flex items-center gap-12">
              {/* Progress Dots */}
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      index === activeTab ? "w-8 bg-orange-500" : "w-1.5 bg-[#E5E7EB]"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={prevTab}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#111827] transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={nextTab}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#111827] transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sign Up Bar */}

      <div className="container-shell mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-full bg-white/50 border border-[#E5E7EB] px-8 py-3 backdrop-blur-sm">
          <p className="text-sm font-bold text-[#111827]">
            Become a <span className="text-orange-600">LinkShelf Creator</span> today
          </p>
          <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
            SIGN UP
            <div className="flex gap-1">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M12 18h.01"/></svg>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}



