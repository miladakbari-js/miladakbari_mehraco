import { create } from "zustand";

type FilterState = {
  search: string;
  page: number;

  setSearch: (value: string) => void;
  setPage: (page: number) => void;
};

const useFilterStore = create<FilterState>((set) => ({
  search: "",
  page: 1,

  setSearch: (value) =>
    set({
      search: value,
      page: 1, // reset page when searching
    }),

  setPage: (page) => set({ page }),
}));

export default useFilterStore;