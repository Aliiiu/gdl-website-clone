import { makeRequest } from "@/apiCalls/requestHandler";
import type { HeroResponse, MissionVisionResponse, Staff } from "./types";

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

export const getManagementDetails = async (): Promise<Staff[]> => {
	const managementData = await makeRequest("/pages/about/management/team");
	return managementData.data.data.reverse();
};

export const getBoardDetails = async (): Promise<Staff[]> => {
	const boardData = await makeRequest("/pages/about/board/of/directors");
	return boardData.data.data.reverse();
};
