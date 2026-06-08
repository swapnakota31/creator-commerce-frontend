"use client";

import { useState, useRef, useEffect } from "react";

export default function BuildStorefrontSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  const templates = [
    {
      title: "Podcast Store",
      desc: "Perfect for podcasters and their audience",
      color: "bg-[#00B67A]",
      tag: "Created Template",
      items: [
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop"
      ],
    },
    {
      title: "Fashion Store",
      desc: "Ideal for fashion influencers, stylists & clothing brands",
      color: "bg-[#2D7CF3]",
      tag: "Created Template",
      items: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=200&fit=crop"
      ],
    },
    {
      title: "E-commerce Store",
      desc: "Sell products directly from your page",
      color: "bg-[#F32D8F]",
      tag: "Created Template",
      items: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop"
      ],
    },
    {
      title: "Deals & Offers Store",
      desc: "Top deals, discounts & exclusive offers",
      color: "bg-orange-500",
      tag: "Created Template",
      items: [
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop"
      ],
    },
    {
      title: "Brand Store",
      desc: "Showcase your brand, products & collections",
      color: "bg-sky-500",
      tag: "Created Template",
      items: [
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop"
      ],
    },
    {
      title: "Custom Store",
      desc: "Build anything unique with custom blocks",
      color: "bg-slate-500",
      tag: "Created Template",
      items: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop"
      ],
    },
  ];

  return (
    <section id="templates" className="py-12">
      <div className="container-shell text-center">
        <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl" style={{ fontFamily: "var(--font-space)" }}>
          Build Any Kind of Storefront
        </h2>
        <p className="mt-4 text-[#6B7280]">Pick the template to build your own link page</p>

        <div 
          ref={scrollRef}
          className="mt-16 flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory px-4"
        >
          {templates.map((template, i) => (
            <div key={i} className="flex-none w-[300px] sm:w-[340px] lg:w-[380px] flex flex-col rounded-[40px] border border-slate-100 bg-white p-8 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 snap-center">
              <div className="text-left mb-6">
                <h3 className="text-lg font-black text-[#111827] mb-1">{template.title}</h3>
                <p className="text-[11px] text-slate-400 font-medium leading-tight">{template.desc}</p>
              </div>
              <button className={`w-full rounded-full py-2.5 text-[11px] font-black text-white shadow-lg transition-transform active:scale-95 ${template.color}`}>
                {template.tag}
              </button>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {template.items.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-sm">
                    <img src={img} alt="Product" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-1.5">
                {[1, 2, 3].map((star) => (
                  <span key={star} className="text-[10px] text-orange-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {templates.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === i ? "w-6 bg-[#8A2BE2]" : "w-2 bg-[#E5E7EB]"
              }`}
            />
          ))}
        </div>

        <button className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[#8A2BE2] hover:underline">
          Explore All Templates
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}

