"use client";

import { useDragScroll } from "@/hooks/useDragScroll";

export default function WhyLinkNextSec() {
  const { scrollRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, isDragging } = useDragScroll();

  const features = [
    {
      title: "Product Pages",
      desc: "SEO-optimized pages in seconds.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop",
      icon: "📄",
    },
    {
      title: "Collections",
      desc: "Group products into smart lists.",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
      icon: "📚",
    },
    {
      title: "Lookbooks",
      desc: "Showcase outfits and complete looks.",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
      icon: "👕",
    },
    {
      title: "Bio Link Store",
      desc: "All your links in one smart page.",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=800&fit=crop",
      icon: "🔗",
    },
    {
      title: "Creator Profiles",
      desc: "Build your brand and share your story.",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=800&fit=crop",
      icon: "👤",
    },
    {
      title: "Smart Search",
      desc: "Find products and creators instantly.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      icon: "🔍",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#F8F8FC]">
      <div className="container-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl" style={{ fontFamily: "var(--font-space)" }}>
              Powerful Features Provided <br /> by <span className="text-orange-500">LinkNest</span>
            </h2>
            <p className="mt-4 text-[#6B7280] max-w-lg text-sm">
              Everything you need to turn your product recommendations into a high-converting affiliate destination.
            </p>
          </div>

          <div className="flex gap-3 mt-6 md:mt-0">
            <button 
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#111827] transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#111827] transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth snap-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        >
          {features.map((feature, i) => (
            <div key={i} className="flex-none w-60 sm:w-64 md:w-72 group snap-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[#E5E7EB] shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1.5">
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md text-base">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1.5">{feature.title}</h3>
                  <p className="text-[11px] opacity-80 leading-relaxed line-clamp-2">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



