"use client";

import React from 'react';

export default function AnalyticsSection() {
  const stats = [
    { label: "Storefront Visits", value: "12,540", trend: "+ 18.6%", icon: "👥" },
    { label: "Product Clicks", value: "3,672", trend: "+ 22.4%", icon: "🖱️" },
    { label: "Link Clicks", value: "2,318", trend: "+ 16.8%", icon: "🔗" },
    { label: "Products Shared", value: "156", trend: "+ 12.3%", icon: "📦" },
    { label: "Audience Engagement", value: "1,892", trend: "+ 15.2%", icon: "❤️" },
    { label: "Top Product Views", value: "1,245", trend: "+ 20.7%", icon: "⭐" },
  ];

  const monetizationSteps = [
    {
      id: 1,
      title: "Create Storefront",
      desc: "Add products and publish your storefront.",
      icon: "👕",
    },
    {
      id: 2,
      title: "Share Your Link",
      desc: "Share your storefront link with your audience.",
      icon: "🔗",
    },
    {
      id: 3,
      title: "Followers Discover",
      desc: "They click your link and explore products.",
      icon: "👥",
    },
    {
      id: 4,
      title: "Purchase on Partner Sites",
      desc: "They buy the product on the partner ecommerce site.",
      icon: "🛒",
    },
    {
      id: 5,
      title: "Eligible Affiliate Earnings",
      desc: "You may earn from eligible affiliate programs as per their terms.",
      icon: "💰",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-shell">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Powerful <span className="text-[#7B2CFF]">Analytics</span> for Creators
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto font-medium">
            Track your performance, understand your audience, and optimize your earnings with our real-time dashboard.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-[#F8F9FB] rounded-[40px] border border-[#E5E7EB] p-4 sm:p-4 overflow-hidden scale-[0.9] origin-top">
          
          {/* Dashboard Panel */}
          <div className="flex-1 bg-white rounded-[32px] border border-[#E5E7EB] shadow-sm flex overflow-hidden min-h-[500px]">
            {/* Sidebar */}
            <div className="w-14 border-r border-[#F0F0F5] flex flex-col items-center py-6 gap-6 bg-white hidden sm:flex">
              <div className="h-9 w-9 bg-[#F0F0FF] rounded-xl flex items-center justify-center text-[#7B2CFF]">🏠</div>
              <div className="text-[#6B7280] opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-sm">📦</div>
              <div className="text-[#6B7280] opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-sm">📊</div>
              <div className="text-[#6B7280] opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-sm">👥</div>
              <div className="text-[#6B7280] opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-sm">🔗</div>
              <div className="mt-auto text-[#6B7280] opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-sm">❓</div>
            </div>

            {/* Main Dashboard Content */}
            <div className="flex-1 flex flex-col p-4 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-base font-bold text-[#111827]">Analytics Overview</h3>
                <div className="flex items-center gap-2 text-[10px] font-medium text-[#6B7280] bg-[#F8F9FB] px-2.5 py-1.5 rounded-lg border border-[#E5E7EB]">
                  📅 This Month
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-2xl border border-[#F0F0F5] hover:border-[#7B2CFF]/20 transition-all hover:shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-base">{stat.icon}</span>
                    </div>
                    <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-lg font-black text-[#111827] mb-1">{stat.value}</p>
                    <p className="text-[9px] font-bold text-green-500">
                      {stat.trend} <span className="text-[#6B7280]/60 font-medium lowercase">vs last month</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="flex-1 bg-[#F8F9FB]/50 rounded-2xl border border-[#F0F0F5] p-4 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-[10px] font-bold text-[#111827]">Storefront Activity Over Time</h4>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#6B7280]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7B2CFF]" /> Visitors
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#6B7280]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D6B5FF]" /> Link Clicks
                    </div>
                  </div>
                </div>
                
                {/* Simulated Chart Lines */}
                <div className="flex-1 flex items-end gap-1 px-2 relative group">
                  <style jsx>{`
                    @keyframes drawPath {
                      from { stroke-dashoffset: 1000; }
                      to { stroke-dashoffset: 0; }
                    }
                    .animate-path {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                      animation: drawPath 3s ease-out forwards;
                    }
                  `}</style>
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path 
                      d="M0 80 Q 50 60, 100 70 T 200 40 T 300 65 T 400 30 T 500 55 T 600 20" 
                      fill="none" 
                      stroke="#7B2CFF" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      className="animate-path"
                    />
                    <path 
                      d="M0 90 Q 50 75, 100 85 T 200 60 T 300 80 T 400 50 T 500 70 T 600 40" 
                      fill="none" 
                      stroke="#D6B5FF" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      opacity="0.6"
                      className="animate-path"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                  
                  {/* Tooltip Simulation */}
                  <div className="absolute left-[40%] top-[20%] bg-white shadow-xl border border-[#E5E7EB] rounded-xl p-3 z-10 pointer-events-none transform -translate-x-1/2">
                    <p className="text-[10px] font-bold text-[#111827] mb-2">May 16</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-1.5 text-[9px] font-medium text-[#6B7280]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7B2CFF]" /> Visitors
                        </span>
                        <span className="text-[9px] font-bold">9,842</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-1.5 text-[9px] font-medium text-[#6B7280]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D6B5FF]" /> Link Clicks
                        </span>
                        <span className="text-[9px] font-bold">1,892</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between mt-4 px-2">
                   {['May 01', 'May 06', 'May 11', 'May 16', 'May 21', 'May 26', 'May 31'].map(date => (
                     <span key={date} className="text-[9px] font-bold text-[#6B7280]/60">{date}</span>
                   ))}
                </div>
              </div>

              {/* Top Products */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-[10px] font-bold text-[#111827]">Top Clicked Products</h4>
                  <button className="text-[9px] font-bold text-[#7B2CFF] hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: "Wireless Headphones", clicks: "982", img: "🎧" },
                    { name: "Stainless Steel Bottle", clicks: "756", img: "🧴" },
                    { name: "Smart Watch", clicks: "645", img: "⌚" },
                    { name: "Indoor Plant", clicks: "532", img: "🪴" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 p-1.5 rounded-xl border border-[#F0F0F5]">
                      <div className="h-8 w-8 bg-[#F8F9FB] rounded-lg flex items-center justify-center text-sm">{p.img}</div>
                      <div>
                        <p className="text-[8px] font-bold text-[#111827] line-clamp-1">{p.name}</p>
                        <p className="text-[7px] font-medium text-[#6B7280]">Clicks <span className="font-bold">{p.clicks}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Monetization Panel */}
          <div className="w-full lg:w-[320px] bg-white rounded-[32px] border border-[#E5E7EB] p-6 shadow-sm">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#7B2CFF] mb-1.5">HOW IT WORKS</p>
            <h3 className="text-xl font-black text-[#111827] mb-6">How Creators Monetize</h3>

            <div className="space-y-4 relative">
              {/* Connector Line */}
              <div className="absolute left-[13px] top-4 bottom-4 w-0.5 bg-[#F0F0F5]" />

              {monetizationSteps.map((step) => (
                <div key={step.id} className="flex gap-3 relative z-10">
                  <div className="flex-none h-7 w-7 rounded-full bg-[#7B2CFF] text-white text-[9px] font-bold flex items-center justify-center border-[3px] border-white shadow-sm">
                    {step.id}
                  </div>
                  <div className="flex gap-3 bg-[#F8F9FB] rounded-2xl p-3 border border-[#F0F0F5] flex-1 hover:border-[#7B2CFF]/20 transition-all">
                    <div className="h-8 w-8 bg-white rounded-xl shadow-sm flex items-center justify-center text-base">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-[#111827] mb-0.5">{step.title}</h4>
                      <p className="text-[10px] text-[#6B7280] leading-tight font-medium">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer Box */}
            <div className="mt-6 p-3 rounded-2xl bg-[#F0F0FF] border border-[#D6B5FF]/30 flex gap-2.5">
              <div className="flex-none h-4 w-4 bg-[#7B2CFF] rounded-full text-white text-[9px] font-bold flex items-center justify-center">i</div>
              <p className="text-[9px] font-medium text-[#7B2CFF] leading-tight">
                Our platform does not pay commissions. <br />
                <span className="opacity-80">Earnings depend on external affiliate programs.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
