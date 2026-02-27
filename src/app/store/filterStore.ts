import { create } from "zustand";

type FilterState = {
  search: string;
  page: number;
  sort: string;

  setSearch: (value: string) => void;
  setPage: (page: number) => void;
  setSort: (sort: string) => void;
};

const useFilterStore = create<FilterState>((set) => ({
  search: "",
  page: 1,
  sort: "newest",

  setSearch: (value) =>
    set({
      search: value,
      page: 1, 
    }),

  setPage: (page) => set({ page }),

  setSort: (sort) =>
    set({
      sort,
      page: 1,
    }),
}));

export default useFilterStore;