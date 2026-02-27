import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productApi";
import useFilterStore from "../store/filterStore";

export const useProducts = () => {
  const { search, page } = useFilterStore();

  return useQuery({
    queryKey: ["products", search, page],
    queryFn: () => getProducts(search, page),

    placeholderData: (prev) => prev,
  });
};