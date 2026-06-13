"use client";

import React from 'react';
import CreatorImage from './CreatorImage';

export default function WhyLinkNest() {
  const benefits = [
    {
      title: "One Link",
      desc: "All your content, products and links in one place.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      bgColor: "bg-[#F5F3FF]",
      iconColor: "text-[#7B2CFF]",
    },
    {
      title: "Insights",
      desc: "Track clicks, engagement and performance.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      bgColor: "bg-[#ECFDF5]",
      iconColor: "text-[#10B981]",
    },
    {
      title: "Your Audience",
      desc: "Build stronger connections and grow your community.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgColor: "bg-[#F5F3FF]",
      iconColor: "text-[#6366F1]",
    },
    {
      title: "SEO Search",
      desc: "Optimized for search engines to help users find you.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      bgColor: "bg-[#F0F9FF]",
      iconColor: "text-[#0EA5E9]",
    },
  ];

  return (
    <section id="need-of-linknest" className="min-h-screen flex items-center py-10 bg-white overflow-hidden">
      <div className="container-shell px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7B2CFF] mb-1.5">WHY LINK NEST</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] leading-[1.15] mb-2 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Everything you need to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#7B2CFF]">create, share and grow</span>
          </h2>
          <p className="text-sm text-[#6B7280] font-medium leading-relaxed max-w-2xl mx-auto">
            Empowering creators with the tools to create, share and grow meaningful connections effortlessly.
          </p>
        </div>

        {/* Main Layout: Balanced View */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          
          {/* Left Side: Creator Area with Floating Cards */}
          <div className="w-full lg:w-[65%] relative max-w-[250px] lg:max-w-[350px] mx-auto">
            <div className="relative aspect-square flex items-center justify-center">
              {/* Lavender circular background shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#F5F3FF] to-transparent rounded-full opacity-60 blur-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F5F3FF] rounded-full" />
              
              {/* Creator Image */}
              <div className="relative z-10 w-[75%] h-[75%] group">
                 <CreatorImage />
              </div>

              {/* Floating UI Elements matching Image exactly */}
              
              {/* 1. TOP LEFT: Your Link Nest (Link Preview) */}
              <div className="absolute top-[0%] -left-[10%] sm:-left-[15%] z-20 w-28 sm:w-36 backdrop-blur-md bg-white/90 rounded-xl p-1.5 sm:p-2 shadow-[0_6px_12px_rgba(0,0,0,0.04)] border border-white/60 animate-float-slow">
                <div className="flex items-start gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#7B2CFF] flex-none">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-0.5 mb-0.5">
                      <p className="text-[7px] font-bold text-[#111827]">Your Link Nest</p>
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    </div>
                    <p className="text-[6px] text-[#7B2CFF] font-semibold mb-0.5">linknest.co/yourname</p>
                    <p className="text-[5px] text-[#6B7280] leading-tight font-medium">One link for everything you create and share.</p>
                  </div>
                </div>
              </div>

              {/* 2. MIDDLE LEFT: Your Link Nest (Social Icons) */}
              <div className="absolute top-[30%] -left-[15%] sm:-left-[20%] z-20 w-28 sm:w-36 backdrop-blur-md bg-white/90 rounded-xl p-1.5 sm:p-2 shadow-[0_6px_12px_rgba(0,0,0,0.04)] border border-white/60 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <p className="text-[7px] font-bold text-[#111827]">Your Link Nest</p>
                    <p className="text-[6px] text-[#7B2CFF] font-semibold">linknest.co/yourname</p>
                  </div>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                </div>
                <div className="flex gap-0.5">
                  <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center text-[6px] text-white shadow-sm">📸</div>
                  <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-red-600 flex items-center justify-center text-[6px] text-white shadow-sm">📺</div>
                  <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-black flex items-center justify-center text-[6px] text-white shadow-sm">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.023l-.35-.023c-1.127-.03-2.316-.03-3.414 0l-.35.023c-1.077.06-2.127.18-3.125.38a12.11 12.11 0 0 0-2.825 1c-.8.44-1.5 1.02-2.04 1.74A5.94 5.94 0 0 0 .1 5.726c-.2.998-.32 2.048-.38 3.125l-.023.35c-.03 1.127-.03 2.316 0 3.414l.023.35c.06 1.077.18 2.127.38 3.125a12.11 12.11 0 0 0 1 2.825c.44.8 1.02 1.5 1.74 2.04a5.94 5.94 0 0 0 2.536.315c.998.2 2.048.32 3.125.38l.35.023c1.127.03 2.316.03 3.414 0l.35-.023c1.077-.06 2.127-.18 3.125-.38a12.11 12.11 0 0 0 2.825-1c.8-.44 1.5-1.02 2.04-1.74a5.94 5.94 0 0 0 .315-2.536c.2-.998.32-2.048.38-3.125l.023-.35c.03-1.127.03-2.316 0-3.414l-.023-.35c-.06-1.077-.18-2.127-.38-3.125a12.11 12.11 0 0 0-1-2.825 5.86 5.86 0 0 0-1.74-2.04A5.94 5.94 0 0 0 18.274.1c-.998-.2-2.048-.32-3.125-.38l-.35-.023C13.67.01 13.097 0 12.525 0zm.014 1.542c.484 0 .964.009 1.442.023 1.002.03 1.956.14 2.853.326.68.14 1.306.368 1.868.675.5.27.935.63 1.282 1.07.34.43.6.93.766 1.48a10.6 10.6 0 0 1 .326 2.853c.023.478.032.958.032 1.442s-.009.964-.023 1.442a10.6 10.6 0 0 1-.326 2.853c-.166.55-.426 1.05-.766 1.48a4.34 4.34 0 0 1-1.282 1.07c-.562.307-1.188.535-1.868.675-.897.186-1.851.296-2.853.326-.478.023-.958.032-1.442.032s-.964-.009-1.442-.023a10.6 10.6 0 0 1-2.853-.326c-.68-.14-1.306-.368-1.868-.675a4.34 4.34 0 0 1-1.282-1.07c-.34-.43-.6-.93-.766-1.48a10.6 10.6 0 0 1-.326-2.853c-.023-.478-.032-.958-.032-1.442s.009-.964.023-1.442a10.6 10.6 0 0 1 .326-2.853c.166-.55.426-1.05.766-1.48a4.34 4.34 0 0 1 1.282-1.07c.562-.307 1.188-.535 1.868-.675.897-.186 1.851-.296 2.853-.326.478-.023.958-.032 1.442-.032z"/></svg>
                  </div>
                  <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-slate-900 flex items-center justify-center text-[6px] text-white shadow-sm">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[6px] text-slate-400 font-bold shadow-sm">+</div>
                </div>
              </div>

              {/* 3. BOTTOM LEFT: Profile Views (Animated Chart) */}
              <div className="absolute bottom-[0%] -left-[10%] sm:-left-[15%] z-20 w-24 sm:w-32 backdrop-blur-md bg-white/95 rounded-xl p-1.5 sm:p-2 shadow-[0_6px_12px_rgba(0,0,0,0.04)] border border-white/60 animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[6px] font-bold text-[#6B7280] uppercase tracking-wider">Profile Views</p>
                  <span className="text-[5px] font-bold text-green-500 bg-green-50 px-1 py-0.5 rounded-full flex items-center gap-0.5">
                    ▲ 28%
                  </span>
                </div>
                <p className="text-sm font-black text-[#111827] mb-1">12,540</p>
                {/* Line Chart with Moving Path */}
                <div className="h-5 w-full relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path 
                      className="line-path"
                      d="M0 35 Q 15 32, 30 25 T 60 18 T 100 5" 
                      fill="none" 
                      stroke="#7B2CFF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                    <path 
                      className="area-path"
                      d="M0 35 Q 15 32, 30 25 T 60 18 T 100 5 V 40 H 0 Z" 
                      fill="url(#purple-gradient)" 
                      opacity="0.1"
                    />
                    <defs>
                      <linearGradient id="purple-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7B2CFF" />
                        <stop offset="100%" stopColor="#7B2CFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* 4. TOP RIGHT: Engagement Icon */}
              <div className="absolute top-[0%] -right-[10%] sm:-right-[15%] z-20 h-6 w-6 sm:h-7 sm:w-7 bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] rounded-full shadow-lg flex items-center justify-center text-white text-xs sm:text-sm animate-pulse ring-2 ring-white/40 backdrop-blur-sm">
                💜
              </div>

              {/* 5. MIDDLE RIGHT: Total Clicks (Moving Line Graph) */}
              <div className="absolute top-[30%] -right-[15%] sm:-right-[20%] z-20 w-28 sm:w-36 backdrop-blur-md bg-white/95 rounded-xl p-1.5 sm:p-2 shadow-[0_6px_12px_rgba(0,0,0,0.04)] border border-white/60 animate-float">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[6px] font-bold text-[#6B7280] uppercase tracking-wider">Total Clicks</p>
                  <span className="text-[5px] font-bold text-green-500 bg-green-50 px-1 py-0.5 rounded-full flex items-center gap-0.5">
                    ▲ 32%
                  </span>
                </div>
                <p className="text-sm font-black text-[#111827] mb-0.5">24,560</p>
                <div className="h-5 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path 
                      className="line-path"
                      d="M0 35 Q 20 30, 40 25 T 80 15 T 100 5" 
                      fill="none" 
                      stroke="#7B2CFF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                    <circle className="point-move" cx="100" cy="5" r="2" fill="#7B2CFF" />
                  </svg>
                </div>
              </div>

              {/* 6. BOTTOM RIGHT: Top Link Clicks (List) */}
              <div className="absolute bottom-[0%] -right-[10%] sm:-right-[15%] z-20 w-32 sm:w-40 backdrop-blur-md bg-white/95 rounded-xl p-1.5 sm:p-2 shadow-[0_6px_12px_rgba(0,0,0,0.04)] border border-white/60 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                <p className="text-[6px] font-bold text-[#111827] uppercase tracking-wider mb-1.5">Top Link Clicks</p>
                <div className="space-y-1.5">
                   {[
                     { name: "My Store", clicks: "3.6K", color: "bg-purple-50", icon: "🛍️" },
                     { name: "YouTube", clicks: "2.8K", color: "bg-red-50", icon: "📺" },
                     { name: "Instagram", clicks: "2.2K", color: "bg-pink-50", icon: "📸" },
                     { name: "Newsletter", clicks: "1.4K", color: "bg-blue-50", icon: "📧" },
                   ].map((link, i) => (
                     <div key={i} className="flex items-center justify-between">
                       <div className="flex items-center gap-0.5">
                         <div className={`h-4 w-4 rounded-lg ${link.color} flex items-center justify-center text-[7px] shadow-sm`}>{link.icon}</div>
                         <span className="text-[7px] font-bold text-[#4B5563]">{link.name}</span>
                       </div>
                       <span className="text-[7px] font-black text-[#111827]">{link.clicks}</span>
                     </div>
                   ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Feature List with Timeline Style */}
        <div className="w-full lg:w-[35%] px-4">
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="absolute left-[20px] top-5 bottom-5 w-px border-l-2 border-dotted border-slate-100 hidden sm:block" />
            
            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="relative flex items-start gap-4 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[18px] top-[50%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7B2CFF] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                  
                  <div className={`flex-none h-9 w-9 ${benefit.bgColor} ${benefit.iconColor} rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-white z-10`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-black text-[#111827] mb-0.5 tracking-tight">{benefit.title}</h4>
                    <p className="text-sm text-[#6B7280] leading-relaxed font-medium max-w-[220px]">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-5px) translateX(5px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .line-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: dash 3s cubic-bezier(0.4, 0, 0.2, 1) forwards infinite;
        }
        .point-move {
          animation: point-follow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes point-follow {
          0% { transform: translateX(-100px); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
