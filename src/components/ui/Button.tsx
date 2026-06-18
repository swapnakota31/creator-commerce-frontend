"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] text-white shadow-[0_18px_60px_rgba(161,0,255,0.18)] hover:-translate-y-0.5 hover:shadow-[0_20px_80px_rgba(161,0,255,0.24)] active:translate-y-0.5",
  secondary:
    "bg-white border border-[#E5E7EB] text-[#111827] shadow-sm hover:bg-[#F8F8FC]",
  ghost: "bg-transparent text-[#111827] hover:bg-[#F3F4F6]",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A100FF]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
