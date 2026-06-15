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
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Need of LinkShelf", href: "#need" },
  { label: "Why creators need", href: "#why-creators" },
  { label: "How to become an affiliate", href: "#affiliate" },
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
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl" : "border-white/20 bg-white"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-[#111827] transition duration-300 hover:text-[#B4FF39]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#B4FF39]/10 text-[#A4D900] ring-1 ring-[#B4FF39]/20 shadow-sm sm:h-11 sm:w-11">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="sm:h-5 sm:w-5"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base md:text-lg">LinkShelf</span>
          </a>

          <nav className="hidden items-center gap-1 text-xs font-medium text-[#374151] lg:flex">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 transition duration-300 hover:text-[#B4FF39] hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#login"
              className="hidden rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#111827] transition duration-300 hover:border-[#B4FF39] hover:text-[#B4FF39] sm:inline-flex md:px-4 md:py-2 md:text-sm"
            >
              Login
            </a>
            <a
              href="#get-started"
              className="hidden rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-[#111827] shadow-sm transition duration-300 hover:border-[#B4FF39] hover:bg-[#B4FF39] hover:text-[#111827] sm:inline-flex md:px-4 md:py-2 md:text-sm"
            >
              Get Started
            </a>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm transition duration-300 hover:border-slate-300 hover:bg-slate-50 lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d={mobileOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-200"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#111827] transition duration-300 hover:bg-slate-50 hover:text-[#B4FF39] active:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4 sm:flex-row">
            <a
              href="#login"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition duration-300 hover:border-[#B4FF39] hover:text-[#B4FF39] sm:w-auto"
            >
              Login
            </a>
            <a
              href="#get-started"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition duration-300 hover:border-[#B4FF39] hover:bg-[#B4FF39] hover:text-[#111827] sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
