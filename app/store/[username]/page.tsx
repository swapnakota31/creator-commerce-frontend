"use client";

import { use, useEffect, useState } from "react";
import { Plus } from "lucide-react";

import SearchBar from "@/components/storefront/SearchBar";
import StorefrontHeader from "@/components/storefront/StorefrontHeader";
import RecentlyAdded from "@/components/storefront/RecentlyAdded";
import CollectionsSection from "@/components/storefront/CollectionsSection";
import ProductGrid from "@/components/storefront/ProductGrid";
import FeaturedCollection from "@/components/storefront/FeaturedCollection";
import AddProductModal from "@/components/storefront/AddProductModal";
import { StoreProvider } from "@/lib/StoreContext";
import { creator, collections } from "@/lib/mockData";
import { trackEvent, getTrafficSource, getDeviceType } from "@/lib/analytics";

type Props = {
  params: Promise<{ username: string }>;
};

// TODO: When backend is live, replace with API call:
// const data = await fetch(`/api/store/${username}`)
const FEATURED_COLLECTION_ID = 1;

// TODO: Replace with real auth check from backend
// This controls whether the "Add Product" button shows.
// When auth is live: show only if the logged-in user === username
const IS_OWNER = true;

function StorePageInner({ username }: { username: string }) {
  const [showAddModal, setShowAddModal] = useState(false);

  const featuredCollection = collections.find(
    (c) => c.id === FEATURED_COLLECTION_ID
  );

  // Gap 3: fires STORE_VIEW on page load
  // Also captures traffic_source and device_type for analytics tables
  useEffect(() => {
    trackEvent({
      type: "STORE_VIEW",
      // TODO: pass creatorId from auth/API when backend is ready
    });

    if (process.env.NODE_ENV === "development") {
      console.log("[analytics] traffic_source:", getTrafficSource());
      console.log("[analytics] device_type:", getDeviceType());
    }
  }, []);

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
          socialLinks={creator.socialLinks}
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

        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Browse Recommendations
            </h2>
            <p className="mt-2 text-slate-500">
              Search and discover creator picks.
            </p>
          </div>

          {/* Gap 6: Add Product button — only visible to store owner */}
          {/* TODO: replace IS_OWNER with real auth check when backend is ready */}
          {IS_OWNER && (
            <button
              onClick={() => setShowAddModal(true)}
              className="
                inline-flex items-center gap-2 rounded-full
                bg-violet-600 px-4 py-2.5
                text-sm font-semibold text-white
                transition-all duration-300 hover:bg-violet-700
                hover:shadow-md hover:shadow-violet-200
              "
            >
              <Plus size={15} />
              Add Product
            </button>
          )}
        </div>

        <SearchBar />

        <ProductGrid username={username} />

        <CollectionsSection username={username} />

      </div>

      {/* Gap 6: AddProductModal */}
      {showAddModal && (
        <AddProductModal
          username={username}
          onClose={() => setShowAddModal(false)}
        />
      )}
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