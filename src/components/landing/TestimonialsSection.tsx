"use client";

import { useDragScroll } from "@/hooks/useDragScroll";

export default function TestimonialsSection() {
  const { scrollRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, isDragging } = useDragScroll();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Beauty Creator",
      quote: "LinkNest helped me build my brand and increase my earnings significantly. Highly recommended!",
      stars: 5,
      img: "https://i.pravatar.cc/150?u=rahul",
    },
    {
      name: "Anjali Verma",
      role: "Tech Creator",
      quote: "The templates are stunning and super easy to customize. Everything I need in one place!",
      stars: 5,
      img: "https://i.pravatar.cc/150?u=anjali",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1">
             <p className="text-xs font-bold uppercase tracking-widest text-[#8A2BE2]">Loved by Creators</p>
             <div 
               ref={scrollRef}
               onMouseDown={onMouseDown}
               onMouseLeave={onMouseLeave}
               onMouseUp={onMouseUp}
               onMouseMove={onMouseMove}
               className={`mt-8 flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
             >
               {testimonials.map((t, i) => (
                 <div key={i} className="flex-none w-80 rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-sm snap-start">
                   <div className="flex gap-1 mb-4">
                     {Array.from({ length: t.stars }).map((_, j) => (
                       <span key={j} className="text-orange-400">★</span>
                     ))}
                   </div>
                   <p className="text-sm leading-relaxed text-[#111827]">&quot;{t.quote}&quot;</p>
                   <div className="mt-6 flex items-center gap-3">
                     <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full" />
                     <div>
                       <p className="text-xs font-bold text-[#111827]">{t.name}</p>
                       <p className="text-[10px] text-[#6B7280]">{t.role}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             <div className="mt-8 flex gap-2">
               <button 
                 onClick={() => scroll("left")}
                 className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-slate-50"
               >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
               </button>
               <button 
                 onClick={() => scroll("right")}
                 className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E7EB] hover:bg-slate-50"
               >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
               </button>
             </div>
          </div>

          <div className="flex-1 lg:pl-12">
            <div className="relative rounded-[40px] border border-[#E5E7EB] bg-[#fdf8f4] p-8 lg:p-12 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold text-[#111827] leading-tight" style={{ fontFamily: "var(--font-space)" }}>
                  Stop Sharing Links. <br /> Start Building Your <br /> Affiliate Empire.
                </h2>
                <p className="mt-6 text-[#6B7280] text-sm leading-relaxed">
                  Join thousands of affiliates who are using LinkNest to grow their brand and income effortlessly.
                </p>
                <div className="mt-10">
                  <button className="brand-gradient rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20">
                    Become an Affiliate
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-6 text-[10px] font-bold text-[#6B7280]">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Easy Setup
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    No Technical Skills Required
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&fit=crop" 
                alt="Affiliate Marketing" 
                className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-top opacity-20 lg:opacity-100 mix-blend-multiply" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

