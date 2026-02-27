"use client";

import useFilterStore from "@/src/app/store/filterStore";

export default function FilterBar() {
  const priceRange = useFilterStore((s) => s.priceRange);
  const setPriceRange = useFilterStore((s) => s.setPriceRange);

  const inStock = useFilterStore((s) => s.inStock);
  const setInStock = useFilterStore((s) => s.setInStock);

  return (
    <div className="flex gap-4 items-center mb-4">
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value as any)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="ALL">All Prices</option>
        <option value="UNDER_50">Under 50</option>
        <option value="BETWEEN_50_100">50 - 100</option>
        <option value="BETWEEN_100_500">100 - 500</option>
        <option value="OVER_500">Over 500</option>
      </select>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
        In Stock
      </label>
    </div>
  );
}
