import { makeRequest } from "@/apiCalls/requestHandler";

type CareerPageContent = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

export type JobOpening = {
  id: number;
  position: string;
  type_of_employment: string;
  location: string;
  lasts_till: string;
  published: boolean;
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

export async function getJobOpeningData(): Promise<JobOpening[]> {
  const jobOpening = await makeRequest("/jobs");
  return jobOpening.data.data.filter((job: JobOpening) => job.published);
}

export async function getJobOpeningContent() {
  const jobOpeningContent = await makeRequest("/pages/careers/job/openings");
  return jobOpeningContent.data.data.shift();
}
