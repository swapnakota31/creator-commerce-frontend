"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function AnalyticsDashboardSection() {
  const [viewsPoints, setViewsPoints] = useState([30, 45, 35, 60, 45, 75, 55, 90]);
  const [clicksPoints, setClicksPoints] = useState([15, 25, 20, 35, 25, 45, 30, 55]);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewsPoints(prev => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const rand = last + (Math.random() * 20 - 10);
        next.push(Math.min(Math.max(rand, 20), 95));
        return next;
      });
      setClicksPoints(prev => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const rand = last + (Math.random() * 15 - 7.5);
        next.push(Math.min(Math.max(rand, 10), 65));
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generatePath = (points: number[]) => {
    const width = 1000;
    const height = 300;
    const step = width / (points.length - 1);
    
    return points.reduce((path, point, i) => {
      const x = i * step;
      const y = height - (point * height / 100);
      if (i === 0) return `M ${x} ${y}`;
      
      const prevX = (i - 1) * step;
      const prevY = height - (points[i - 1] * height / 100);
      const cp1x = prevX + step / 2;
      const cp2x = prevX + step / 2;
      
      return `${path} C ${cp1x} ${prevY}, ${cp2x} ${y}, ${x} ${y}`;
    }, "");
  };

  const viewsPath = useMemo(() => generatePath(viewsPoints), [viewsPoints]);
  const clicksPath = useMemo(() => generatePath(clicksPoints), [clicksPoints]);

  const monetizationSteps = [
    { id: 1, title: "Create Storefront", desc: "Add products and publish your storefront." },
    { id: 2, title: "Share Your Link", desc: "Share your storefront link with your audience." },
    { id: 3, title: "Users Discover Products", desc: "They click your link and explore products." },
    { id: 4, title: "Purchase on Partner Sites", desc: "They buy the product on the partner site." },
    { id: 5, title: "Earn Through Affiliate Programs", desc: "Earn from eligible affiliate programs." },
  ];

  return (
    <section id="how-to-earn" className="py-12 bg-white overflow-hidden">
      <div className="container-shell px-4">
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#111827] leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#7B2CFF]">scale your growth</span>
          </h2>
          <p className="text-lg text-[#6B7280] font-medium max-w-2xl mx-auto leading-relaxed">
            From powerful real-time analytics to seamless monetization, we provide the tools you need to build a successful creator business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: Analytics Overview */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-[#111827] mb-2 tracking-tight">Analytics Overview</h2>
              <p className="text-slate-500 font-medium">Track your performance in real-time</p>
            </div>

            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col flex-1">
              {/* Top Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-[#F5F3FF]/50 border border-[#F5F3FF]">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Views</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-black text-[#111827]">842.5K</h3>
                    <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full mb-1">▲ 12%</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-[#ECFDF5]/50 border border-[#ECFDF5]">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Clicks</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-black text-[#111827]">245.8K</h3>
                    <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full mb-1">▲ 8%</span>
                  </div>
                </div>
              </div>

              {/* Animated Chart */}
              <div className="relative flex-1 min-h-[260px] flex flex-col justify-end">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-[#7B2CFF]" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Views</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-[#E9D5FF]" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clicks</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 border border-green-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-green-600">Live</span>
                  </div>
                </div>

                <div className="h-[200px] w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
                    <path 
                      d={viewsPath} 
                      fill="none" 
                      stroke="#7B2CFF" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      className="transition-all duration-1000 ease-in-out"
                    />
                    <path 
                      d={clicksPath} 
                      fill="none" 
                      stroke="#E9D5FF" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      className="transition-all duration-1000 ease-in-out"
                    />
                    {/* Active Pulsing Points */}
                    <circle 
                      cx="1000" 
                      cy={300 - (viewsPoints[viewsPoints.length - 1] * 300 / 100)} 
                      r="6" 
                      fill="#7B2CFF" 
                      className="transition-all duration-1000 ease-in-out animate-pulse shadow-lg"
                    />
                    <circle 
                      cx="1000" 
                      cy={300 - (clicksPoints[clicksPoints.length - 1] * 300 / 100)} 
                      r="6" 
                      fill="#E9D5FF" 
                      stroke="#7B2CFF"
                      strokeWidth="2"
                      className="transition-all duration-1000 ease-in-out animate-pulse shadow-lg"
                    />
                  </svg>
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between mt-6 px-2">
                  {['Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08'].map((date) => (
                    <span key={date} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {date}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: How to Earn Monetization Timeline */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-[#111827] mb-2 tracking-tight">How to Earn</h2>
              <p className="text-slate-500 font-medium">Simple steps to start earning</p>
            </div>

            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex-1">
              <div className="relative space-y-8">
                {/* Vertical Dotted Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-px border-l-2 border-dotted border-slate-100" />

                {monetizationSteps.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-6 group">
                    <div className="flex-none h-10 w-10 rounded-full bg-[#F5F3FF] border-2 border-white shadow-sm flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-[#7B2CFF]">{step.id}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-lg font-black text-[#111827] mb-1 group-hover:text-[#7B2CFF] transition-colors">{step.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-[24px] bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] text-white relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-1">Ready to start?</h4>
                  <p className="text-white/80 text-sm mb-4">Join 50,000+ creators today.</p>
                  <button className="bg-white text-[#7B2CFF] px-6 py-2.5 rounded-xl text-sm font-black hover:shadow-lg transition-all active:scale-95">
                    Get Started Free
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        svg path {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: dash 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}
