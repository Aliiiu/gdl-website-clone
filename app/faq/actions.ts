import { makeRequest } from "@/apiCalls/requestHandler";

type FaqCategory = {
  id: number;
  category: string;
};

type FaqData = {
  id: string;
  question: string;
  answer: string;
  category_id: number;
};

export const getFaqHeroContent = async () => {
  const heroData = await makeRequest("/pages/faqs/general");
  return heroData.data.data[0];
};

export const getFaqCategories = async (): Promise<FaqCategory[]> => {
  const categories = await makeRequest("/pages/faqs/categories");
  return categories.data.data;
};

export const getFaqsData = async (): Promise<FaqData[]> => {
  const faqs = await makeRequest("/pages/faqs/s");
  return faqs.data.data.reverse();
};
