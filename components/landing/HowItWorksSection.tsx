"use client";

import { useDragScroll } from "@/hooks/useDragScroll";
import SocialEcosystem from "./SocialEcosystem";

export default function HowItWorksSection() {
  const { scrollRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, isDragging } = useDragScroll();

  const airpodsImg = "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=100";

  const steps = [
    {
      id: "01",
      title: "Paste Product URL",
      desc: "Copy any product link from Amazon, Flipkart, Myntra or 50+ platforms and paste it into LinkNest.",
      color: "bg-[#7B2CFF]",
      iconColor: "text-[#7B2CFF]",
      img: airpodsImg,
    },
    {
      id: "02",
      title: "AI Extracts Details",
      desc: "Our AI instantly pulls the product name, images, description, price, ratings and specifications.",
      color: "bg-[#10B981]",
      iconColor: "text-[#10B981]",
      img: airpodsImg,
    },
    {
      id: "03",
      title: "Publish To Storefront",
      desc: "Review, edit if needed, and publish. Your product page is live and SEO-indexed in seconds.",
      color: "bg-[#F59E0B]",
      iconColor: "text-[#F59E0B]",
      img: airpodsImg,
    },
    {
      id: "04",
      title: "Share Everywhere",
      desc: "Share your storefront link in bio, stories, YouTube descriptions, blogs, and with your audience.",
      color: "bg-[#3B82F6]",
      iconColor: "text-[#3B82F6]",
      img: "",
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
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F3FF] text-[#111827] transition-all hover:bg-[#E9D5FF] hidden lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F3FF] text-[#111827] transition-all hover:bg-[#E9D5FF] hidden lg:flex"
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
                       
                       {/* Step 01: URL Bar */}
                       {step.id === "01" && (
                         <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl p-3 border border-gray-100 shadow-lg">
                           <div className="flex items-center gap-2">
                             <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 px-3 py-1.5 overflow-hidden flex items-center gap-1.5">
                               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /></svg>
                               <span className="text-[8px] font-bold text-[#7B2CFF] truncate">https://amazon.in/dp/B08D6...</span>
                             </div>
                             <div className="bg-[#7B2CFF] text-white px-3 py-1.5 rounded-lg text-[8px] font-bold">
                               PASTE
                             </div>
                           </div>
                         </div>
                       )}

                       {/* Step 02: AI Product Details */}
                       {step.id === "02" && (
                         <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl p-3 border border-gray-100 shadow-lg">
                           <div className="flex gap-3">
                             <div className="w-16 h-16 rounded-lg overflow-hidden flex-none border border-gray-100">
                               <img src={step.img} alt="Product" className="w-full h-full object-cover" />
                             </div>
                             <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                               <p className="text-[9px] font-bold text-[#10B981]">Apple</p>
                               <h4 className="text-[10px] font-black text-gray-900 leading-tight">AirPods Pro (2nd Generation) with MagSafe Charging Case</h4>
                               <div className="flex items-center gap-1">
                                 <div className="flex">
                                   {[1,2,3,4,5].map((star) => (
                                     <svg key={star} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                     </svg>
                                   ))}
                                 </div>
                                 <span className="text-[8px] font-bold text-gray-700">4.8</span>
                                 <span className="text-[7px] text-gray-500">(2,341)</span>
                               </div>
                               <p className="text-[6px] text-gray-500 leading-snug line-clamp-2">Active Noise Cancellation, Transparency mode, Adaptive Audio, Up to 6 hrs battery life, Sweat & Water Resistant (IPX4)</p>
                               <div className="flex items-center gap-1.5">
                                 <p className="text-[11px] font-black text-[#10B981]">₹24,900</p>
                                 <p className="text-[8px] text-gray-400 line-through">₹27,900</p>
                               </div>
                             </div>
                           </div>
                           <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full px-2 py-1 shadow-md">
                             <svg width="3.5" height="3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="animate-pulse">
                               <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                             </svg>
                             <span className="text-[6px] font-black text-white">AI</span>
                           </div>
                         </div>
                       )}

                       {/* Step 03: Product Page */}
                       {step.id === "03" && (
                         <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl overflow-hidden">
                           <div className="w-full h-full flex flex-col items-center justify-center p-3">
                             <div className="w-full max-w-[150px] aspect-[4/3] rounded-xl overflow-hidden mb-3 border-2 border-gray-100 shadow-lg">
                               <img src={step.img} alt="Apple AirPods Pro" className="w-full h-full object-cover" />
                             </div>
                             <h5 className="text-[11px] font-black text-gray-900 mb-1">Apple AirPods Pro</h5>
                             <p className="text-[7px] text-gray-500 mb-2 text-center">MagSafe Charging Case - Active Noise Cancellation</p>
                             <span className="text-[13px] font-black text-purple-600 mb-3">₹24,900</span>
                             <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[9px] font-black px-6 py-2.5 rounded-xl shadow-lg animate-pulse flex items-center gap-2">
                               <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                 <path d="M5 12h14m-7-7 7 7-7 7"/>
                               </svg>
                               Publish
                             </button>
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
