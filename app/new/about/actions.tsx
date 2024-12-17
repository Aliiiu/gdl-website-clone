import { makeRequest } from "@/apiCalls/requestHandler";
import type { HeroResponse, MissionVisionResponse } from "./types";

export const getAboutHeroData = async (): Promise<HeroResponse> => {
	const aboutHeroData = await makeRequest("/pages/about/general");
	return aboutHeroData.data.data[0];
};

export const getMissionVisionData =
	async (): Promise<MissionVisionResponse> => {
		const visionResponse = await makeRequest("/pages/about/our/vision");
		const missionResponse = await makeRequest("/pages/about/our/mission");
		const visionData = visionResponse.data.data[0];
		const missionData = missionResponse.data.data[0];
		return { vision: visionData, mission: missionData };
	};
