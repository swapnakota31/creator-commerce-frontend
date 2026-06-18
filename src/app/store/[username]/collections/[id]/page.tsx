import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FolderKanban, Sparkles } from "lucide-react";

import ProductCard from "@/components/storefront/ProductCard";
import { collections, products } from "@/lib/mockData";

type Props = {
  params: Promise<{
    username: string;
    id: string;
  }>;
};

export default async function CollectionDetailPage({ params }: Props) {
  const { username, id } = await params;

  const collection = collections.find((c) => c.id === Number(id));

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter((product) =>
    collection.productIds.includes(product.id)
  );

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-6">

        <Link
          href={`/store/${username}/collections`}
          className="
            inline-flex items-center gap-2 rounded-full
            border border-slate-200 bg-white px-4 py-2
            text-sm font-medium text-slate-700
            transition-all duration-300
            hover:border-violet-300 hover:text-violet-600
          "
        >
          <ArrowLeft size={14} />
          Back to Collections
        </Link>

        {/* Collection Hero */}
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src={collection.coverImage}
            alt={collection.title}
            className="h-[240px] w-full object-cover"
          />

          <div className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">

              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="
                      inline-flex items-center gap-1.5 rounded-full
                      border border-violet-100 bg-violet-50
                      px-2.5 py-0.5 text-xs font-semibold text-violet-700
                    "
                  >
                    <Sparkles size={12} />
                    Curated Collection
                  </span>
                </div>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {collection.title}
                </h1>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {collection.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {collection.productIds.length} Recommendations
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Personally Curated
                  </span>
                </div>
              </div>

              <div
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-violet-100 bg-violet-50 px-4 py-2
                  text-sm font-semibold text-violet-700
                "
              >
                <FolderKanban size={16} />
                {collection.productIds.length} Creator Picks
              </div>

            </div>
          </div>
        </div>

        {/* Products */}
        <section className="mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Creator Picks in this Collection
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Handpicked recommendations grouped together to help you discover
              the best tools, products, and resources faster.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {collectionProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                tag={product.tag}
                creatorNote={product.creatorNote}
                affiliatePlatform={product.affiliatePlatform}
                affiliateUrl={product.affiliateUrl}
                fromCollection={id}
                username={username}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}