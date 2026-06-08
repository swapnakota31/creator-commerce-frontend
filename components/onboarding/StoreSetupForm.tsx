"use client";

import { FormEvent, useState } from "react";
import { Store, Link2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import FormError from "@/components/ui/FormError";
import { handleCreateStore, type CreateStoreRequest } from "@/lib/api";

interface StoreSetupFormProps {
  onSubmit: () => void;
}

export default function StoreSetupForm({ onSubmit }: StoreSetupFormProps) {
  const [storeName, setStoreName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isFormValid = storeName.trim() !== "" && productUrl.trim() !== "" && isValidUrl(productUrl);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!storeName || !productUrl) {
      setError("Please add your store name and product link.");
      return;
    }

    if (!isValidUrl(productUrl)) {
      setError("Please enter a valid product URL.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual store creation implementation
      const data: CreateStoreRequest = { storeName, productUrl };
      await handleCreateStore(data);

      onSubmit();
    } catch (err) {
      setError("Failed to create store. Please try again.");
      setIsLoading(false);
    }
  }

  function isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  return (
    <div className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-md p-8 shadow-[0_20px_60px_rgba(161,0,255,0.12)] overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 pointer-events-none" />

      <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
        {/* Store Name Input */}
        <div className="space-y-3">
          <label htmlFor="store-name" className="block text-sm font-semibold text-[#111827]">
            Store Name
          </label>
          <div className="relative">
            <Store className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8A2BE2]/60 pointer-events-none" />
            <Input
              id="store-name"
              type="text"
              value={storeName}
              onChange={(event) => setStoreName(event.target.value)}
              placeholder="Your brand name"
              disabled={isLoading}
              className="pl-12 bg-white/90 hover:bg-white focus:bg-white transition-colors duration-300"
            />
          </div>
        </div>

        {/* Product URL Input */}
        <div className="space-y-3">
          <label htmlFor="product-url" className="block text-sm font-semibold text-[#111827]">
            Affiliate / Product URL
          </label>
          <div className="relative">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8A2BE2]/60 pointer-events-none" />
            <Input
              id="product-url"
              type="url"
              value={productUrl}
              onChange={(event) => setProductUrl(event.target.value)}
              placeholder="https://"
              disabled={isLoading}
              className="pl-12 bg-white/90 hover:bg-white focus:bg-white transition-colors duration-300"
            />
          </div>
        </div>

        {error ? <FormError message={error} /> : null}

        {/* Smart Button State */}
        <Button
          type="submit"
          className={`w-full transition-all duration-500 ${
            isFormValid && !isLoading
              ? "bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] text-white shadow-[0_18px_60px_rgba(161,0,255,0.18)] hover:-translate-y-0.5 hover:shadow-[0_20px_80px_rgba(161,0,255,0.24)] active:translate-y-0.5"
              : "bg-[#E9D7FF] text-[#7B2CFF] shadow-sm cursor-not-allowed opacity-70"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="inline-block animate-spin">⏳</span>
              Launching storefront...
            </span>
          ) : (
            "Launch Your Storefront"
          )}
        </Button>

        <p className="text-sm leading-6 text-[#6B7280] text-center">
          ✨ Your store and first product will be set up automatically.
        </p>
      </form>
    </div>
  );
}
