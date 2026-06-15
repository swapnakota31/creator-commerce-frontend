"use client";

import Link from "next/link";
import CollectionCard from "./CollectionCard";
import { collections } from "@/lib/mockData";
import { useStore } from "@/lib/StoreContext";
import { ArrowRight } from "lucide-react";

type Props = {
  username: string;
};

export default function CollectionsSection({ username }: Props) {
  const { searchTerm } = useStore();

  const previewCollections = collections
    .filter(
      (collection) =>
        collection.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        collection.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .slice(0, 6);

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Collections
          </h2>

          <p className="mt-2 text-slate-500">
            Browse recommendations grouped by use case.
          </p>
        </div>

        <Link
          href={`/store/${username}/collections`}
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
          See All Collections
          <ArrowRight size={14} />
        </Link>
      </div>

      {previewCollections.length === 0 ? (
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
            No collections found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try changing your search query.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {previewCollections.map((collection) => (
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
      )}

      <div className="flex justify-center md:hidden">
        <Link
          href={`/store/${username}/collections`}
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
          See All Collections
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}