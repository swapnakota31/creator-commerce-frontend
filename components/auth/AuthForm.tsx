"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const tabs = [
  { id: "signup", label: "Sign Up" },
  { id: "login", label: "Login" },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M19.6 10.23c0-.7-.06-1.37-.18-2.03H10v3.84h5.4c-.24 1.28-.97 2.36-2.07 3.08v2.56h3.34c1.97-1.82 3.1-4.5 3.1-7.45Z" fill="#4285F4" />
      <path d="M10 20c2.7 0 4.96-.9 6.62-2.44l-3.34-2.56c-.92.62-2.1.99-3.28.99-2.52 0-4.66-1.7-5.42-3.98H1.18v2.49C2.84 17.84 6.2 20 10 20Z" fill="#34A853" />
      <path d="M4.58 11.01c-.22-.64-.34-1.33-.34-2.03 0-.7.12-1.39.34-2.03V4.46H1.18A9.98 9.98 0 0 0 0 9c0 1.62.38 3.15 1.18 4.54l3.4-2.53Z" fill="#FBBC05" />
      <path d="M10 3.98c1.47 0 2.8.51 3.85 1.51l2.88-2.88C14.95.94 12.7 0 10 0 6.2 0 2.84 2.16 1.18 5.46l3.4 2.49C5.34 5.68 7.48 3.98 10 3.98Z" fill="#EA4335" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M16.665 7.16c-.092-1.03.254-1.8.84-2.38-.81-1.08-2.07-1.37-2.52-1.39-1.06-.11-2.08.62-2.62.62-.55 0-1.4-.6-2.3-.58-1.18.02-2.28.69-2.89 1.76-1.24 2.14-.32 5.3.88 7.04.58.81 1.27 1.72 2.18 1.68.87-.04 1.2-.55 2.25-.55 1.04 0 1.34.55 2.28.53.98-.02 1.6-.82 2.18-1.63.7-.99.99-1.95 1.01-2.01-.03-.01-1.95-.75-1.98-2.98Zm-1.33-3.18c.6-.72 1.01-1.72.9-2.72-.87.04-1.92.58-2.55 1.3-.56.63-1.05 1.68-.92 2.67.98.08 1.98-.5 2.57-1.25Z" fill="#111827" />
    </svg>
  );
}

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"signup" | "login">("signup");

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-xl space-y-3 text-center">
        <div className="inline-flex items-center rounded-full bg-[#F3E8FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
          Creator commerce
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
          Build your storefront. Share what matters.
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-[#6B7280]">
          Premium creator tools, set up in minutes.
        </p>
      </div>

      <div className="mx-auto max-w-xl rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
        <div className="grid gap-6">
          <div className="flex rounded-full bg-[#F8F8FC] p-1 text-sm font-semibold leading-none text-[#6B7280]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as "signup" | "login")}
                className={`flex-1 rounded-full px-4 py-3 transition ${
                  activeTab === tab.id
                    ? "bg-white text-[#111827] shadow-sm"
                    : "hover:text-[#111827]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-3">
            <button 
              type="button"
              onClick={() => setActiveTab('signup')}
              className="inline-flex w-full items-center justify-center gap-3 rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold transition hover:bg-[#F8F8FC]"
            >
              <GoogleIcon />
              Continue with Google
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('signup')}
              className="inline-flex w-full items-center justify-center gap-3 rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold transition hover:bg-[#F8F8FC]"
            >
              <AppleIcon />
              Continue with Apple
            </button>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#E5E7EB]" />
            <div className="relative mx-auto inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#6B7280]">
              OR
            </div>
          </div>

          {activeTab === "signup" ? <SignupForm /> : <LoginForm />}
        </div>
      </div>

      <div className="mx-auto max-w-xl text-center text-sm text-[#6B7280]">
        {activeTab === "signup" ? (
          <button type="button" onClick={() => setActiveTab("login")} className="font-semibold text-[#7B2CFF] hover:text-[#5b1bbb]">
            Already have an account? Log In
          </button>
        ) : (
          <button type="button" onClick={() => setActiveTab("signup")} className="font-semibold text-[#7B2CFF] hover:text-[#5b1bbb]">
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}
