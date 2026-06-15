"use client";

import { useState, useRef, useEffect } from "react";

const features = [
  {
    id: "01",
    title: "Bio Link Store",
    desc: "Your entire storefront in a single link. Beautiful, fast, and conversion-optimized.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Smart Collections",
    desc: "Organize products into curated sets that tell a story and drive sales.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Creator Profiles",
    desc: "Express your identity with professional profile pages built for creators.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Analytics Dashboard",
    desc: "Track every click and conversion with high-precision real-time analytics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M18 17l-6-4-2 2-4-4" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Micro Creator Friendly",
    desc: "Tools tailored specifically for growing accounts to maximize engagement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Smart Search",
    desc: "Help your audience find exactly what they need in milliseconds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function EverythingYouNeedSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= features.length) return;
    setActiveIndex(index);
  };

  const next = () => scrollToIndex((activeIndex + 1) % features.length);
  const prev = () => scrollToIndex((activeIndex - 1 + features.length) % features.length);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="features-grid" className="py-12 bg-white overflow-hidden relative">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#E9D5FF]/30 to-[#C084FC]/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#C084FC]/15 to-[#A855F7]/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#F5F3FF]/20 to-transparent blur-[150px] rounded-full" />
      </div>

      <div className="container-shell relative z-10">
        {/* Header - Reduced margin bottom */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-[1.1] mb-3" style={{ fontFamily: "var(--font-space)" }}>
            Features You'll Love
          </h2>
          <p className="text-base text-[#6B7280] font-medium leading-relaxed px-4">
            Create stunning storefronts, organize products, track performance, and grow with confidence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 sm:px-10">
          {/* Navigation Arrows - Smaller and more refined */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-[#E9D5FF] text-[#A855F7] shadow-sm transition-all hover:scale-110 hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-[#E9D5FF] text-[#A855F7] shadow-sm transition-all hover:scale-110 hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Cards Wrapper - Reduced padding and min-height */}
          <div className="flex justify-center items-center gap-4 py-6 min-h-[380px]">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + features.length) % features.length;
              const isNext = index === (activeIndex + 1) % features.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible && index !== activeIndex) return null;

              return (
                <div 
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    flex-none w-[260px] sm:w-[300px] rounded-[32px] p-7 border transition-all duration-700 ease-out relative cursor-pointer
                    ${isActive 
                      ? "bg-white border-[#C084FC]/30 shadow-[0_15px_40px_rgba(168,85,247,0.15)] scale-105 z-20" 
                      : "bg-white/60 border-[#E9D5FF]/40 shadow-none scale-90 opacity-30 blur-[0.3px] z-10 hidden sm:block hover:opacity-50 hover:blur-0"
                    }
                  `}
                >
                  {/* Sparkle Elements (Active Only) - Smaller */}
                  {isActive && (
                    <>
                      <div className="absolute top-8 right-8 animate-pulse text-[#C084FC] text-[10px]">✦</div>
                      <div className="absolute bottom-16 left-6 animate-pulse delay-700 text-[#C084FC]/60 text-[10px]">✦</div>
                    </>
                  )}

                  {/* Icon Container - More compact */}
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative
                    ${isActive ? "bg-gradient-to-br from-[#F5F3FF] to-[#E9D5FF] text-[#A855F7]" : "bg-slate-50 text-slate-300"}
                  `}>
                    <div className={`absolute inset-0 rounded-2xl blur-lg opacity-30 ${isActive ? "bg-[#A855F7]" : ""}`} />
                    <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className={`text-xl font-black mb-2.5 ${isActive ? "text-[#111827]" : "text-slate-400"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm font-medium leading-snug ${isActive ? "text-[#6B7280]" : "text-slate-300"}`}>
                    {feature.desc}
                  </p>

                  {/* Feature Number Badge - More subtle */}
                  <div className={`
                    absolute bottom-7 right-7 text-[9px] font-black px-2.5 py-0.5 rounded-full border
                    ${isActive ? "bg-[#F5F3FF] border-[#E9D5FF] text-[#A855F7]" : "bg-slate-50 border-slate-100 text-slate-300"}
                  `}>
                    #{feature.id}
                  </div>
                  
                  {/* Active Card Glow */}
                  {isActive && (
                    <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-[#A855F7]/15 via-transparent to-[#C084FC]/15 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators - Closer to the carousel */}
        <div className="flex justify-center items-center gap-2 mt-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                h-2 rounded-full transition-all duration-500
                ${activeIndex === index ? "w-8 bg-[#A855F7]" : "w-2 bg-[#E9D5FF] hover:bg-[#C084FC]/50"}
              `}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
