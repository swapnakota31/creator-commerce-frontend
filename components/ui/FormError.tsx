"use client";

interface FormErrorProps {
  message: string;
  field?: string;
}

export default function FormError({ message, field }: FormErrorProps) {
  return (
    <div className="flex items-start gap-3 rounded-3xl border border-[#FECACA] bg-[#FEF2F2] p-4">
      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EF4444]">
        <span className="text-xs font-bold text-white">!</span>
      </div>
      <div className="flex-1">
        {field ? <p className="text-xs font-semibold text-[#991B1B]">{field}</p> : null}
        <p className="text-sm text-[#DC2626]">{message}</p>
      </div>
    </div>
  );
}
