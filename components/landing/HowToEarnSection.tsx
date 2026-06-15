"use client";

import React from 'react';

export default function HowToEarnSection() {
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
    <section className="py-24 bg-[#F8F9FB]">
      <div className="container-shell px-4">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#7B2CFF] mb-4">MONETIZATION</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#7B2CFF]">Earn</span> with Link Nest
          </h2>
          <p className="text-lg text-[#6B7280] font-medium leading-relaxed max-w-2xl mx-auto">
            A simple 5-step process to start monetizing your audience engagement through curated commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {monetizationSteps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="bg-white rounded-[24px] p-8 h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-4xl font-black text-slate-50 group-hover:text-[#7B2CFF]/10 transition-colors">
                  0{step.id}
                </div>
                <h4 className="text-lg font-black text-[#111827] mb-3 leading-tight">{step.title}</h4>
                <p className="text-sm text-[#6B7280] font-medium leading-relaxed">{step.desc}</p>
              </div>
              {step.id < 5 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-200">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
