import axios from "axios";
import { ProductsResponse } from "../types/product";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getProducts = async (params?: any): Promise<ProductsResponse> => {
  const { data } = await api.get("/products", { params });
  return data;
};
