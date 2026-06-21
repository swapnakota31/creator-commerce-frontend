"use client";

import Link from "next/link";
import { useStore } from "@/lib/StoreContext";
import ProductCard from "./ProductCard";

type Props = {
  username: string;
};

export default function ProductGrid({ username }: Props) {
  const { filteredProducts } = useStore();

  const previewProducts = filteredProducts.slice(0, 4);

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Creator Picks
          </h2>

          <p className="mt-2 text-slate-500">
            Showing {filteredProducts.length} recommendation
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Link
          href={`/store/${username}/products`}
          className="
          hidden
          md:inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-200
          bg-white
          px-5
          py-2.5
          text-sm
          font-medium
          text-slate-700
          transition-all
          duration-300
          hover:border-violet-300
          hover:text-violet-600
          hover:shadow-md
          "
        >
          See All Recommendations →
        </Link>
      </div>

      {previewProducts.length === 0 ? (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-200
            bg-white
            py-16
            text-center
          "
        >
          <h3 className="text-lg font-semibold text-slate-900">
            No recommendations found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try changing your filters or search query.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {previewProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              title={product.title}
              image={product.image}
              tag={product.tag}
              creatorNote={product.creatorNote}
              affiliatePlatform={product.affiliatePlatform}
              affiliateUrl={product.affiliateUrl}
              isNew={product.isNew}
              username={username}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center md:hidden">
        <Link
          href={`/store/${username}/products`}
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-200
          bg-white
          px-5
          py-2.5
          text-sm
          font-medium
          text-slate-700
          transition-all
          duration-300
          hover:border-violet-300
          hover:text-violet-600
          "
        >
          See All Recommendations →
        </Link>
      </div>
    </section>
  );
}