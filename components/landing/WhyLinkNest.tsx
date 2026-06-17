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
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      bgColor: "bg-[#F0F9FF]",
      iconColor: "text-[#0EA5E9]",
    },
  ];

  return (
    <section id="need-of-linknest" className="min-h-screen flex items-center py-10 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7B2CFF] mb-1.5">WHY LINK NEST</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] leading-[1.15] mb-2 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Everything you need to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#7B2CFF]">create, share and grow</span>
          </h2>
          <p className="text-sm text-[#6B7280] font-medium leading-relaxed max-w-3xl mx-auto">
            Empowering creators with the tools to create, share and grow meaningful connections effortlessly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-[60%] relative max-w-[280px] lg:max-w-[420px] mx-auto">
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F5F3FF] rounded-full" />
              <div className="relative z-10 w-full h-full group">
                <CreatorImage />
              </div>

              <div className="absolute top-[0%] -left-[10%] sm:-left-[15%] z-20 w-40 sm:w-52 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 animate-float-slow">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#7B2CFF] flex-none">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <p className="text-[10px] font-bold text-[#111827]">Your Link Nest</p>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2v1" />
                      </svg>
                    </div>
                    <p className="text-[9px] text-[#7B2CFF] font-semibold mb-1">linknest.co/yourname</p>
                    <p className="text-[8px] text-[#6B7280] leading-tight font-medium">One link for everything you create and share.</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[30%] -left-[15%] sm:-left-[20%] z-20 w-40 sm:w-52 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 animate-float-medium">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[10px] font-bold text-[#111827]">Your Link Nest</p>
                    <p className="text-[9px] text-[#7B2CFF] font-semibold">linknest.co/yourname</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2v1" />
                  </svg>
                </div>
                <div className="flex gap-1">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center text-[9px] text-white shadow-md">📸</div>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-600 flex items-center justify-center text-[9px] text-white shadow-md">📺</div>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-black flex items-center justify-center text-[9px] text-white shadow-md">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.023l-.35-.023c-1.127-.03-2.316-.03-3.414 0l-.35.023c-1.077.06-2.127.18-3.125.38a12.11 12.11 0 0 0-2.825 1c-.8.44-1.5 1.02-2.04 1.74A5.94 5.94 0 0 0 .1 5.726c-.2.998-.32 2.048-.38 3.125l-.023.35c-.03 1.127-.03 2.316 0 3.414l.023.35c.06 1.077.18 2.127.38 3.125a12.11 12.11 0 0 0 1 2.825c.44.8 1.02 1.5 1.74 2.04a5.94 5.94 0 0 0 2.536.315c.998.2 2.048.32 3.125.38l.35.023c1.127.03 2.316.03 3.414 0l.35-.023c1.077-.06 2.127-.18 3.125-.38a12.11 12.11 0 0 0 2.825-1c.8-.44 1.5-1.02 2.04-1.74a5.94 5.94 0 0 0 .315-2.536c.2-.998.32-2.048.38-3.125l-.023-.35c.03-1.127.03-2.316 0-3.414l-.023-.35c-.06-1.077-.18-2.127-.38-3.125a12.11 12.11 0 0 0-1-2.825 5.86 5.86 0 0 0-1.74-2.04A5.94 5.94 0 0 0 18.274.1c-.998-.2-2.048-.32-3.125-.38l-.35-.023C13.67.01 13.097 0 12.525 0zm.014 1.542c.484 0 .964.009 1.442.023 1.002.03 1.956.14 2.853.326.68.14 1.306.368 1.868.675.5.27.935.63 1.282 1.07.34.43.6.93.766 1.48a10.6 10.6 0 0 1 .326 2.853c.023.478.032.958.032 1.442s-.009.964-.023 1.442a10.6 10.6 0 0 1-.326 2.853c-.166.55-.426 1.05-.766 1.48a4.34 4.34 0 0 1-1.282 1.07c-.562.307-1.188.535-1.868.675-.897.186-1.851.296-2.853.326-.478.023-.958.032-1.442.032s-.964-.009-1.442-.023a10.6 10.6 0 0 1-2.853-.326c-.68-.14-1.306-.368-1.868-.675a4.34 4.34 0 0 1-1.282-1.07c-.34-.43-.6-.93-.766-1.48a10.6 10.6 0 0 1-.326-2.853c-.023-.478-.032-.958-.032-1.442s.009-.964.023-1.442a10.6 10.6 0 0 1 .326-2.853c.166-.55.426-1.05.766-1.48a4.34 4.34 0 0 1 1.282-1.07c.562-.307 1.188-.535 1.868-.675.897-.186 1.851-.296 2.853-.326.478-.023.958-.032 1.442-.032z" />
                    </svg>
                  </div>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-slate-900 flex items-center justify-center text-[9px] text-white shadow-md">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[9px] text-slate-400 font-bold shadow-md">+</div>
                </div>
              </div>

              <div className="absolute bottom-[0%] -left-[10%] sm:-left-[15%] z-20 w-36 sm:w-44 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 animate-float-fast">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-wider">Profile Views</p>
                  <span className="text-[8px] font-bold text-green-500 bg-green-50 px-1.5 py-1 rounded-full flex items-center gap-1">▲ 28%</span>
                </div>
                <p className="text-base font-black text-[#111827] mb-2">12,540</p>
                <div className="h-6 w-full relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 35 Q 15 32, 30 25 T 60 18 T 100 5" fill="none" stroke="#7B2CFF" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M0 35 Q 15 32, 30 25 T 60 18 T 100 5 V 40 H 0 Z" fill="url(#purple-gradient)" opacity="0.1" />
                    <defs>
                      <linearGradient id="purple-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7B2CFF" />
                        <stop offset="100%" stopColor="#7B2CFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="absolute top-[0%] -right-[10%] sm:-right-[15%] z-20 h-9 w-9 sm:h-10 sm:w-10 bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] rounded-full shadow-xl flex items-center justify-center text-white text-sm sm:text-base animate-pulse ring-2 ring-white/60">💜</div>

              <div className="absolute top-[30%] -right-[15%] sm:-right-[20%] z-20 w-40 sm:w-52 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 animate-float-medium">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-wider">Total Clicks</p>
                  <span className="text-[8px] font-bold text-green-500 bg-green-50 px-1.5 py-1 rounded-full flex items-center gap-1">▲ 32%</span>
                </div>
                <p className="text-base font-black text-[#111827] mb-1.5">24,560</p>
                <div className="h-6 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 35 Q 20 30, 40 25 T 80 15 T 100 5" fill="none" stroke="#7B2CFF" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="100" cy="5" r="2.5" fill="#7B2CFF" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-[0%] -right-[10%] sm:-right-[15%] z-20 w-44 sm:w-56 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 animate-float-slow">
                <p className="text-[9px] font-bold text-[#111827] uppercase tracking-wider mb-2">Top Link Clicks</p>
                <div className="space-y-2">
                  {[
                    { name: "My Store", clicks: "3.6K", color: "bg-purple-50", icon: "🛍️" },
                    { name: "YouTube", clicks: "2.8K", color: "bg-red-50", icon: "📺" },
                    { name: "Instagram", clicks: "2.2K", color: "bg-pink-50", icon: "📸" },
                    { name: "Newsletter", clicks: "1.4K", color: "bg-blue-50", icon: "📧" },
                  ].map((link, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className={`h-5 w-5 rounded-lg ${link.color} flex items-center justify-center text-[9px] shadow-md`}>{link.icon}</div>
                        <span className="text-[9px] font-bold text-[#4B5563]">{link.name}</span>
                      </div>
                      <span className="text-[9px] font-black text-[#111827]">{link.clicks}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] px-4">
            <div className="relative">
              <div className="absolute left-[20px] top-5 bottom-5 w-px border-l-2 border-dotted border-slate-100 hidden sm:block" />
              <div className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="relative flex items-start gap-4 group">
                    <div className="absolute left-[18px] top-[50%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7B2CFF] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                    <div className={`flex-none h-9 w-9 ${benefit.bgColor} ${benefit.iconColor} rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-white z-10`}>{benefit.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-base font-black text-[#111827] mb-0.5 tracking-tight">{benefit.title}</h4>
                      <p className="text-sm text-[#6B7280] leading-relaxed font-medium max-w-[300px]">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
