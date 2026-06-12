"use client";

import { useState, useEffect, useRef } from "react";
import { X, Link2, Plus, Check, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { useStore } from "@/lib/StoreContext";

// ─── Platform detection ──────────────────────────────────────────────────────
// Accurate domain→platform mapping. Covers Indian + global affiliate platforms.
const PLATFORM_MAP: { pattern: RegExp; label: string }[] = [
  { pattern: /amazon\.(in|com|co\.uk|de|fr|jp|ca|com\.au)/i, label: "Amazon" },
  { pattern: /flipkart\.com/i,                                 label: "Flipkart" },
  { pattern: /myntra\.com/i,                                   label: "Myntra" },
  { pattern: /ajio\.com/i,                                     label: "Ajio" },
  { pattern: /meesho\.com/i,                                   label: "Meesho" },
  { pattern: /nykaa\.com/i,                                    label: "Nykaa" },
  { pattern: /nykaafashion\.com/i,                             label: "Nykaa Fashion" },
  { pattern: /croma\.com/i,                                    label: "Croma" },
  { pattern: /reliancedigital\.in/i,                           label: "Reliance Digital" },
  { pattern: /tatacliq\.com/i,                                 label: "Tata Cliq" },
  { pattern: /snapdeal\.com/i,                                 label: "Snapdeal" },
  { pattern: /shopsy\.in/i,                                    label: "Shopsy" },
  { pattern: /ikea\.com/i,                                     label: "IKEA" },
  { pattern: /apple\.com/i,                                    label: "Apple" },
  { pattern: /samsung\.com/i,                                  label: "Samsung" },
  { pattern: /boat-lifestyle\.com/i,                           label: "boAt" },
  { pattern: /noise\.com/i,                                    label: "Noise" },
  { pattern: /bewakoof\.com/i,                                 label: "Bewakoof" },
  { pattern: /shopify\.com/i,                                  label: "Shopify Store" },
];

function detectPlatform(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    for (const { pattern, label } of PLATFORM_MAP) {
      if (pattern.test(hostname)) return label;
    }
    // Fallback: capitalise the second-level domain
    const parts = hostname.replace(/^www\./, "").split(".");
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  } catch {
    return "Other";
  }
}

// ─── Metadata extraction via allorigins proxy ────────────────────────────────
// Uses allorigins.win as a CORS proxy to fetch the actual product page HTML,
// then parses og: meta tags — the most reliable source for title + image
// across all ecommerce platforms.
type ExtractedMeta = {
  title: string;
  image: string;
  description: string;
  siteName: string;
};

async function extractMetaFromUrl(url: string): Promise<ExtractedMeta> {
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

  const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(12000) });
  if (!res.ok) throw new Error("Failed to fetch via proxy");

  const data = await res.json();
  const html: string = data.contents ?? "";

  if (!html) throw new Error("Empty response");

  // Parse meta tags from raw HTML string (no DOM needed)
  const getMeta = (property: string): string => {
    // Match both property= and name= variants
    const patterns = [
      new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`, "i"),
      new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${property}["']`, "i"),
      new RegExp(`<meta[^>]+name=["']${property}["'][^>]+content=["']([^"']+)["']`, "i"),
      new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${property}["']`, "i"),
    ];
    for (const p of patterns) {
      const m = html.match(p);
      if (m?.[1]) return m[1].trim();
    }
    return "";
  };

  // Title priority: og:title > twitter:title > <title> tag
  let title =
    getMeta("og:title") ||
    getMeta("twitter:title") ||
    html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() ||
    "";

  // Image priority: og:image > twitter:image > first large <img>
  let image =
    getMeta("og:image") ||
    getMeta("og:image:secure_url") ||
    getMeta("twitter:image") ||
    getMeta("twitter:image:src") ||
    "";

  // If image URL is relative, make it absolute
  if (image && !image.startsWith("http")) {
    try {
      const base = new URL(url);
      image = new URL(image, base.origin).href;
    } catch { /* ignore */ }
  }

  const description =
    getMeta("og:description") ||
    getMeta("twitter:description") ||
    getMeta("description") ||
    "";

  const siteName = getMeta("og:site_name") || "";

  // Clean HTML entities from title
  title = title
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();

  return { title, image, description, siteName };
}

// ─── Polling simulation (aligns with backend Option 1: POST→PENDING→poll) ───
// Real implementation: POST /api/products/publish → get submissionId
//                      GET /submissions/{id} every 3s until COMPLETED
// Per backend answer: if <5s, skip PENDING and return result directly.
// This function simulates that contract so the UI is wired correctly.
async function submitToBackend(url: string): Promise<ExtractedMeta> {
  // In production, replace this with:
  //   const { submissionId } = await fetch('/api/products/publish', { method:'POST', body: JSON.stringify({ url }) }).then(r=>r.json())
  //   then poll GET /submissions/{submissionId}
  return extractMetaFromUrl(url);
}

// ─── Types & constants ───────────────────────────────────────────────────────
const TAGS = [
  "Daily Driver", "Focus Setup", "Creator Favorite", "Productivity Pick",
  "Budget Favorite", "Workspace Essential", "Study Pick", "Travel Must-Have",
  "Gaming Setup", "Home Decor",
];

type Step = "url" | "extracting" | "details" | "success" | "error";

type Props = { onClose: () => void };

// ─── Component ───────────────────────────────────────────────────────────────
export default function AddProductModal({ onClose }: Props) {
  const { addProduct } = useStore();

  const [step, setStep] = useState<Step>("url");
  const [url, setUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [pollSeconds, setPollSeconds] = useState(0);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [extracted, setExtracted] = useState<ExtractedMeta>({
    title: "", image: "", description: "", siteName: "",
  });

  const [form, setForm] = useState({
    title: "",
    tag: TAGS[0],
    creatorNote: "",
    affiliatePlatform: "",
    affiliateUrl: "",
    image: "",
  });

  // Cleanup poll timer on unmount
  useEffect(() => {
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, []);

  // ── Extract ──────────────────────────────────────────────────────────────
  const handleExtract = async () => {
    if (!url.trim()) return;

    let trimmedUrl = url.trim();
    if (!trimmedUrl.startsWith("http")) trimmedUrl = "https://" + trimmedUrl;

    const platform = detectPlatform(trimmedUrl);

    setStep("extracting");
    setErrorMsg("");
    setPollSeconds(0);

    // Start a visual poll counter (mirrors backend polling UX)
    pollRef.current = setInterval(() => {
      setPollSeconds((s) => s + 1);
    }, 1000);

    try {
      const meta = await submitToBackend(trimmedUrl);

      if (pollRef.current) clearInterval(pollRef.current);

      setExtracted(meta);
      setForm({
        title: meta.title,
        tag: TAGS[0],
        creatorNote: meta.description.slice(0, 120),
        affiliatePlatform: platform,
        affiliateUrl: trimmedUrl,
        image: meta.image,
      });
      setStep("details");
    } catch (err) {
      if (pollRef.current) clearInterval(pollRef.current);
      // Per backend spec: if extraction fails, store still gets created.
      // Surface error but allow manual entry.
      setErrorMsg(
        "Could not auto-extract product info. You can fill in the details manually."
      );
      setForm((p) => ({
        ...p,
        affiliatePlatform: platform,
        affiliateUrl: trimmedUrl,
      }));
      setStep("error");
    }
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = () => {
    if (!form.title.trim() || !form.creatorNote.trim()) return;

    addProduct({
      title: form.title,
      tag: form.tag,
      creatorNote: form.creatorNote,
      affiliatePlatform: form.affiliatePlatform,
      affiliateUrl: form.affiliateUrl,
      image: form.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    });
    setStep("success");
    setTimeout(onClose, 1800);
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* Gradient top strip */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors z-10"
        >
          <X size={14} />
        </button>

        <div className="p-6">

          {/* ── STEP: URL input ── */}
          {step === "url" && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Add a Product</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Paste any product link — Amazon, Flipkart, IKEA, Myntra and more.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border-2 border-violet-200 bg-violet-50 px-4 py-3 focus-within:border-violet-400 transition-colors">
                <Link2 size={15} className="flex-shrink-0 text-violet-500" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.amazon.in/dp/..."
                  className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                  onKeyDown={(e) => e.key === "Enter" && handleExtract()}
                  autoFocus
                />
              </div>

              {/* Supported platforms grid */}
              <div>
                <p className="text-xs text-slate-400 mb-2">Works with</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Amazon", "Flipkart", "Myntra", "Ajio", "Meesho", "Nykaa", "IKEA", "Croma", "Snapdeal", "boAt", "+ more"].map((p) => (
                    <span key={p} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-500">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleExtract}
                disabled={!url.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-violet-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Extract Product Info →
              </button>
            </div>
          )}

          {/* ── STEP: Extracting / polling ── */}
          {step === "extracting" && (
            <div className="flex flex-col items-center gap-5 py-8 text-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <Loader2 size={28} className="animate-spin text-violet-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Extracting product info…</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Reading title, image and description from the page.
                </p>
              </div>
              {/* Visual poll counter — mirrors backend polling UX */}
              <div className="flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-xs text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                </span>
                Checking server… {pollSeconds}s
              </div>
            </div>
          )}

          {/* ── STEP: Error (extraction failed) — allow manual entry per backend spec ── */}
          {step === "error" && (
            <div className="space-y-5">
              <div className="flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-200 p-4">
                <AlertCircle size={16} className="flex-shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-800">Auto-extract failed</p>
                  <p className="mt-0.5 text-xs text-amber-700">{errorMsg}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">Add Manually</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Fill in the details yourself — your store will still be created.
                </p>
              </div>

              {/* Manual form */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Product Title *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    placeholder="e.g. IKEA DVALA Fitted Sheet"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your Note *</label>
                  <textarea
                    value={form.creatorNote}
                    onChange={(e) => setForm((p) => ({ ...p, creatorNote: e.target.value }))}
                    placeholder="Why do you recommend this?"
                    rows={2}
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Image URL (optional)</label>
                  <input
                    type="url"
                    value={form.image}
                    onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))}
                    placeholder="https://..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep("url")}
                  className="flex items-center gap-1.5 rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <RefreshCw size={13} />
                  Try Again
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.title.trim() || !form.creatorNote.trim()}
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <Plus size={14} />
                  Add to Store
                </button>
              </div>
            </div>
          )}

          {/* ── STEP: Details review ── */}
          {step === "details" && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Review & Publish</h2>
                <p className="mt-1 text-sm text-slate-500">Edit the details before adding to your store.</p>
              </div>

              {/* Image preview */}
              <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-slate-100">
                {form.image ? (
                  <img
                    src={form.image}
                    alt="preview"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // If image fails to load, hide it
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-400 text-sm">
                    No image found
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-700">
                  via {form.affiliatePlatform}
                </span>
              </div>

              {/* Title */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Product Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  placeholder="e.g. MacBook Air M4"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400 focus:bg-white transition-colors"
                />
              </div>

              {/* Creator Note */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your Note *</label>
                <textarea
                  value={form.creatorNote}
                  onChange={(e) => setForm((p) => ({ ...p, creatorNote: e.target.value }))}
                  placeholder="Why do you recommend this?"
                  rows={2}
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400 focus:bg-white transition-colors"
                />
              </div>

              {/* Tag + Platform */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tag</label>
                  <select
                    value={form.tag}
                    onChange={(e) => setForm((p) => ({ ...p, tag: e.target.value }))}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400"
                  >
                    {TAGS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Platform</label>
                  <input
                    type="text"
                    value={form.affiliatePlatform}
                    onChange={(e) => setForm((p) => ({ ...p, affiliatePlatform: e.target.value }))}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-violet-400 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setStep("url")}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.title.trim() || !form.creatorNote.trim()}
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 py-3 text-sm font-semibold text-white hover:opacity-90 hover:shadow-lg hover:shadow-violet-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Plus size={14} />
                  Add to Store
                </button>
              </div>
            </div>
          )}

          {/* ── STEP: Success ── */}
          {step === "success" && (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-200">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Added to your store!</h2>
                <p className="mt-1 text-sm text-slate-500">
                  <span className="font-semibold text-violet-600">{form.title}</span> is now live in Recently Added.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}