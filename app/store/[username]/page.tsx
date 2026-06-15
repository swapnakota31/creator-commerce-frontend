"use client";

import { use } from "react";
import SearchBar from "@/components/storefront/SearchBar";
import StorefrontHeader from "@/components/storefront/StorefrontHeader";
import RecentlyAdded from "@/components/storefront/RecentlyAdded";
import CollectionsSection from "@/components/storefront/CollectionsSection";
import ProductGrid from "@/components/storefront/ProductGrid";
import FeaturedCollection from "@/components/storefront/FeaturedCollection";
import { StoreProvider } from "@/lib/StoreContext";
import { creator, collections } from "@/lib/mockData";

type Props = {
  params: Promise<{ username: string }>;
};

// TODO: When backend is live, replace this with an API call:
// const data = await fetch(`/api/store/${username}`)
// then derive featuredCollection from the API response.
const FEATURED_COLLECTION_ID = 1;

function StorePageInner({ username }: { username: string }) {
  const featuredCollection = collections.find(
    (c) => c.id === FEATURED_COLLECTION_ID
  );

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-8">

        <StorefrontHeader
          name={creator.name}
          bio={creator.bio}
          image={creator.profileImage}
          products={creator.products}
          collections={creator.collections}
          tagline={creator.tagline}
          creatorCategory={creator.creatorCategory}
        />

        {featuredCollection && (
          <FeaturedCollection
            username={username}
            collectionId={featuredCollection.id}
            title={featuredCollection.title}
            description={featuredCollection.description}
            productCount={featuredCollection.productIds.length}
          />
        )}

        <RecentlyAdded username={username} />

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Browse Recommendations
          </h2>

          <p className="mt-2 text-slate-500">
            Search and discover creator picks.
          </p>
        </div>

        <SearchBar />

        <ProductGrid username={username} />

        <CollectionsSection username={username} />

      </div>
    </main>
  );
}

export default function Home({ params }: Props) {
  const { username } = use(params);

  return (
    <StoreProvider>
      <StorePageInner username={username} />
    </StoreProvider>
  );
}