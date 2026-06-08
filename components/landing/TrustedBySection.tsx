"use client";

import { useState } from "react";

function PlatformCard({ platform }: { platform: any }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="group relative flex h-24 w-40 sm:w-44 items-center justify-center rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {!hasError ? (
          <img
            src={platform.logo}
            alt={platform.name}
            onError={() => setHasError(true)}
            className={`${platform.width} h-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 group-hover:scale-110`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-black text-slate-400 group-hover:text-[#7B2CFF] transition-all duration-500 uppercase tracking-tighter drop-shadow-sm group-hover:scale-110">
              {platform.name}
            </span>
            <div className="h-1 w-6 rounded-full bg-[#7B2CFF] opacity-0 group-hover:opacity-20 transition-all duration-500 mt-1" />
          </div>
        )}
      </div>
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#7B2CFF]/10 transition-colors pointer-events-none" />
      
      {/* Dynamic background for fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </div>
  );
}

export default function TrustedBySection() {
  const platforms = [
    { 
      name: "Flipkart", 
      logo: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg",
      width: "w-28"
    },
    { 
      name: "Myntra", 
      logo: "https://www.logo.wine/a/logo/Myntra/Myntra-Logo.wine.svg",
      width: "w-28"
    },
    { 
      name: "Meesho", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png",
      width: "w-28"
    },
    { 
      name: "Nykaa", 
      logo: "https://www.logo.wine/a/logo/Nykaa/Nykaa-Logo.wine.svg",
      width: "w-24"
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      width: "w-28"
    },
    { 
      name: "Etsy", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg",
      width: "w-20"
    },
    { 
      name: "eBay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      width: "w-20"
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FB]/50">
      <div className="container-shell">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted by Leading E-commerce Platforms</h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          {platforms.map((platform, i) => (
            <PlatformCard key={i} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
