import { makeRequest } from "../../../apiCalls/requestHandler";

export const getHeroData = async () => {
	const heroData = await makeRequest("/pages/home/hero");
	return heroData?.data?.data;
};

export const getProductData = async () => {
	const productData = await makeRequest("/pages/products/s");
	return productData?.data?.data.reverse();
};

export const getStatisticsData = async () => {
	const statData = await makeRequest("/pages/home/statistics");
	return statData?.data?.data[0];
};
