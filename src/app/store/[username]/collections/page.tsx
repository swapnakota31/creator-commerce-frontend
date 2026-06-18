import Link from "next/link";
import { ArrowLeft, FolderKanban } from "lucide-react";

import CollectionCard from "@/components/storefront/CollectionCard";
import { collections } from "@/lib/mockData";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function CollectionsPage({ params }: Props) {
  const { username } = await params;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-6">

        <Link
          href={`/store/${username}`}
          className="
            inline-flex items-center gap-2 rounded-full
            border border-slate-200 bg-white px-4 py-2
            text-sm font-medium text-slate-700
            transition-all duration-300
            hover:border-violet-300 hover:text-violet-600
          "
        >
          <ArrowLeft size={14} />
          Back to Store
        </Link>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                All Collections
              </h1>

              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                Browse every curated collection created to help
                discover the best tools, products, and resources faster.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {collections.length} Collections
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
              {collections.length} Collections
            </div>

          </div>
        </div>

        <section className="mt-6">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-900">Curated Collections</h2>
            <p className="mt-1 text-sm text-slate-500">
              Explore grouped recommendations organized by use case,
              workflow, and creator preferences.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                id={collection.id}
                title={collection.title}
                products={collection.productIds.length}
                description={collection.description}
                username={username}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}