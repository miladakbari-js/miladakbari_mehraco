"use client";

import { useQuery } from "@tanstack/react-query";
import useFilterStore from "../store/filterStore";
import { getProducts } from "../services/productApi";
import { keepPreviousData } from "@tanstack/react-query";

export const useProducts = () => {
  const search = useFilterStore((state) => state.search);
  const page = useFilterStore((state) => state.page);

  return useQuery({
    queryKey: ["products", search, page],
    queryFn: () => getProducts(search, page),
    placeholderData: keepPreviousData,
  });
};
