"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function AnalyticsDashboard() {
  const [dataPoints, setDataPoints] = useState([30, 45, 35, 60, 45, 75, 55, 90]);
  const [clicksPoints, setClicksPoints] = useState([15, 25, 20, 35, 25, 45, 30, 55]);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
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
      
      // Bezier curve for smoothness
      const prevX = (i - 1) * step;
      const prevY = height - (points[i - 1] * height / 100);
      const cp1x = prevX + step / 2;
      const cp2x = prevX + step / 2;
      
      return `${path} C ${cp1x} ${prevY}, ${cp2x} ${y}, ${x} ${y}`;
    }, "");
  };

  const viewsPath = useMemo(() => generatePath(dataPoints), [dataPoints]);
  const clicksPath = useMemo(() => generatePath(clicksPoints), [clicksPoints]);

  return (
    <section className="py-20 bg-white">
      <div className="container-shell px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Dashboard Header - Two Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Total Views Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Views</p>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m18 15-6-6-6 6"/></svg>
                    12.5%
                  </span>
                </div>
                <h3 className="text-4xl font-black text-[#111827] mb-6 tracking-tight">842,560</h3>
                <div className="h-12 w-full flex items-end gap-1.5">
                  {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#7B2CFF]/10 rounded-t-sm group-hover:bg-[#7B2CFF]/20 transition-colors" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7B2CFF]/5 to-transparent rounded-full -mr-16 -mt-16 blur-2xl" />
            </div>

            {/* Total Clicks Card */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Clicks</p>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m18 15-6-6-6 6"/></svg>
                    8.2%
                  </span>
                </div>
                <h3 className="text-4xl font-black text-[#111827] mb-6 tracking-tight">245,820</h3>
                <div className="h-12 w-full flex items-end gap-1.5">
                  {[30, 50, 40, 70, 50, 80, 60, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#A100FF]/10 rounded-t-sm group-hover:bg-[#A100FF]/20 transition-colors" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A100FF]/5 to-transparent rounded-full -mr-16 -mt-16 blur-2xl" />
            </div>
          </div>

          {/* Large Main Chart Section */}
          <div className="bg-white rounded-[32px] p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-slate-50 relative overflow-hidden">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h4 className="text-xl font-black text-[#111827] mb-1">Views vs Clicks</h4>
                <p className="text-sm font-medium text-slate-500">Real-time performance analytics</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#7B2CFF]" />
                  <span className="text-sm font-bold text-slate-600">Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#E9D5FF]" />
                  <span className="text-sm font-bold text-slate-600">Clicks</span>
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="h-[300px] w-full relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="w-full h-px bg-slate-900" />
                ))}
              </div>

              <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
                {/* Views Path */}
                <path 
                  d={viewsPath} 
                  fill="none" 
                  stroke="#7B2CFF" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="transition-all duration-1000 ease-in-out"
                />
                <path 
                  d={`${viewsPath} L 1000 300 L 0 300 Z`} 
                  fill="url(#views-gradient)" 
                  className="transition-all duration-1000 ease-in-out"
                />

                {/* Clicks Path */}
                <path 
                  d={clicksPath} 
                  fill="none" 
                  stroke="#E9D5FF" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="transition-all duration-1000 ease-in-out"
                />

                {/* Definitions */}
                <defs>
                  <linearGradient id="views-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B2CFF" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#7B2CFF" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Active Points */}
                <circle 
                  cx="1000" 
                  cy={300 - (dataPoints[dataPoints.length - 1] * 300 / 100)} 
                  r="6" 
                  fill="#7B2CFF" 
                  className="transition-all duration-1000 ease-in-out shadow-lg"
                />
                <circle 
                  cx="1000" 
                  cy={300 - (clicksPoints[clicksPoints.length - 1] * 300 / 100)} 
                  r="6" 
                  fill="#E9D5FF" 
                  stroke="#7B2CFF"
                  strokeWidth="2"
                  className="transition-all duration-1000 ease-in-out shadow-lg"
                />
              </svg>

              {/* X-Axis Labels */}
              <div className="flex justify-between mt-8 px-2">
                {['Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08'].map((date) => (
                  <span key={date} className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {date}
                  </span>
                ))}
              </div>

              {/* Live Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Live</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
