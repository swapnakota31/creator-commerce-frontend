"use client";

import { useState } from "react";

function BrandCard({ brand }: { brand: any }) {
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={`flex-none flex h-28 w-52 items-center justify-center rounded-[24px] border border-white/60 bg-white backdrop-blur-xl p-6 shadow-[0_3px_16px_rgba(0,0,0,0.03),0_10px_32px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_16px_64px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.01] ${brand.border} group overflow-hidden relative`}>
      {/* Dynamic Brand Glow - Much more vibrant */}
      <div className={`absolute -inset-4 ${brand.glow} opacity-0 group-hover:opacity-25 blur-[32px] transition-all duration-700 pointer-events-none`} />
      
      {/* Internal Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center justify-center w-full h-full relative z-10">
        {/* The Image - Sharp, High-Contrast, and Pop */}
        {imgStatus !== 'error' && (
          <img 
            src={brand.logo} 
            alt={brand.name} 
            onLoad={() => setImgStatus('loaded')}
            onError={() => setImgStatus('error')}
            className={`max-w-[80%] max-h-[70%] object-contain transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.07)] ${imgStatus === 'loaded' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}
          />
        )}

        {/* Premium Fallback - Sharp Typography and Vibrant Colors */}
        {(imgStatus === 'error' || imgStatus === 'loading') && (
          <div className={`flex flex-col items-center justify-center text-center px-3 transition-all duration-500 opacity-100`}>
            <span className={`text-xl sm:text-2xl font-[900] tracking-tighter ${brand.color} leading-none transition-all duration-500 group-hover:scale-105 drop-shadow-[0_3px_10px_rgba(0,0,0,0.1)]`}>
              {brand.name}
            </span>
            <div className={`h-1.5 w-12 rounded-full bg-current ${brand.color} opacity-100 mt-3 shadow-[0_3px_12px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:w-20 group-hover:opacity-100`} />
          </div>
        )}
      </div>
      
      {/* 3D Edge Lighting */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      <div className="absolute inset-0 border-[1px] border-white/40 rounded-[24px] pointer-events-none" />
    </div>
  );
}

export default function ImportSection() {
  const brands = [
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", 
      color: "text-[#FF9900]", 
      glow: "bg-[#FF9900]", 
      border: "hover:border-[#FF9900]/60" 
    },
    { 
      name: "Flipkart", 
      logo: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg", 
      color: "text-[#2874F0]", 
      glow: "bg-[#2874F0]", 
      border: "hover:border-[#2874F0]/60" 
    },
    { 
      name: "Myntra", 
      logo: "https://www.logo.wine/a/logo/Myntra/Myntra-Logo.wine.svg", 
      color: "text-[#FF3F6C]", 
      glow: "bg-[#FF3F6C]", 
      border: "hover:border-[#FF3F6C]/70" 
    },
    { 
      name: "Meesho", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Meesho_Logo_Full.png/640px-Meesho_Logo_Full.png", 
      color: "text-[#F43397]", 
      glow: "bg-[#F43397]", 
      border: "hover:border-[#F43397]/70" 
    },
    { 
      name: "Nykaa", 
      logo: "https://www.logo.wine/a/logo/Nykaa/Nykaa-Logo.wine.svg", 
      color: "text-[#E80071]", 
      glow: "bg-[#E80071]", 
      border: "hover:border-[#E80071]/70" 
    },
    { 
      name: "Shopify", 
      logo: "https://www.logo.wine/a/logo/Shopify/Shopify-Logo.wine.svg", 
      color: "text-[#95BF47]", 
      glow: "bg-[#95BF47]", 
      border: "hover:border-[#95BF47]/70" 
    },
    { 
      name: "Etsy", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg", 
      color: "text-[#F1641E]", 
      glow: "bg-[#F1641E]", 
      border: "hover:border-[#F1641E]/60" 
    },
    { 
      name: "eBay", 
      logo: "https://www.logo.wine/a/logo/EBay/EBay-Logo.wine.svg", 
      color: "text-[#E53238]", 
      glow: "bg-gradient-to-br from-[#E53238] via-[#0064D2] to-[#F5AF02]", 
      border: "hover:border-[#0064D2]/70" 
    },
    { 
      name: "Walmart", 
      logo: "https://www.logo.wine/a/logo/Walmart/Walmart-Logo.wine.svg", 
      color: "text-[#0071CE]", 
      glow: "bg-[#0071CE]", 
      border: "hover:border-[#0071CE]/70" 
    },
    { 
      name: "Tata Cliq", 
      logo: "https://www.vectorlogo.zone/logos/tata_cliq/tata_cliq-icon.svg", 
      color: "text-[#DA1C5C]", 
      glow: "bg-[#DA1C5C]", 
      border: "hover:border-[#DA1C5C]/60" 
    },
  ];

  // Double the brands for seamless loop
  const scrollBrands = [...brands, ...brands];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 bg-white overflow-hidden border-y border-slate-100/50">
      <div className="container-shell w-full">
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl font-black text-[#111827] sm:text-3xl tracking-tight mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Import from Any Store, <span className="text-[#7B2CFF]">Build Any Cart.</span>
          </h2>
          <p className="text-sm text-[#6B7280] font-medium max-w-2xl mx-auto">
            We support platforms and tools for seamless affiliate integration.
          </p>
        </div>

        <div className="relative w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10" />

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

          <div className="flex gap-5 animate-scroll-brand whitespace-nowrap py-3">
            {scrollBrands.map((brand, i) => (
              <BrandCard key={i} brand={brand} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 border border-[#F3F4F6] shadow-sm hover:shadow-md transition-shadow cursor-default group">
             <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse" />
             <span className="text-sm font-black text-[#111827] tracking-tight">
               <span className="text-[#7B2CFF] group-hover:underline">+more platforms</span>
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}
