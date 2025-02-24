import { makeRequest } from "@/apiCalls/requestHandler";
import type { Products } from "@/types/product";

export const getGDLProductData = async (): Promise<Products> => {
  const productResponse = await makeRequest("/pages/products/s");
  return productResponse.data.data.reverse();
};
