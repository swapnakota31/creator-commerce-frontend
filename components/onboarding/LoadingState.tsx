"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  { label: "Creating storefront", status: "done" },
  { label: "Adding first product", status: "done" },
  { label: "Finalizing setup", status: "pending" },
];

export default function LoadingState() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setCurrentStep(1), 250),
      window.setTimeout(() => setCurrentStep(2), 500),
      window.setTimeout(() => router.push("/dashboard"), 1100),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [router]);

  return (
    <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] text-white shadow-[0_12px_40px_rgba(161,0,255,0.18)]">
        <span className="text-3xl">⏳</span>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8A2BE2]/90">Creating Your Storefront...</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
          Setting everything up for you.
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#6B7280]">
          One moment while we prepare your creator storefront.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {steps.map((step, index) => {
          const isActive = currentStep >= index + 1;
          const icon = isActive ? "✓" : index === 2 ? "⏳" : "●";
          const textColor = isActive ? "text-[#111827]" : "text-[#6B7280]";

          return (
            <div key={step.label} className="flex items-center gap-3 rounded-3xl border border-[#E5E7EB] bg-[#F8F8FC] px-4 py-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-2xl ${isActive ? "bg-[#E9D7FF] text-[#7B2CFF]" : "bg-white text-[#6B7280]"}`}>
                {icon}
              </div>
              <div>
                <p className={`text-sm font-semibold ${textColor}`}>{step.label}</p>
                <p className="text-xs text-[#9CA3AF]">
                  {isActive ? "Completed" : index === 2 ? "Pending" : "In progress"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
