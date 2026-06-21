import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Star,
  FileText,
  MessageSquareQuote,
  BadgeCheck,
} from "lucide-react";

import { products } from "@/lib/mockData";
import ViewProductButton from "@/components/storefront/ViewProductButton";
import { getProductBySlug, type BackendProduct } from "@/lib/api";
import type { Product } from "@/lib/StoreContext";

type Props = {
  params: Promise<{
    id: string;
    username: string;
  }>;

  searchParams: Promise<{
    from?: string;
    collection?: string;
  }>;
};

function mapBackendProductToProduct(bp: BackendProduct): Product {
  const primaryLink = bp.productLinks?.find((l) => l.isPrimary) || bp.productLinks?.[0];
  const affUrl = primaryLink?.affiliateUrl || primaryLink?.originalUrl || "#";
  const affPlatform = primaryLink?.platform || bp.sourcePlatform || "Amazon";

  return {
    id: bp.id,
    title: bp.title,
    category: bp.category,
    subcategory: bp.subcategory || undefined,
    brand: bp.brand,
    tag: bp.category || "Recommendation",
    creatorNote: bp.shortDescription || bp.fullDescription || "Creator recommended pick!",
    description: bp.fullDescription || bp.shortDescription || undefined,
    summary: bp.shortDescription || undefined,
    seoTitle: bp.title,
    metaDescription: bp.shortDescription || undefined,
    slug: bp.slug,
    tags: [bp.category, bp.brand].filter(Boolean) as string[],
    affiliatePlatform: affPlatform,
    affiliateUrl: affUrl,
    sourcePlatform: bp.sourcePlatform,
    sourceProductId: bp.sourceProductId,
    currency: bp.currency === "INR" ? "₹" : bp.currency === "USD" ? "$" : bp.currency,
    price: bp.price,
    rating: bp.rating || "4.5",
    reviewCount: String(bp.reviewCount || 0),
    availability: bp.isActive ? "In Stock" : "Out of Stock",
    image: bp.primaryImageUrl,
    images: [bp.primaryImageUrl],
    specifications: {},
    isNew: Date.now() - new Date(bp.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000,
    addedAt: new Date(bp.createdAt).getTime(),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const bp = await getProductBySlug(id);
    const title = bp.title;
    const description = bp.shortDescription || bp.fullDescription || "Creator recommended pick!";
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: [{ url: bp.primaryImageUrl }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [bp.primaryImageUrl],
      },
    };
  } catch (error) {
    // Fallback to mock lookup for metadata
    const mockId = isNaN(Number(id)) ? 1 : Number(id);
    const product = products.find((p) => p.id === mockId || p.slug === id);
    if (!product) return { title: "Product Not Found" };
    return {
      title: product.seoTitle ?? product.title,
      description: product.metaDescription ?? product.description,
      openGraph: {
        title: product.seoTitle ?? product.title,
        description: product.metaDescription ?? product.description,
        images: [{ url: product.image }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: product.seoTitle ?? product.title,
        description: product.metaDescription ?? product.description,
        images: [product.image],
      },
    };
  }
}

export default async function ProductDetailPage({ params, searchParams }: Props) {
  const { id, username } = await params;
  const { from, collection } = await searchParams;

  let product: Product | undefined;

  try {
    const bp = await getProductBySlug(id);
    product = mapBackendProductToProduct(bp);
  } catch (err) {
    console.warn("[ProductDetail] Failed to load product from API, falling back to mock:", err);
    const mockId = isNaN(Number(id)) ? -1 : Number(id);
    const mockProduct = products.find((p) => p.id === mockId || p.slug === id);
    if (mockProduct) {
      product = mockProduct as Product;
    }
  }

  if (!product) {
    notFound();
  }

  const backHref =
    collection
      ? `/store/${username}/collections/${collection}`
      : from === "recent"
      ? `/store/${username}`
      : `/store/${username}/products`;

  const backLabel =
    collection
      ? "Back to Collection"
      : from === "recent"
      ? "Back to Store"
      : "Back to Recommendations";

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-6">

        <Link
          href={backHref}
          className="
            inline-flex items-center gap-2 rounded-full
            border border-slate-200 bg-white px-4 py-2
            text-sm font-medium text-slate-700
            transition-all duration-300
            hover:border-violet-300 hover:text-violet-600
          "
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>

        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-6 p-5 lg:grid-cols-2">

            {/* Image + gallery */}
            <div className="space-y-3">
              <img
                src={product.image}
                alt={product.title}
                className="h-[260px] w-full rounded-2xl object-cover shadow-sm"
              />

              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      className="
                        h-16 w-16 shrink-0 cursor-pointer rounded-xl
                        object-cover ring-1 ring-slate-200
                        transition-all duration-200
                        hover:ring-2 hover:ring-violet-400
                      "
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {product.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full border border-violet-100 bg-violet-50
                      px-2.5 py-0.5 text-xs font-medium text-violet-700
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {product.title}
              </h1>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-violet-600">
                {product.brand}
              </p>

              {/* Stats */}
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <Star size={14} fill="currentColor" className="text-yellow-500" />
                  <span className="text-sm font-semibold text-slate-900">{product.rating}</span>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {product.reviewCount} Reviews
                </div>

                <div className="rounded-xl border border-violet-100 bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700">
                  via {product.affiliatePlatform}
                </div>
              </div>

              {/* Price */}
              <div className="mt-4">
                <p className="text-2xl font-bold text-slate-900">
                  {product.currency}{product.price}
                </p>
              </div>

              {/* AI Summary */}
              <div className="mt-4 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4">
                <div className="flex items-center gap-2">
                  <FileText size={15} className="text-violet-600" />
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                    AI Generated Summary
                  </h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {product.summary}
                </p>
              </div>

              {/* Creator Note */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <MessageSquareQuote size={15} className="text-violet-600" />
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                    Creator Recommendation
                  </h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {product.creatorNote}
                </p>
              </div>

              {/* CTA — client component handles the onClick */}
              <div className="mt-4 flex flex-wrap gap-2">
                <ViewProductButton
                  affiliateUrl={product.affiliateUrl}
                  productId={product.id}
                />

                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600">
                  <BadgeCheck size={14} />
                  Creator Approved
                </div>
              </div>

              {/* Description */}
              <div className="mt-5">
                <h2 className="text-base font-semibold text-slate-900">Product Description</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Specifications */}
        <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100">
              <FileText size={15} className="text-violet-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Specifications</h2>
              <p className="text-xs text-slate-500">Key product details and technical information.</p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {product.specifications &&
              Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="
                    rounded-xl border border-slate-200 bg-slate-50 p-4
                    transition-all duration-300
                    hover:border-violet-200 hover:bg-white
                  "
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {key}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-slate-900">
                    {String(value)}
                  </p>
                </div>
              ))}
          </div>
        </section>

      </div>
    </main>
  );
}