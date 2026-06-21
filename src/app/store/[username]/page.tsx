"use client";

import { use, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

import SearchBar from "@/components/storefront/SearchBar";
import StorefrontHeader from "@/components/storefront/StorefrontHeader";
import RecentlyAdded from "@/components/storefront/RecentlyAdded";
import CollectionsSection from "@/components/storefront/CollectionsSection";
import ProductGrid from "@/components/storefront/ProductGrid";
import FeaturedCollection from "@/components/storefront/FeaturedCollection";
import AddProductModal from "@/components/storefront/AddProductModal";
import { StoreProvider, useStore } from "@/lib/StoreContext";
import { collections } from "@/lib/mockData";
import { trackEvent, getTrafficSource, getDeviceType } from "@/lib/analytics";
import { getStorefront } from "@/lib/api";

type Props = {
  params: Promise<{ username: string }>;
};

const FEATURED_COLLECTION_ID = 1;

// TODO: Replace with real auth check from backend
const IS_OWNER = true;

function StorePageInner({ username }: { username: string }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [storeInfo, setStoreInfo] = useState<any>(null);
  const [storeLoading, setStoreLoading] = useState(true);
  const [storeError, setStoreError] = useState<string | null>(null);
  const { products, loading: productsLoading } = useStore();

  const featuredCollection = collections.find(
    (c) => c.id === FEATURED_COLLECTION_ID
  );

  useEffect(() => {
    let active = true;
    async function fetchStore() {
      try {
        setStoreLoading(true);
        setStoreError(null);
        const data = await getStorefront(username);
        if (active) {
          setStoreInfo(data);
        }
      } catch (err: any) {
        console.warn("[StorePage] Failed to fetch storefront details:", err);
        if (active) {
          setStoreError(err.message || "Storefront not found");
        }
      } finally {
        if (active) {
          setStoreLoading(false);
        }
      }
    }
    fetchStore();
    return () => {
      active = false;
    };
  }, [username]);

  // Gap 3: fires STORE_VIEW on page load
  useEffect(() => {
    if (storeInfo) {
      trackEvent({
        type: "STORE_VIEW",
        creatorId: storeInfo.id,
      });

      if (process.env.NODE_ENV === "development") {
        console.log("[analytics] traffic_source:", getTrafficSource());
        console.log("[analytics] device_type:", getDeviceType());
      }
    }
  }, [storeInfo]);

  if (storeLoading || productsLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
          <p className="text-sm font-semibold text-slate-500 animate-pulse">Loading storefront...</p>
        </div>
      </div>
    );
  }

  if (storeError && !storeInfo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 text-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615m-7.5 0h7.5m3.75 0a3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615m0 0h3.75M13.5 3.42V16.5M6 11h.008v.008H6V11Zm.008 3H6v.008h.008V14Zm.008 3H6v.008h.008V17Zm9.5-6H15.5v.008h.008V11Zm.008 3H15.5v.008h.008V14Zm.008 3H15.5v.008h.008V17Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Storefront Not Found
            </h1>
            <p className="text-slate-500">
              The storefront for <span className="font-semibold text-violet-600">@{username}</span> doesn't exist yet or is offline.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="
                inline-flex items-center justify-center rounded-full
                border border-slate-200 bg-white px-5 py-2.5
                text-sm font-semibold text-slate-700
                transition-all duration-300 hover:border-slate-300
              "
            >
              Go Home
            </Link>
            <Link
              href="/auth"
              className="
                inline-flex items-center justify-center rounded-full
                bg-violet-600 px-5 py-2.5
                text-sm font-semibold text-white
                transition-all duration-300 hover:bg-violet-700
                shadow-md shadow-violet-200
              "
            >
              Create Your Store
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-8">

        <StorefrontHeader
          name={storeInfo.storeName}
          bio={storeInfo.bio || "Welcome to my storefront!"}
          image={storeInfo.profileImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"}
          products={products.length}
          collections={collections.length}
          tagline={storeInfo.tagline || ""}
          creatorCategory={storeInfo.creatorCategory || "Creator"}
          socialLinks={storeInfo.socialLinks || {}}
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