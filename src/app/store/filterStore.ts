import { Search } from "lucide-react";
import { create } from "zustand";

interface FilterState {
  search: string;
  setSearch: (value: string) => void;
}

const useFilterStore = create<FilterState>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));

export default useFilterStore
