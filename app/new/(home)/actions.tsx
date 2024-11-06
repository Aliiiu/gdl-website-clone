import { makeRequest } from "../../../apiCalls/requestHandler";
import type { Blogs, HeroResponse, Products } from "./types";

export const getHeroData = async (): Promise<HeroResponse> => {
	const heroData = await makeRequest("/pages/home/hero");
	return heroData?.data?.data;
};

export const getProductData = async (): Promise<Products> => {
	const productData = await makeRequest("/pages/products/s");
	return productData?.data?.data.reverse();
};

export const getStatisticsData = async () => {
	const statData = await makeRequest("/pages/home/statistics");
	return statData?.data?.data[0];
};

export const getBlogData = async (): Promise<Blogs[]> => {
	const blogData = await makeRequest("/pages/home/blog");
	return blogData?.data?.data;
};
