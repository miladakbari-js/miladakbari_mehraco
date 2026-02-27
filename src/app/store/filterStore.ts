import { create } from "zustand";

export type SortType = "newest" | "price-asc" | "price-desc";

export type PriceRange = "all" | "0-50" | "50-100" | "100-500";

type FilterState = {
  search: string;
  page: number;

  sort: SortType;
  category: string;
  brand: string;
  priceRange: PriceRange;
  inStock: boolean;

  setSearch: (v: string) => void;
  setPage: (p: number) => void;

  setSort: (v: SortType) => void;
  setCategory: (v: string) => void;
  setBrand: (v: string) => void;
  setPriceRange: (v: PriceRange) => void;
  setInStock: (v: boolean) => void;
};

const useFilterStore = create<FilterState>((set) => ({
  search: "",
  page: 1,

  sort: "newest",
  category: "all",
  brand: "all",
  priceRange: "all",
  inStock: false,

  setSearch: (search) => set({ search, page: 1 }),
  setPage: (page) => set({ page }),

  setSort: (sort) => set({ sort, page: 1 }),
  setCategory: (category) => set({ category, page: 1 }),
  setBrand: (brand) => set({ brand, page: 1 }),
  setPriceRange: (priceRange) => set({ priceRange, page: 1 }),
  setInStock: (inStock) => set({ inStock, page: 1 }),
}));

export default useFilterStore;
