"use client";

import { useEffect, useState } from "react";

export interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Templates", href: "#templates" },
  { label: "Solutions", href: "#solutions" },
  { label: "Affiliates", href: "#affiliates" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar({ items = defaultNavItems }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]" : "bg-transparent"
      }`}
    >
      <div className="container-shell py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8A2BE2] text-white shadow-lg shadow-purple-500/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <span className="text-2xl font-black tracking-tighter text-[#111827]">LinkNest</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {items.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors">
                {item.label}
              </a>
            ))}
          </nav>


          <div className="flex items-center gap-4">
            <a href="#login" className="hidden sm:block text-sm font-bold text-[#111827] hover:text-[#8A2BE2] transition-colors">
              Login
            </a>
            <a
              href="#get-started"
              className="brand-gradient rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#8A2BE2]/20 transition-transform hover:scale-105"
            >
              Get Started
            </a>
            <button 
              className="lg:hidden p-2 text-[#111827]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-[#E5E7EB] p-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-base font-medium text-[#111827]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr />
            <a href="#login" className="text-base font-bold text-[#111827]">Login</a>
          </nav>
        </div>
      )}
    </header>
  );
}
