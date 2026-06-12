"use client";

import { useStore } from "@/lib/StoreContext";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { products } = useStore();

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">All Products</h2>
          <p className="mt-1 text-slate-500 text-sm">
            {products.length} recommendations curated by this creator.
          </p>
        </div>

        <span
          className="
          rounded-full
          bg-violet-50
          border
          border-violet-100
          px-3
          py-1
          text-xs
          font-semibold
          text-violet-600
          "
        >
          {products.length} total
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            tag={product.tag}
            creatorNote={product.creatorNote}
            affiliatePlatform={product.affiliatePlatform}
            affiliateUrl={product.affiliateUrl}
            isNew={product.isNew}
          />
        ))}
      </div>
    </section>
  );
}