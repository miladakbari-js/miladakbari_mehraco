import { Product, ProductsResponse } from "../types/product";
import {
  PriceRange,
  SortType,
} from "../store/filterStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;



function applyPriceFilter(
  products: Product[],
  range: PriceRange,
) {
  switch (range) {
    case "0-50":
      return products.filter((p) => p.price <= 50);

    case "50-100":
      return products.filter(
        (p) => p.price > 50 && p.price <= 100,
      );

    case "100-500":
      return products.filter((p) => p.price > 100);

    default:
      return products;
  }
}



function applySort(products: Product[], sort: SortType) {
  const sorted = [...products];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);

    default:
      return sorted;
  }
}



type Params = {
  search: string;
  page: number;
  sort: SortType;
  category: string;
  brand: string;
  priceRange: PriceRange;
  inStock: boolean;
};



export async function getProducts({
  search,
  page,
  sort,
  category,
  brand,
  priceRange,
  inStock,
}: Params): Promise<ProductsResponse> {
  const limit = 16;
  const skip = (page - 1) * limit;

  let endpoint = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  if (search) {
    endpoint = `${BASE_URL}/products/search?q=${encodeURIComponent(
      search,
    )}&limit=${limit}&skip=${skip}`;
  }

  if (category !== "all") {
    endpoint = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(endpoint);

  if (!res.ok) throw new Error("Fetch failed");

  const data: ProductsResponse = await res.json();

  let products = data.products;


  if (brand !== "all") {
    products = products.filter(
      (p) => p.brand === brand,
    );
  }

 
  products = applyPriceFilter(products, priceRange);

 
  if (inStock) {
    products = products.filter((p) => p.stock > 0);
  }


  products = applySort(products, sort);

  return {
    ...data,
    products,
  };
}