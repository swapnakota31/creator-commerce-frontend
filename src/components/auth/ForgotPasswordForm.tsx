"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import FormError from "@/components/ui/FormError";
import FormSuccess from "@/components/ui/FormSuccess";
import { handleForgotPassword, type ForgotPasswordRequest } from "@/lib/api";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("idle");
    setIsLoading(true);

    try {
      // TODO: Replace with actual forgot password implementation
      const data: ForgotPasswordRequest = { email };
      await handleForgotPassword(data);

      setStatus("sent");
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8A2BE2]/90">Forgot password</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827]">Reset your login</h1>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Enter the email tied to your account. We’ll send a reset link instantly.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="reset-email" className="block text-sm font-medium text-[#111827]">
              Email address
            </label>
            <Input
              id="reset-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={isLoading}
            />
          </div>

          {status === "error" && error ? <FormError message={error} /> : null}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending reset link..." : "Send Reset Link"}
          </Button>
        </form>

        {status === "sent" ? (
          <FormSuccess message="Reset link sent successfully. Check your email to continue." />
        ) : null}

        <div className="text-center text-sm text-[#6B7280]">
          <Link href="/auth" className="font-semibold text-[#7B2CFF] hover:text-[#5b1bbb]">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
