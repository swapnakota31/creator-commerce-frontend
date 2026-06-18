"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import FormError from "@/components/ui/FormError";
import { handleLogin, type LoginRequest } from "@/lib/api";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual login implementation
      const data: LoginRequest = { email, password };
      await handleLogin(data);

      // Navigate to dashboard after successful login
      window.setTimeout(() => {
        router.push("/creator/alexrivera_official/dashboard");
      }, 300);
    } catch (err) {
      setError("Email or password is incorrect.");
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="login-email" className="block text-sm font-medium text-[#111827]">
          Email
        </label>
        <Input
          id="login-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="login-password" className="block text-sm font-medium text-[#111827]">
          Password
        </label>
        <Input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          disabled={isLoading}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-[#6B7280]">&nbsp;</span>
        <Link href="/forgot-password" className="text-sm font-semibold text-[#7B2CFF] hover:text-[#5b1bbb]">
          Forgot Password?
        </Link>
      </div>

      {error ? <FormError message={error} /> : null}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}
