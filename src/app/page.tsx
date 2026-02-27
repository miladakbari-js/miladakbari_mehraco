"use client";

import SearchBox from "./components/shared/SearchBox";
import ProductGrid from "./components/modules/product/ProductGrid";
import { useProducts } from "./hooks/useProducts";

export default function Page() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-6 space-y-6">
      {/* search */}
      <SearchBox />

      {/* total */}
      <p className="text-sm text-gray-500">
        {data?.total} Products
      </p>

      {/* grid */}
      <ProductGrid products={data?.products || []} />
    </div>
  );
}