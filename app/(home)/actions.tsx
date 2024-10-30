import { makeRequest } from "../../apiCalls/requestHandler";

export const getHeroData = async () => {
	const heroData = await makeRequest("/pages/home/hero");
	return heroData?.data?.data;
};

export const getProductData = async () => {
	const productData = await makeRequest("/pages/products/s");
	return productData?.data?.data.reverse();
};
