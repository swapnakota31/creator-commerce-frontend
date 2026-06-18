"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#111827] placeholder:text-[#9CA3AF] transition duration-300 focus:border-[#8A2BE2] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/15 ${className}`}
      {...props}
    />
  );
}
