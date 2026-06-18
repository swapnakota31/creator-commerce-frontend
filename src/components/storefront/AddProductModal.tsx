"use client";

// AddProductModal.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Implements PDF Section 6.2 — Paste Product URL flow:
//   Paste URL → metadata extraction → preview → edit → publish
//
// TODO (backend / extraction engine team):
//   1. POST the url to /api/products/extract
//   2. Backend extraction engine fetches the product page and returns:
//      { title, brand, description, image, price, currency, rating, affiliatePlatform }
//   3. On success, populate the preview fields below
//   4. On "Add to Store" click, POST to /api/products with final data
//   5. Supported platforms: Amazon, Flipkart, Myntra, Ajio, Meesho, Nykaa (PDF section 2)
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import {
  X,
  Link2,
  Loader2,
  CheckCircle2,
  ImageOff,
  ShoppingBag,
} from "lucide-react";

type ExtractedProduct = {
  title: string;
  brand: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  affiliatePlatform: string;
  creatorNote: string;
};

type Props = {
  onClose: () => void;
  // TODO: pass username from auth context when backend is ready
  username: string;
};

const SUPPORTED_PLATFORMS = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Ajio",
  "Meesho",
  "Nykaa",
];

export default function AddProductModal({ onClose, username }: Props) {
  const [url, setUrl] = useState("");
  const [step, setStep] = useState<"input" | "loading" | "preview" | "success">("input");
  const [error, setError] = useState("");
  const [extracted, setExtracted] = useState<ExtractedProduct | null>(null);

  function detectPlatform(url: string): string {
    if (url.includes("amazon")) return "Amazon";
    if (url.includes("flipkart")) return "Flipkart";
    if (url.includes("myntra")) return "Myntra";
    if (url.includes("ajio")) return "Ajio";
    if (url.includes("meesho")) return "Meesho";
    if (url.includes("nykaa")) return "Nykaa";
    return "Unknown";
  }

  async function handleExtract() {
    if (!url.trim()) {
      setError("Please paste a product URL.");
      return;
    }

    const platform = detectPlatform(url);
    if (platform === "Unknown") {
      setError("Unsupported platform. Try Amazon, Flipkart, Myntra, Ajio, Meesho, or Nykaa.");
      return;
    }

    setError("");
    setStep("loading");

    // TODO: replace this mock with real API call:
    // const res = await fetch("/api/products/extract", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ url }),
    // });
    // const data = await res.json();
    // setExtracted(data);

    // Mock extraction — remove when backend is ready
    await new Promise((r) => setTimeout(r, 1800));
    setExtracted({
      title: "Extracted Product Title",
      brand: "Brand Name",
      description: "Product description extracted from the page.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
      price: "9,999",
      currency: "₹",
      affiliatePlatform: platform,
      creatorNote: "",
    });
    setStep("preview");
  }

  async function handleSubmit() {
    if (!extracted) return;

    // TODO: replace with real API call:
    // await fetch("/api/products", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     ...extracted,
    //     affiliateUrl: url,
    //     username,
    //   }),
    // });

    setStep("success");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-100">
              <ShoppingBag size={15} className="text-violet-600" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Add Product</h2>
              <p className="text-[11px] text-slate-500">Paste any product link to add it to your store</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              flex h-8 w-8 items-center justify-center rounded-full
              border border-slate-200 text-slate-400
              transition-all hover:border-slate-300 hover:text-slate-600
            "
          >
            <X size={14} />
          </button>
        </div>

        <div className="p-6">

          {/* STEP 1 — Input */}
          {(step === "input" || step === "loading") && (
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Product URL
                </label>

                <div
                  className="
                    flex items-center gap-3 rounded-2xl
                    border border-slate-200 bg-slate-50 px-4 py-3
                    focus-within:border-violet-300 focus-within:bg-white
                    transition-all
                  "
                >
                  <Link2 size={16} className="shrink-0 text-slate-400" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleExtract()}
                    placeholder="https://www.amazon.in/product..."
                    disabled={step === "loading"}
                    className="
                      w-full bg-transparent text-sm text-slate-800
                      placeholder:text-slate-400 outline-none
                    "
                  />
                </div>

                {error && (
                  <p className="mt-2 text-xs text-red-500">{error}</p>
                )}
              </div>

              {/* Supported platforms */}
              <div>
                <p className="mb-2 text-[11px] font-medium text-slate-400">Supported platforms</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUPPORTED_PLATFORMS.map((p) => (
                    <span
                      key={p}
                      className="
                        rounded-full border border-slate-200
                        bg-white px-2.5 py-0.5
                        text-[11px] font-medium text-slate-600
                      "
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleExtract}
                disabled={step === "loading"}
                className="
                  w-full inline-flex items-center justify-center gap-2
                  rounded-full bg-violet-600 px-5 py-3
                  text-sm font-semibold text-white
                  transition-all duration-300 hover:bg-violet-700
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {step === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Extracting product details...
                  </>
                ) : (
                  "Extract Product"
                )}
              </button>
            </div>
          )}

          {/* STEP 2 — Preview & Edit */}
          {step === "preview" && extracted && (
            <div className="space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                {extracted.image ? (
                  <img
                    src={extracted.image}
                    alt={extracted.title}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-200">
                    <ImageOff size={20} className="text-slate-400" />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-600">
                    {extracted.affiliatePlatform}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-sm font-semibold text-slate-900">
                    {extracted.title}
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {extracted.currency}{extracted.price}
                  </p>
                </div>
              </div>

              {/* Editable creator note */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Your Recommendation Note
                </label>
                <textarea
                  value={extracted.creatorNote}
                  onChange={(e) =>
                    setExtracted({ ...extracted, creatorNote: e.target.value })
                  }
                  placeholder="Why do you recommend this? What do you love about it?"
                  rows={3}
                  className="
                    w-full rounded-2xl border border-slate-200 bg-slate-50
                    px-4 py-3 text-sm text-slate-800
                    placeholder:text-slate-400 outline-none
                    focus:border-violet-300 focus:bg-white
                    transition-all resize-none
                  "
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setStep("input")}
                  className="
                    flex-1 rounded-full border border-slate-200
                    bg-white px-4 py-2.5
                    text-sm font-medium text-slate-600
                    transition-all hover:bg-slate-50
                  "
                >
                  Back
                </button>

                <button
                  onClick={handleSubmit}
                  className="
                    flex-1 rounded-full bg-violet-600 px-4 py-2.5
                    text-sm font-semibold text-white
                    transition-all hover:bg-violet-700
                  "
                >
                  Add to Store
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — Success */}
          {step === "success" && (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 size={28} className="text-emerald-500" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Product Added!
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                It&apos;s now live on your store at{" "}
                <span className="font-medium text-violet-600">
                  linknest.com/store/{username}
                </span>
              </p>

              <button
                onClick={onClose}
                className="
                  mt-6 rounded-full bg-violet-600 px-6 py-2.5
                  text-sm font-semibold text-white
                  transition-all hover:bg-violet-700
                "
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
