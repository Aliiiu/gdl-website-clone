import { makeRequest } from "@/apiCalls/requestHandler";
import type { HeroResponse } from "./types";

export const getAboutHeroData = async (): Promise<HeroResponse> => {
	const aboutHeroData = await makeRequest("/pages/about/general");
	return aboutHeroData.data.data[0];
};
