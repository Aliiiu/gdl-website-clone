import { makeRequest } from "@/apiCalls/requestHandler";
import type { Product } from "@/app/types/product";

export const getGDLProductData = async (): Promise<Product[]> => {
	const productResponse = await makeRequest("/pages/products/s");
	return productResponse.data.data.reverse();
};
