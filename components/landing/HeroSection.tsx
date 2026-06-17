import Image from "next/image";

interface HeroSectionProps {
  badgeText: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export default function HeroSection({ badgeText, headline, subheadline, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-10 overflow-hidden bg-white">
      <div className="container-shell px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col items-start text-left relative z-10">
            {/* Badge Pill */}
            <p className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold text-[#7B2CFF] bg-[#F5F3FF] border border-[#7B2CFF]/10">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#7B2CFF]" />
              {badgeText}
            </p>

            {/* Headline */}
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] text-[#111827] tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#6B7280] font-medium">
              {subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href={primaryCta.href} className="inline-flex items-center justify-center rounded-2xl bg-[#7B2CFF] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#7B2CFF]/20 transition-all hover:scale-[1.02] hover:brightness-110">
                {primaryCta.label}
              </a>
              <a href={secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#111827] transition-all hover:border-[#7B2CFF] hover:bg-slate-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                {secondaryCta.label}
              </a>
            </div>

            {/* Desktop Only: Bottom Feature Badges */}
            <div className="hidden lg:flex mt-8 items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-xs font-bold text-[#6B7280]">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-xs font-bold text-[#6B7280]">Free Forever Plan</span>
              </div>
            </div>
          </div>

          {/* Right Content Area: 3D Mockup with Floating Analytics */}
          <div className="relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[1.1/1] max-w-[480px] lg:max-w-none lg:w-[110%] lg:-mr-[10%] group">
              
              {/* Main 3D Image with Natural Lavender Masking */}
               <div className="relative w-full h-full overflow-hidden rounded-[40px]">
                 <Image 
                   src="/images/hero-image2.png" 
                   alt="LinkNest 3D Mockup" 
                   fill
                   priority
                   sizes="(max-width: 1024px) 480px, 110vw"
                   className="object-contain transition-transform duration-1000 group-hover:scale-105"
                 />
                 
                 {/* Multi-layered natural lavender masks for edges */}
                 {/* Left side fade */}
                 <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F3FF] to-transparent z-10" />
                 {/* Right side fade */}
                 <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F3FF] to-transparent z-10" />
                 {/* Top and Bottom soft fades */}
                 <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F5F3FF] to-transparent z-10" />
                 <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F5F3FF] to-transparent z-10" />
                 
                 {/* Deep vignette shadow for natural depth */}
                 <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(245,243,255,0.8)] pointer-events-none z-10" />
               </div>

               {/* Floating Glassmorphism Analytics Cards */}
               {/* Total Products Card (Replaced Total Sales) */}
                <div className="absolute top-[10%] -left-[5%] sm:left-[5%] bg-white border border-gray-100 p-2.5 sm:p-3 rounded-xl shadow-[0_15px_30px_rgba(123,44,255,0.15)] animate-float-slow z-20">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-600 shadow-sm border border-orange-500/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 8l-9-4-9 4v8l9 4 9-4V8z"/><path d="M3 8l9 4 9-4"/><path d="M12 20V12"/></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Products</p>
                      <p className="text-xs sm:text-sm font-black text-[#111827] tracking-tight">125</p>
                    </div>
                  </div>
                </div>

              {/* Orders Card */}
              <div className="absolute top-[40%] -right-[5%] bg-white border border-gray-100 p-2.5 sm:p-3 rounded-xl shadow-[0_15px_30px_rgba(123,44,255,0.15)] animate-float-medium z-20">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-blue-500/15 flex items-center justify-center text-blue-600 shadow-sm border border-blue-500/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Orders</p>
                    <p className="text-xs sm:text-sm font-black text-[#111827] tracking-tight">156</p>
                  </div>
                </div>
              </div>

              {/* Clicks Card */}
              <div className="absolute bottom-[15%] left-[15%] bg-white border border-gray-100 p-2.5 sm:p-3 rounded-xl shadow-[0_15px_30px_rgba(123,44,255,0.15)] animate-float-fast z-20">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-purple-500/15 flex items-center justify-center text-purple-600 shadow-sm border border-purple-500/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Clicks</p>
                    <p className="text-xs sm:text-sm font-black text-[#111827] tracking-tight">4.8K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Only: Bottom Feature Badges (Styled as Cards) */}
          <div className="lg:hidden mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="flex items-center gap-2.5 bg-slate-50/50 border border-slate-100 p-3.5 rounded-2xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#111827]">No Credit Card</span>
                <span className="text-[10px] font-bold text-slate-400">Required</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50/50 border border-slate-100 p-3.5 rounded-2xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-[#7B2CFF]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#111827]">Free Forever</span>
                <span className="text-[10px] font-bold text-slate-400">Plan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

