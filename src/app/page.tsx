"use client";

import SearchBox from "./components/shared/SearchBox";
import ProductGrid from "./components/modules/product/ProductGrid";
import Pagination from "./components/ui/pagination/Pagination";
import { useProducts } from "./hooks/useProducts";
import useFilterStore from "./store/filterStore";
import FilterHeader from "./components/modules/filter/FilterHeader";

export default function Page() {
  const { page, setPage } = useFilterStore();
  const { data, isLoading } = useProducts();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">


      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
          w-full
        "
      >
        <p className="text-sm text-gray-500">
          {data?.total} Products
        </p>

   
        <div className="w-full md:w-auto">
          <SearchBox />
        </div>
      </div>

  
      <FilterHeader />

 
      <ProductGrid products={data?.products || []} />

  
      <div className="flex justify-center">
        <Pagination
          currentPage={page}
          total={data?.total || 0}
          limit={16}
          onChange={setPage}
        />
      </div>
    </div>
  );
}