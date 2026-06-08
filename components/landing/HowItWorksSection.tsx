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
    <section id="how-it-works" className="py-12 bg-white overflow-hidden">
      <div className="container-shell">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl mb-4" style={{ fontFamily: "var(--font-space)" }}>
            How it <span className="text-[#7B2CFF]">Works</span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto font-medium">
            Setting up your professional storefront is as easy as 1-2-3-4. Start monetizing your content in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Side Navigation Arrows */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#111827]/10 text-[#111827] backdrop-blur-sm transition-all hover:bg-[#111827]/20 hidden lg:flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#111827]/10 text-[#111827] backdrop-blur-sm transition-all hover:bg-[#111827]/20 hidden lg:flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <div 
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className={`flex items-center gap-6 overflow-x-auto pb-12 no-scrollbar scroll-smooth snap-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
          >


            {steps.map((step, i) => (
              <div key={step.id} className="flex flex-none items-center snap-center px-4 lg:px-0">
                {/* Step Card */}
                <div className="w-[280px] sm:w-[300px] rounded-[40px] border border-[#E5E7EB] bg-white p-8 transition-all hover:shadow-2xl hover:border-[#E5E7EB] group">
                  <div className="relative mb-8">
                    <div className={`absolute -top-4 -left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full ${step.color} text-white text-xs font-bold shadow-lg`}>
                      {step.id}
                    </div>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 flex items-center justify-center relative">
                       {step.id === "04" ? (
                         <SocialEcosystem />
                       ) : (
                         <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       )}
                       
                       {/* Simulated URL Bar for Step 01 */}
                       {step.id === "01" && (
                         <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-2.5 border border-white shadow-xl animate-float-slow">
                           <div className="flex items-center gap-2">
                             <div className="flex-1 h-6 bg-slate-100 rounded-lg border border-slate-200 flex items-center px-2 gap-2 overflow-hidden">
                               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400 flex-none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                               <span className="text-[9px] font-bold text-[#7B2CFF] truncate">https://amazon.in/dp/B07WHSWGSV...</span>
                             </div>
                             <div className="h-6 w-12 bg-[#7B2CFF] rounded-lg flex items-center justify-center text-[8px] font-black text-white shadow-lg shadow-purple-500/20">
                               PASTE
                             </div>
                           </div>
                         </div>
                       )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#111827] mb-4">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Connector Arrow (Except last item) */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center px-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E5E7EB] shadow-lg transition-transform hover:scale-110 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={step.iconColor}>
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

