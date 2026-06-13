"use client";

import React, { useState } from 'react';
import AboutUsPopup from './AboutUsPopup';
import FAQPopup from './FAQPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import TermsConditionsPopup from './TermsConditionsPopup';

export default function Footer() {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsConditionsOpen, setIsTermsConditionsOpen] = useState(false);
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" }
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Features", href: "#features-grid" },
        { label: "Templates", href: "#templates" },
        { label: "How it works", href: "#how-it-works" },
        { label: "How to earn", href: "#how-to-earn" }
      ],
    },
    {
      title: "Help Center",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Contact Us", href: "#" }
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" }
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
    { name: 'Instagram', icon: 'M16 3H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5V8c0-2.8-2.2-5-5-5zm-4 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm4.5-8.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2' }
  ];

  return (
    <footer className="relative bg-[#05040A] text-white pt-10 pb-8 overflow-hidden border-t border-white/5">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#7B2CFF]/15 to-transparent rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-[#A100FF]/10 to-transparent rounded-full translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container-shell relative z-10 px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          {/* Brand Side */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 group cursor-pointer mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] text-white shadow-xl shadow-purple-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
              </div>
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:to-white transition-all">LinkNest</span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-7">
              Empowering the next generation of creators with premium tools to build, share, and grow their digital presence globally.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="h-9 w-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-[#7B2CFF]/40 transition-all group shadow-sm"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Side with Vertical Dividers */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((column, index) => (
              <div key={column.title} className="relative flex-1 min-w-[130px]">
                {/* Vertical Divider */}
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 -ml-3 hidden sm:block" />
                )}
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">{column.title}</h3>
                <ul className="space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.label === "About Us" ? (
                        <button
                          onClick={() => setIsAboutUsOpen(true)}
                          className="text-sm text-slate-400 hover:text-white transition-colors relative group inline-block font-medium text-left"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] transition-all group-hover:w-full" />
                        </button>
                      ) : link.label === "FAQs" ? (
                        <button
                          onClick={() => setIsFAQOpen(true)}
                          className="text-sm text-slate-400 hover:text-white transition-colors relative group inline-block font-medium text-left"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] transition-all group-hover:w-full" />
                        </button>
                      ) : link.label === "Privacy Policy" ? (
                        <button
                          onClick={() => setIsPrivacyPolicyOpen(true)}
                          className="text-sm text-slate-400 hover:text-white transition-colors relative group inline-block font-medium text-left"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] transition-all group-hover:w-full" />
                        </button>
                      ) : link.label === "Terms & Conditions" ? (
                        <button
                          onClick={() => setIsTermsConditionsOpen(true)}
                          className="text-sm text-slate-400 hover:text-white transition-colors relative group inline-block font-medium text-left"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] transition-all group-hover:w-full" />
                        </button>
                      ) : (
                        <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors relative group inline-block font-medium">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] transition-all group-hover:w-full" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
          <p className="text-xs font-medium">© 2026 LinkNest. All rights reserved.</p>
          
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
             <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status: Operational</span>
          </div>
        </div>
      </div>
      
      <AboutUsPopup isOpen={isAboutUsOpen} onClose={() => setIsAboutUsOpen(false)} />
      <FAQPopup isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
      <PrivacyPolicyPopup isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
      <TermsConditionsPopup isOpen={isTermsConditionsOpen} onClose={() => setIsTermsConditionsOpen(false)} />
    </footer>
  );
}
