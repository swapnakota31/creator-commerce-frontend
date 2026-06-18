"use client";

import { useState } from "react";
import LoadingState from "@/components/onboarding/LoadingState";
import StoreSetupForm from "@/components/onboarding/StoreSetupForm";
import HeroCarousel from "@/components/onboarding/HeroCarousel";

export default function OnboardingPage() {
  const [status, setStatus] = useState<"form" | "loading">("form");

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        {status === "form" ? (
          <>
            {/* Hero Carousel Section */}
            <HeroCarousel />

            {/* Form Section */}
            <div className="rounded-2xl bg-white border border-[#E5E7EB] p-8 sm:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <StoreSetupForm onSubmit={() => setStatus("loading")} />
            </div>
          </>
        ) : (
          <LoadingState />
        )}
      </div>
    </main>
  );
}
