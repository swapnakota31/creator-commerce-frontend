"use client";

import React from 'react';

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Templates", "How it Works", "How to Earn"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Guides", "API Docs"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Security"],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
    { name: 'Instagram', icon: 'M16 3H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5V8c0-2.8-2.2-5-5-5zm-4 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm4.5-8.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2' }
  ];

  return (
    <footer className="relative bg-[#05040A] text-white pt-12 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Accents - More Attractive Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#7B2CFF]/15 to-transparent rounded-full blur-[140px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-[#A100FF]/10 to-transparent rounded-full blur-[120px] translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container-shell relative z-10 px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Brand Side */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 group cursor-pointer mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] text-white shadow-xl shadow-purple-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
              </div>
              <span className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:to-white transition-all">LinkNest</span>
            </div>
            
            <p className="text-lg text-slate-400 max-w-sm leading-relaxed mb-10">
              Empowering the next generation of creators with premium tools to build, share, and grow their digital presence globally.
            </p>

            {/* Social Icons - More Attractive Styling */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-[#7B2CFF]/40 transition-all group shadow-sm backdrop-blur-sm"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Side */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8">{column.title}</h3>
                <ul className="space-y-5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[15px] text-slate-400 hover:text-white transition-colors relative group inline-block font-medium">
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] transition-all group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Clean & Modern */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm font-medium">© 2026 LinkNest Inc.</p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex gap-8">
               <a href="#" className="text-sm font-medium hover:text-slate-300 transition-colors">Privacy Policy</a>
               <a href="#" className="text-sm font-medium hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
             <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
             <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
