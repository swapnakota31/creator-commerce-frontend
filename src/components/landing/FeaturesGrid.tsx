"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function FeaturesGrid() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setFeatureIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  const allFeatures = [
    {
      title: "Custom Storefront",
      desc: "Create a beautiful storefront that reflects your style.",
      icon: "🏪",
      bgColor: "bg-[#F5F3FF]",
    },
    {
      title: "Curate & Organize",
      desc: "Add and organize products into collections and lists.",
      icon: "📁",
      bgColor: "bg-[#F5F3FF]",
    },
    {
      title: "Share Everywhere",
      desc: "Share your link across social media, blogs and everywhere.",
      icon: "🔗",
      bgColor: "bg-[#F5F3FF]",
    },
    {
      title: "Track Performance",
      desc: "Understand your audience with powerful insights and analytics.",
      icon: "📈",
      bgColor: "bg-[#F5F3FF]",
    },
    {
      title: "Discover Creators",
      desc: "Find creators and explore their favorite picks.",
      icon: "👤",
      bgColor: "bg-purple-50",
    },
    {
      title: "Explore Curated Picks",
      desc: "Browse handpicked products curated by trusted creators.",
      icon: "🎧",
      bgColor: "bg-purple-50",
    },
    {
      title: "Shop with Confidence",
      desc: "Click through to trusted partner stores to complete your purchase.",
      icon: "🛍️",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section id="features-grid" className="py-12 bg-white">
      <div className="container-shell">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#111827] sm:text-5xl mb-6" style={{ fontFamily: "var(--font-space)" }}>
            Everything you need to <br />
            <span className="text-[#8A2BE2]">create, share and grow</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto font-medium">
            Powerful tools and features designed to help you build your digital presence and connect with your audience.
          </p>
        </div>

        {/* Features Row */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {allFeatures.map((feature, i) => (
            <div key={i} className="flex-none w-[85%] sm:w-[45%] lg:w-[31%] group bg-white rounded-[32px] border border-[#E5E7EB] p-8 transition-all hover:shadow-xl hover:border-purple-200 snap-center">
              <div className={`h-24 w-full ${feature.bgColor} rounded-2xl mb-6 flex items-center justify-center text-3xl group-hover:scale-105 transition-transform overflow-hidden relative border border-[#8A2BE2]/5`}>
                {i === 0 && (
                  <div className="flex flex-col items-center gap-1 w-full px-4">
                    <div className="h-10 w-full bg-white rounded-lg border border-purple-100 flex items-center px-2 gap-2">
                       <div className="h-2 w-2 rounded-full bg-purple-200" />
                       <div className="h-1.5 w-12 bg-purple-50 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-1 w-full">
                      <div className="h-8 bg-white rounded-lg border border-purple-100" />
                      <div className="h-8 bg-white rounded-lg border border-purple-100" />
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className="flex gap-1">
                    <div className="h-10 w-8 bg-white rounded border border-purple-100 shadow-sm transform -rotate-12 translate-x-2" />
                    <div className="h-12 w-10 bg-white rounded-lg border border-purple-200 shadow-md relative z-10 flex items-center justify-center text-xl">📁</div>
                    <div className="h-10 w-8 bg-white rounded border border-purple-100 shadow-sm transform rotate-12 -translate-x-2" />
                  </div>
                )}
                {i === 2 && (
                  <div className="flex flex-col items-center gap-2">
                     <div className="flex gap-2">
                       <div className="h-6 w-6 rounded-full bg-white border border-purple-100 flex items-center justify-center text-[10px]">📸</div>
                       <div className="h-8 w-8 rounded-full bg-white border border-purple-200 flex items-center justify-center text-sm shadow-sm">🔗</div>
                       <div className="h-6 w-6 rounded-full bg-white border border-purple-100 flex items-center justify-center text-[10px]">🐦</div>
                     </div>
                  </div>
                )}
                {i === 3 && (
                  <div className="w-full px-6 flex flex-col gap-1">
                    <div className="h-1 w-12 bg-purple-200 rounded-full" />
                    <div className="h-10 w-full bg-white rounded-lg border border-purple-100 relative overflow-hidden flex items-end px-1 gap-0.5">
                      {[40, 70, 45, 90, 65, 80].map((h, j) => (
                        <div key={j} className="flex-1 bg-purple-500 rounded-t-[2px]" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                )}
                {i === 4 && (
                  <div className="flex -space-x-3">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-sm shadow-sm">👩</div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center text-sm shadow-md relative z-10">👨</div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-sm shadow-sm">👱‍♀️</div>
                  </div>
                )}
                {i === 5 && (
                  <div className="flex gap-2">
                     <div className="h-12 w-12 rounded-xl bg-white border border-purple-100 flex items-center justify-center text-xl shadow-sm">🎧</div>
                     <div className="h-12 w-12 rounded-xl bg-white border border-purple-100 flex items-center justify-center text-xl shadow-sm">🧴</div>
                  </div>
                )}
                {i === 6 && (
                  <div className="relative">
                     <div className="h-14 w-14 rounded-2xl bg-white border border-purple-200 shadow-md flex items-center justify-center text-2xl">🛍️</div>
                     <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] text-white">🔒</div>
                  </div>
                )}
              </div>
              <h4 className="text-lg font-bold text-[#111827] mb-3">{feature.title}</h4>
              <p className="text-sm text-[#6B7280] leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {allFeatures.map((_, i) => (
            <div 
              key={i} 
              className={`h-2.5 transition-all duration-500 rounded-full ${
                featureIndex === i ? 'w-8 bg-[#8A2BE2]' : 'w-2.5 bg-[#E5E7EB]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
