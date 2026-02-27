import axios from "axios";
import { ProductsResponse } from "../types/product";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getProducts = async (search: string , page:number): Promise<ProductsResponse> => {
 const limit = 12;
 const skip = (page - 1)*limit;

  const endpoint = search
    ? `/products/search?q=${search}&limit=${limit}&skip=${skip}`
    : `/products?limit=${limit}&skip=${skip}`;

  const { data } = await api.get(endpoint);

  return data;
};
