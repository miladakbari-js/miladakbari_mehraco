"use client";

import SearchBox from "./components/shared/SearchBox";
import ProductGrid from "./components/modules/product/ProductGrid";
import Pagination from "./components/ui/pagination/Pagination";
import { useProducts } from "./hooks/useProducts";
import useFilterStore from "./store/filterStore";

export default function Page() {
  const { page, setPage } = useFilterStore();
  const { data, isLoading } = useProducts();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-6 space-y-6">
      <SearchBox />

      <p className="text-sm text-gray-500">
        {data?.total} Products
      </p>

      <ProductGrid products={data?.products || []} />

      <Pagination
        currentPage={page}
        total={data?.total || 0}
        limit={12}
        onChange={setPage}
      />
    </div>
  );
}