"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] ${className}`}>
      {children}
    </div>
  );
}
