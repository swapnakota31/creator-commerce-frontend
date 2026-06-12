import CollectionCard from "./CollectionCard";
import { collections } from "@/lib/mockData";

export default function CollectionsSection() {
  return (
    <section className="space-y-5">
      <div>
        <h2
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-slate-900
          "
        >
          Collections
        </h2>

        <p
          className="
          mt-2
          text-slate-500
          "
        >
          Browse recommendations grouped by use case.
        </p>
      </div>

      <div
        className="
        grid
        gap-4
        md:grid-cols-2
        xl:grid-cols-3
        "
      >
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.title}
            products={collection.products}
            description={collection.description}
          />
        ))}
      </div>
    </section>
  );
}