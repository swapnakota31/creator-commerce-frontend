"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Store, Link2, Package, CheckCircle2, LoaderCircle } from "lucide-react";

const steps = [
  { label: "Setting up your creator space", icon: Store },
  { label: "Generating your store URL", icon: Link2 },
  { label: "Processing your first product", icon: Package },
  { label: "Preparing your dashboard", icon: LoaderCircle },
];

export default function LoadingState() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => {
        setCompletedSteps([0]);
        setCurrentStep(1);
      }, 600),
      window.setTimeout(() => {
        setCompletedSteps([0, 1]);
        setCurrentStep(2);
      }, 1200),
      window.setTimeout(() => {
        setCompletedSteps([0, 1, 2]);
        setCurrentStep(3);
      }, 1800),
      window.setTimeout(() => {
        setCompletedSteps([0, 1, 2, 3]);
      }, 2400),
      window.setTimeout(() => router.push("/creator/alexrivera_official/dashboard"), 2800),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Content */}
      <div className="relative rounded-3xl border border-white/50 bg-white/95 backdrop-blur-xl p-4 sm:p-6 shadow-[0_25px_100px_rgba(0,0,0,0.3)] max-w-md w-full animate-in fade-in zoom-in duration-500">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 pointer-events-none rounded-3xl" />

        <div className="relative z-10">
          {/* Header Icon */}
          

          {/* Title */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8A2BE2]">
              ✨ Creating Your Storefront
            </p>
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
              Setting everything up for you.
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              One moment while we prepare your creator storefront.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-8 space-y-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isCompleted = completedSteps.includes(index);
              const isActive = currentStep === index;

              return (
                <div
                  key={step.label}
                  className={`relative flex items-center gap-4 rounded-2xl border px-4 py-4 transition-all duration-500 ${
                    isCompleted
                      ? "border-green-200 bg-green-50"
                      : isActive
                        ? "border-[#A100FF]/30 bg-[#A100FF]/5 ring-2 ring-[#A100FF]/20"
                        : "border-[#E5E7EB] bg-white"
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 flex-shrink-0 ${
                      isCompleted
                        ? "bg-green-100 text-green-600"
                        : isActive
                          ? "bg-[#A100FF] text-white"
                          : "bg-[#F3F4F6] text-[#9CA3AF]"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : isActive ? (
                      <IconComponent className="h-5 w-5 animate-spin" />
                    ) : (
                      <IconComponent className="h-5 w-5" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isCompleted
                          ? "text-green-700"
                          : isActive
                            ? "text-[#111827]"
                            : "text-[#6B7280]"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                      {isCompleted ? "✓ Completed" : isActive ? "In progress..." : "Pending"}
                    </p>
                  </div>

                  {/* Animated line for active step */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl border border-[#A100FF]/30 animate-pulse pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom message */}
          <p className="mt-6 text-xs text-center text-[#9CA3AF]">
            Setting up your creator storefront · This usually takes less than 30 seconds
          </p>
        </div>
      </div>

      <style>{`
        @keyframes in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in {
          animation: in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
