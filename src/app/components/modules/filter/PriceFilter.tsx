"use client";

import useFilterStore from "@/src/app/store/filterStore";

const options = [
  { label: "All", value: "ALL" },
  { label: "Under $50", value: "UNDER_50" },
  { label: "$50 - $100", value: "BETWEEN_50_100" },
  { label: "$100 - $500", value: "BETWEEN_100_500" },
  { label: "Over $500", value: "OVER_500" },
];

export default function PriceFilter() {
  const priceRange = useFilterStore((s) => s.priceRange);
  const setPriceRange = useFilterStore((s) => s.setPriceRange);

  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Price</h3>

      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            checked={priceRange === opt.value}
            onChange={() => setPriceRange(opt.value as any)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}