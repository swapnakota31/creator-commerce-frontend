"use client";

interface FormSuccessProps {
  message: string;
}

export default function FormSuccess({ message }: FormSuccessProps) {
  return (
    <div className="flex items-start gap-3 rounded-3xl border border-[#DCFCE7] bg-[#F0FDF4] p-4">
      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
        <span className="text-xs font-bold text-white">✓</span>
      </div>
      <div className="flex-1">
        <p className="text-sm text-[#166534]">{message}</p>
      </div>
    </div>
  );
}
