import { makeRequest } from "../../../apiCalls/requestHandler";
import type { Blogs, HeroResponse, ProductItem, Products } from "./types";

export const getHeroData = async (): Promise<HeroResponse> => {
	const heroData = await makeRequest("/pages/home/hero");
	return heroData?.data?.data[0];
};

export const getProductData = async (): Promise<Products> => {
	const productData = await makeRequest("/pages/products/s");
	const allProducts = productData?.data?.data.reverse();
	return allProducts.filter(
		(item: ProductItem) => item?.publish_product === true,
	);
};

export const getStatisticsData = async () => {
	const statData = await makeRequest("/pages/home/statistics");
	return statData?.data?.data[0];
};

export const getBlogData = async (): Promise<Blogs[]> => {
	const blogData = await makeRequest("/posts/s");
	return blogData?.data?.data;
};
