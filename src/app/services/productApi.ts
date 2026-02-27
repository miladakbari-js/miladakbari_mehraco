import { ProductsResponse } from "../types/product";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const LIMIT = 12;

export async function getProducts(
  search: string,
  page: number
): Promise<ProductsResponse> {
  const skip = (page - 1) * LIMIT;

  const url = search
    ? `${BASE_URL}/products/search?q=${search}&limit=${LIMIT}&skip=${skip}`
    : `${BASE_URL}/products?limit=${LIMIT}&skip=${skip}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}