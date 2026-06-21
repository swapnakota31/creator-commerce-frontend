"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { useParams } from "next/navigation";

import { products as initialProducts } from "@/lib/mockData";
import { getStoreProducts, type BackendProduct } from "@/lib/api";

export type Product = {
  id: number | string;
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
  loading: boolean;
  error: string | null;
};

const StoreContext = createContext<StoreContextType | null>(null);

function mapBackendProductToProduct(bp: BackendProduct): Product {
  const primaryLink = bp.productLinks?.find((l) => l.isPrimary) || bp.productLinks?.[0];
  const affUrl = primaryLink?.affiliateUrl || primaryLink?.originalUrl || "#";
  const affPlatform = primaryLink?.platform || bp.sourcePlatform || "Amazon";

  return {
    id: bp.id,
    title: bp.title,
    category: bp.category,
    subcategory: bp.subcategory || undefined,
    brand: bp.brand,
    tag: bp.category || "Recommendation",
    creatorNote: bp.shortDescription || bp.fullDescription || "Creator recommended pick!",
    description: bp.fullDescription || bp.shortDescription || undefined,
    summary: bp.shortDescription || undefined,
    seoTitle: bp.title,
    metaDescription: bp.shortDescription || undefined,
    slug: bp.slug,
    tags: [bp.category, bp.brand].filter(Boolean),
    affiliatePlatform: affPlatform,
    affiliateUrl: affUrl,
    sourcePlatform: bp.sourcePlatform,
    sourceProductId: bp.sourceProductId,
    currency: bp.currency === "INR" ? "₹" : bp.currency === "USD" ? "$" : bp.currency,
    price: bp.price,
    rating: bp.rating || "4.5",
    reviewCount: String(bp.reviewCount || 0),
    availability: bp.isActive ? "In Stock" : "Out of Stock",
    image: bp.primaryImageUrl,
    images: [bp.primaryImageUrl],
    specifications: {},
    isNew: Date.now() - new Date(bp.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000,
    addedAt: new Date(bp.createdAt).getTime(),
  };
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const username = params?.username as string;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    let active = true;
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        
        const rawProducts = await getStoreProducts(username);
        if (active) {
          const mapped = rawProducts.map(mapBackendProductToProduct);
          setProducts(mapped);
        }
      } catch (err: any) {
        if (active) {
          console.warn("[StoreContext] Failed to load products from API:", err);
          setError(err.message || "Failed to load products");
          // Fallback to mock data in dev/testing environments if API is offline
          setProducts(
            initialProducts.map((p) => ({
              ...p,
              isNew: false,
              addedAt: 0,
            })) as Product[]
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadData();
    return () => {
      active = false;
    };
  }, [username]);

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
        loading,
        error,
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