"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productApi";
import useFilterStore from "../store/filterStore";

export const useProducts = () => {
  const {
    search,
    page,
    sort,
    category,
    brand,
    priceRange,
    inStock,
  } = useFilterStore();

  return useQuery({
    queryKey: [
      "products",
      search,
      page,
      sort,
      category,
      brand,
      priceRange,
      inStock,
    ],

    queryFn: () =>
      getProducts({
        search,
        page,
        sort,
        category,
        brand,
        priceRange,
        inStock,
      }),

    placeholderData: (prev) => prev,
  });
};