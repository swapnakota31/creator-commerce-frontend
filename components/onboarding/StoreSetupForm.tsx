"use client";

import { FormEvent, useState } from "react";
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
    <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <label htmlFor="store-name" className="block text-sm font-medium text-[#111827]">
            Store Name
          </label>
          <Input
            id="store-name"
            type="text"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
            placeholder="Your brand name"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="product-url" className="block text-sm font-medium text-[#111827]">
            Affiliate / Product URL
          </label>
          <Input
            id="product-url"
            type="url"
            value={productUrl}
            onChange={(event) => setProductUrl(event.target.value)}
            placeholder="https://"
            disabled={isLoading}
          />
        </div>

        {error ? <FormError message={error} /> : null}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Launching storefront..." : "Launch Your Storefront"}
        </Button>

        <p className="text-sm leading-6 text-[#6B7280]">
          Your store and first product will be set up automatically.
        </p>
      </form>
    </div>
  );
}
