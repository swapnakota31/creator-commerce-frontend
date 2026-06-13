"use client";

import { useDragScroll } from "@/hooks/useDragScroll";
import SocialEcosystem from "./SocialEcosystem";

export default function HowItWorksSection() {
  const { scrollRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, isDragging } = useDragScroll();

  const steps = [
    {
      id: "01",
      title: "Paste Product URL",
      desc: "Copy any product link from Amazon, Flipkart, Myntra or 50+ platforms and paste it into LinkNest.",
      color: "bg-[#7B2CFF]",
      iconColor: "text-[#7B2CFF]",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "AI Extracts Details",
      desc: "Our AI instantly pulls the product name, images, description, price, ratings and specifications.",
      color: "bg-[#10B981]",
      iconColor: "text-[#10B981]",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      id: "03",
      title: "Publish To Storefront",
      desc: "Review, edit if needed, and publish. Your product page is live and SEO-indexed in seconds.",
      color: "bg-[#F59E0B]",
      iconColor: "text-[#F59E0B]",
      img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=800&q=80",
    },
    {
      id: "04",
      title: "Share Everywhere",
      desc: "Share your storefront link in bio, stories, YouTube descriptions, or wherever your audience is.",
      color: "bg-[#3B82F6]",
      iconColor: "text-[#3B82F6]",
      img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
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
    <section id="how-it-works" className="min-h-screen flex items-center py-10 bg-white overflow-hidden">
      <div className="container-shell">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-[#111827] sm:text-3xl mb-3" style={{ fontFamily: "var(--font-space)" }}>
            How it <span className="text-[#7B2CFF]">Works</span>
          </h2>
          <p className="text-sm text-[#6B7280] max-w-2xl mx-auto font-medium">
            Setting up your professional storefront is as easy as 1-2-3-4. Start monetizing your content in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Side Navigation Arrows */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#111827]/10 text-[#111827] backdrop-blur-sm transition-all hover:bg-[#111827]/20 hidden lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#111827]/10 text-[#111827] backdrop-blur-sm transition-all hover:bg-[#111827]/20 hidden lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <div 
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className={`flex items-center gap-4 overflow-x-auto pb-8 no-scrollbar scroll-smooth snap-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
          >


            {steps.map((step, i) => (
              <div key={step.id} className="flex flex-none items-center snap-center px-4 lg:px-0">
                {/* Step Card */}
                <div className="w-[240px] sm:w-[270px] rounded-[30px] border border-[#E5E7EB] bg-white p-5 transition-all hover:shadow-xl hover:border-[#E5E7EB] group">
                  <div className="relative mb-5">
                    <div className={`absolute -top-3 -left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full ${step.color} text-white text-xs font-bold shadow-md`}>
                      {step.id}
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center relative">
                       {step.id === "04" ? (
                         <SocialEcosystem />
                       ) : (
                         <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       )}
                       
                       {/* Simulated URL Bar for Step 01 */}
                       {step.id === "01" && (
                         <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md rounded-lg p-2 border border-white shadow-md animate-float-slow">
                           <div className="flex items-center gap-2">
                             <div className="flex-1 h-5 bg-slate-100 rounded-md border border-slate-200 flex items-center px-1.5 gap-1.5 overflow-hidden">
                               <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400 flex-none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                               <span className="text-[8px] font-bold text-[#7B2CFF] truncate">https://amazon.in/dp/B07WHSWGSV...</span>
                             </div>
                             <div className="h-5 w-10 bg-[#7B2CFF] rounded-md flex items-center justify-center text-[7px] font-black text-white shadow-md shadow-purple-500/20">
                               PASTE
                             </div>
                           </div>
                         </div>
                       )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#111827] mb-2.5">{step.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Connector Arrow (Except last item) */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center px-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#E5E7EB] shadow-md transition-transform hover:scale-110 cursor-pointer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={step.iconColor}>
                        <path d="M5 12h14m-7-7 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

