import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Star,
  FileText,
  MessageSquareQuote,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

import { products } from "@/lib/mockData";

type Props = {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    from?: string;
    collection?: string;
  }>;
};

export default async function ProductDetailPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const { from, collection } = await searchParams;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  const backHref =
  collection
    ? `/store/priyafinds/collections/${collection}`
    : from === "recent"
    ? "/store/priyafinds"
    : "/store/priyafinds/products";

  const backLabel =
  collection
    ? "Back to Collection"
    : from === "recent"
    ? "Back to Store"
    : "Back to Recommendations";

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-6">

        {/* Back Button */}

        <Link
          href={backHref}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-slate-700
            transition-all
            duration-300
            hover:border-violet-300
            hover:text-violet-600
          "
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>

        {/* Hero Section */}

        <div
          className="
            mt-4
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          <div className="grid gap-6 p-5 lg:grid-cols-2">

            {/* Product Image */}

            <div>
              <img
                src={product.image}
                alt={product.title}
                className="
                  h-[260px]
                  w-full
                  rounded-2xl
                  object-cover
                  shadow-sm
                "
              />
            </div>

            {/* Product Content */}

            <div>

              {/* Tags */}

              <div className="flex flex-wrap gap-1.5">
                {product.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-violet-100
                      bg-violet-50
                      px-2.5
                      py-0.5
                      text-xs
                      font-medium
                      text-violet-700
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}

              <h1
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                {product.title}
              </h1>

              {/* Brand */}

              <p
                className="
                  mt-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-violet-600
                "
              >
                {product.brand}
              </p>

              {/* Stats */}

              <div className="mt-4 flex flex-wrap gap-2">

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2
                  "
                >
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-yellow-500"
                  />

                  <span className="text-sm font-semibold text-slate-900">
                    {product.rating}
                  </span>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {product.reviewCount} Reviews
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-violet-100
                    bg-violet-50
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-violet-700
                  "
                >
                  via {product.affiliatePlatform}
                </div>

              </div>

              {/* Price */}

              <div className="mt-4">
                <p
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  {product.currency}{product.price}
                </p>
              </div>

              {/* AI Summary */}

              <div
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-violet-100
                  bg-gradient-to-br
                  from-violet-50
                  to-white
                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <FileText
                    size={15}
                    className="text-violet-600"
                  />

                  <h2
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-violet-700
                    "
                  >
                    AI Generated Summary
                  </h2>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-slate-700
                  "
                >
                  {product.summary}
                </p>
              </div>

              {/* Creator Note */}

              <div
                className="
                  mt-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <MessageSquareQuote
                    size={15}
                    className="text-violet-600"
                  />

                  <h2
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-violet-700
                    "
                  >
                    Creator Recommendation
                  </h2>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-slate-700
                  "
                >
                  {product.creatorNote}
                </p>
              </div>

              {/* CTA */}

              <div className="mt-4 flex flex-wrap gap-2">

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-violet-600
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-violet-700
                  "
                >
                  View Product
                  <ExternalLink size={14} />
                </a>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-600
                  "
                >
                  <BadgeCheck size={14} />
                  Creator Approved
                </div>

              </div>

              {/* Product Description */}

              <div className="mt-5">
                <h2
                  className="
                    text-base
                    font-semibold
                    text-slate-900
                  "
                >
                  Product Description
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {product.description}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Specifications */}

        <section
          className="
            mt-5
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-violet-100
              "
            >
              <FileText
                size={15}
                className="text-violet-700"
              />
            </div>

            <div>
              <h2
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Specifications
              </h2>

              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Key product details and technical information.
              </p>
            </div>

          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">

            {product.specifications &&
            Object.entries(product.specifications).map(
            ([key, value]) => (
                <div
                  key={key}
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                    transition-all
                    duration-300
                    hover:border-violet-200
                    hover:bg-white
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-slate-500
                    "
                  >
                    {key}
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
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