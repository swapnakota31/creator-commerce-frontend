import AuthForm from "@/components/auth/AuthForm";

export default function AuthPage() {
  return (
    <main >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8A2BE2]/90">LinkShells</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
            Start your creator journey.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6B7280]">
            One premium onboarding flow for building a storefront without the friction.
          </p>
        </div>
        <AuthForm />
      </div>
    </main>
  );
}
