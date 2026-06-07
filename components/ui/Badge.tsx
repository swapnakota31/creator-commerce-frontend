"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full bg-[#F3E8FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED] ${className}`}>
      {children}
    </span>
  );
}
