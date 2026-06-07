"use client";

import { useState } from "react";
import LoadingState from "@/components/onboarding/LoadingState";
import StoreSetupForm from "@/components/onboarding/StoreSetupForm";

export default function OnboardingPage() {
  const [status, setStatus] = useState<"form" | "loading">("form");

  return (
    <main className="min-h-screen bg-[#F8F8FC] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-10 rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A2BE2]/90">Onboarding</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
            Launch your storefront.
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#6B7280]">
            Add your store name and first affiliate link. We’ll handle the rest.
          </p>
        </div>

        {status === "form" ? <StoreSetupForm onSubmit={() => setStatus("loading")} /> : <LoadingState />}
      </div>
    </main>
  );
}
