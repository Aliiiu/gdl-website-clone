import { makeRequest } from "@/apiCalls/requestHandler";

type CareerPageContent = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

export async function getCareerHeroData() {
  const heroContentData = await makeRequest("/pages/careers/general");
  return heroContentData.data.data.shift();
}

export async function getCareerPageContent(): Promise<CareerPageContent[]> {
  const pageContent = await makeRequest("/pages/careers/page/content");
  return pageContent.data.data;
}

export async function getCareerBannerContent() {
  const bannerContent = await makeRequest("/pages/careers/intro");
  return bannerContent.data.data.shift();
}
