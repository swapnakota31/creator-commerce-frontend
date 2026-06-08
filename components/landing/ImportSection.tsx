"use client";

import { useState } from "react";

function BrandCard({ brand }: { brand: any }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex-none flex h-24 w-48 items-center justify-center rounded-[24px] border border-[#F3F4F6] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] ${brand.border} group overflow-hidden relative`}>
      <div className="flex items-center justify-center w-full h-full relative z-10">
        {!hasError ? (
          <img 
            src={brand.logo} 
            alt={brand.name} 
            onError={() => setHasError(true)}
            className="max-w-[85%] max-h-[65%] object-contain transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className={`text-2xl font-black tracking-tighter ${brand.color} transition-all duration-500 group-hover:scale-110 uppercase drop-shadow-sm`}>
              {brand.name}
            </span>
            <div className={`h-1.5 w-8 rounded-full bg-current ${brand.color} opacity-20 mt-1`} />
          </div>
        )}
      </div>
      
      {/* Subtle background glow on hover */}
      <div className={`absolute inset-0 ${brand.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      {/* Decorative gradient for fallback state */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 pointer-events-none" />
      )}
    </div>
  );
}

export default function ImportSection() {
  const brands = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", color: "text-[#FF9900]", bg: "bg-[#FF9900]/5", border: "hover:border-[#FF9900]/30" },
    { name: "Flipkart", logo: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg", color: "text-[#2874F0]", bg: "bg-[#2874F0]/5", border: "hover:border-[#2874F0]/30" },
    { name: "Myntra", logo: "https://www.logo.wine/a/logo/Myntra/Myntra-Logo.wine.svg", color: "text-[#FF3F6C]", bg: "bg-[#FF3F6C]/5", border: "hover:border-[#FF3F6C]/30" },
    { name: "Meesho", logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png", color: "text-[#F43397]", bg: "bg-[#F43397]/5", border: "hover:border-[#F43397]/30" },
    { name: "Nykaa", logo: "https://www.logo.wine/a/logo/Nykaa/Nykaa-Logo.wine.svg", color: "text-[#E80071]", bg: "bg-[#E80071]/5", border: "hover:border-[#E80071]/30" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", color: "text-[#95BF47]", bg: "bg-[#95BF47]/5", border: "hover:border-[#95BF47]/30" },
    { name: "Etsy", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg", color: "text-[#F1641E]", bg: "bg-[#F1641E]/5", border: "hover:border-[#F1641E]/30" },
    { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", color: "text-[#E53238]", bg: "bg-[#E53238]/5", border: "hover:border-[#E53238]/30" },
    { name: "Walmart", logo: "https://www.logo.wine/a/logo/Walmart/Walmart-Logo.wine.svg", color: "text-[#0071CE]", bg: "bg-[#0071CE]/5", border: "hover:border-[#0071CE]/30" },
    { name: "Tata Cliq", logo: "https://www.vectorlogo.zone/logos/tata_cliq/tata_cliq-icon.svg", color: "text-[#DA1C5C]", bg: "bg-[#DA1C5C]/5", border: "hover:border-[#DA1C5C]/30" },
  ];

  // Double the brands for seamless loop
  const scrollBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-shell text-center mb-10 px-4">
        <h2 className="text-3xl font-black text-[#111827] sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ fontFamily: "var(--font-space)" }}>
          Import from Any Store, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#7B2CFF]">Build Any Cart.</span>
        </h2>
        <p className="text-lg text-[#6B7280] font-medium max-w-2xl mx-auto">
          We support platforms and tools for seamless affiliate integration.
        </p>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <style jsx>{`
          @keyframes scroll-brand {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll-brand {
            animation: scroll-brand 40s linear infinite;
          }
          .animate-scroll-brand:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex gap-6 animate-scroll-brand whitespace-nowrap py-4">
          {scrollBrands.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 border border-[#F3F4F6] shadow-sm hover:shadow-md transition-shadow cursor-default group">
           <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse" />
           <span className="text-sm font-black text-[#111827] tracking-tight">
             <span className="text-[#7B2CFF] group-hover:underline">+more platforms</span>
           </span>
        </div>
      </div>
    </section>
  );
}
