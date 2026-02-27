"use client";

import SearchBox from "./components/shared/SearchBox";
import { useProducts } from "./hooks/useProducts";

export default function Page() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-6">
      <div className="mb-6">
        <p>{data?.products.length} Products</p>
        <SearchBox />
      </div>

      <div>
        {data?.products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
    </div>
  );
}