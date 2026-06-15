import Link from "next/link";
import {
  ArrowLeft,
  Package,
  BadgeCheck,
} from "lucide-react";

import ProductCard from "@/components/storefront/ProductCard";
import { products } from "@/lib/mockData";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-6">

        {/* Back Button */}

        <Link
          href="/store/priyafinds"
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
          Back to Store
        </Link>

        {/* Hero Section */}

        <div
          className="
            mt-4
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <div className="flex flex-wrap items-start justify-between gap-4">

            <div className="max-w-3xl">

              <h1
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                All Recommendations
              </h1>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-slate-500
                "
              >
                A curated collection of products personally used,
                tested, and recommended by this creator.
              </p>

              {/* Stats */}

              <div className="mt-4 flex flex-wrap gap-2">

                <span
                  className="
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-slate-600
                  "
                >
                  {products.length} Recommendations
                </span>

                <span
                  className="
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-slate-600
                  "
                >
                  Personally Tested
                </span>

              </div>

            </div>

            {/* Right Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-100
                bg-violet-50
                px-4
                py-2
                text-sm
                font-semibold
                text-violet-700
              "
            >
              <Package size={16} />
              {products.length} Creator Picks
            </div>

          </div>
        </div>

        {/* Products Section */}

        <section className="mt-6">

          <div className="mb-4">

            <h2
              className="
                text-xl
                font-bold
                text-slate-900
              "
            >
              Creator Picks
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Browse all recommendations shared in this storefront.
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                tag={product.tag}
                creatorNote={product.creatorNote}
                affiliatePlatform={
                  product.affiliatePlatform
                }
                affiliateUrl={
                  product.affiliateUrl
                }
              />
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}