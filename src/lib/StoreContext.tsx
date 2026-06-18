"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";

import { products as initialProducts } from "@/lib/mockData";

export type Product = {
  id: number;
  title: string;
  category?: string;
  subcategory?: string;
  brand?: string;
  tag: string;
  creatorNote: string;
  description?: string;
  summary?: string;
  seoTitle?: string;
  metaDescription?: string;
  slug?: string;
  tags?: string[];
  affiliatePlatform: string;
  affiliateUrl: string;
  sourcePlatform?: string;
  sourceProductId?: string;
  currency?: string;
  price?: string;
  rating?: string;
  reviewCount?: string;
  availability?: string;
  image: string;
  images?: string[];
  specifications?: Record<string, string>;
  isNew?: boolean;
  addedAt?: number;
};

type StoreContextType = {
  products: Product[];
  filteredProducts: Product[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  allFilters: string[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  recentProducts: Product[];
};

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products] = useState<Product[]>(
    initialProducts.map((p) => ({
      ...p,
      // TODO: replace isNew and addedAt with real values from backend
      isNew: false,
      addedAt: 0,
    })) as Product[]
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Memoized — only recomputes when products change
  const allFilters = useMemo<string[]>(() => [
    "All",
    ...Array.from(
      new Set([
        ...products.flatMap((p) => p.tags ?? []),
        ...products
          .map((p) => p.brand)
          .filter((b): b is string => b !== undefined),
        ...products
          .map((p) => p.category)
          .filter((c): c is string => c !== undefined),
      ])
    ).sort(),
  ], [products]);

  // Memoized — only recomputes when products, activeFilter, or searchTerm change
  const filteredProducts = useMemo(() =>
    products.filter((product) => {
      const matchesFilter =
        activeFilter === "All"
          ? true
          : product.tags?.includes(activeFilter) ||
            product.brand === activeFilter ||
            product.category === activeFilter;

      const query = searchTerm.toLowerCase();

      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.creatorNote.toLowerCase().includes(query) ||
        product.tag.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    }),
  [products, activeFilter, searchTerm]);

  // Memoized — sorted by addedAt desc, top 6
  // TODO: replace addedAt with real timestamp from backend
  const recentProducts = useMemo(() =>
    [...products]
      .sort((a, b) => (b.addedAt ?? 0) - (a.addedAt ?? 0))
      .slice(0, 6),
  [products]);

  return (
    <StoreContext.Provider
      value={{
        products,
        filteredProducts,
        activeFilter,
        setActiveFilter,
        allFilters,
        searchTerm,
        setSearchTerm,
        recentProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}