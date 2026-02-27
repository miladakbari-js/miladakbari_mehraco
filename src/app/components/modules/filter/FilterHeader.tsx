"use client";

import useFilterStore from "@/src/app/store/filterStore";
import { SortType , PriceRange } from "@/src/app/store/filterStore";

export default function FilterHeader() {
  const {
    sort,
    category,
    brand,
    priceRange,
    inStock,
    setSort,
    setCategory,
    setBrand,
    setPriceRange,
    setInStock,
  } = useFilterStore();

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">

      {/* SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as SortType)}
        className="border rounded-lg px-4 py-2 cursor-pointer"
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price Low → High</option>
        <option value="price-desc">Price High → Low</option>
      </select>

 
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2 cursor-pointer"
      >
        <option value="all">Category</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
      </select>

  
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="border rounded-lg px-4 py-2 cursor-pointer"
      >
        <option value="all">Brands</option>
        <option value="Essence">Essence</option>
        <option value="Dior">Dior</option>
        <option value="Chanel">Chanel</option>
      </select>

    
      <select
        value={priceRange}
        onChange={(e) =>
          setPriceRange(e.target.value as PriceRange)
        }
        className="border rounded-lg px-4 py-2 cursor-pointer"
      >
        <option value="all">Price</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-500">$100+</option>
      </select>

      <label className="flex items-center gap-2 ml-auto cursor-pointer">
        <span>In Stock</span>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
      </label>
    </div>
  );
}