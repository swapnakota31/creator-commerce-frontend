"use client";

import { useState } from "react";
import SearchBar from "@/components/storefront/SearchBar";
import StorefrontHeader from "@/components/storefront/StorefrontHeader";
import RecentlyAdded from "@/components/storefront/RecentlyAdded";
import CollectionsSection from "@/components/storefront/CollectionsSection";
import ProductGrid from "@/components/storefront/ProductGrid";
import FeaturedCollection from "@/components/storefront/FeaturedCollection";
import AddProductModal from "@/components/storefront/AddProductModal";
import { StoreProvider } from "@/lib/StoreContext";
import { creator } from "@/lib/mockData";

function StorePageInner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">

        <StorefrontHeader
          name={creator.name}
          bio={creator.bio}
          image={creator.profileImage}
          followers={creator.followers}
          products={creator.products}
          collections={creator.collections}
          tagline={creator.tagline}
          onAddProduct={() => setShowModal(true)}
        />

        <SearchBar />

        <FeaturedCollection />

        <RecentlyAdded />

        <CollectionsSection />

        <ProductGrid />

      </div>

      {showModal && (
        <AddProductModal onClose={() => setShowModal(false)} />
      )}
    </main>
  );
}

export default function Home() {
  return (
    <StoreProvider>
      <StorePageInner />
    </StoreProvider>
  );
}