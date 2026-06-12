"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Product = {
  id: number;
  title: string;
  tag: string;
  creatorNote: string;
  affiliatePlatform: string;
  affiliateUrl: string;
  image: string;
  isNew?: boolean;
  addedAt?: number;
};

import { products as initialProducts } from "@/lib/mockData";

type StoreContextType = {
  products: Product[];
  addProduct: (product: Omit<Product, "id" | "isNew" | "addedAt">) => void;
  recentProducts: Product[];
};

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(
    initialProducts.map((p) => ({ ...p, isNew: false, addedAt: 0 }))
  );

  const addProduct = (
    product: Omit<Product, "id" | "isNew" | "addedAt">
  ) => {
    const newProduct: Product = {
      ...product,
      id: Date.now(),
      isNew: true,
      addedAt: Date.now(),
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  // Recently added = items with isNew flag OR last 3 added by timestamp
  const recentProducts = [...products]
    .sort((a, b) => (b.addedAt ?? 0) - (a.addedAt ?? 0))
    .slice(0, Math.max(products.length, 6));

  return (
    <StoreContext.Provider value={{ products, addProduct, recentProducts }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}