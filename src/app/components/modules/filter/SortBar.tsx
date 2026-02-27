"use client";

import useFilterStore from "@/src/app/store/filterStore";

export default function SortBar() {
  const sort = useFilterStore((s) => s.sort);
  const setSort = useFilterStore((s) => s.setSort);

  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value as any)}
      className="border rounded-lg px-3 py-2 cursor-pointer"
    >
      <option value="NEWEST">Newest</option>
      <option value="PRICE_LOW">Cheapest</option>
      <option value="PRICE_HIGH">Most Expensive</option>
      <option value="DISCOUNT">Highest Discount</option>
    </select>
  );
}