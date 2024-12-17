export type HeroResponse = {
	id: number;
	bg_image_url: string;
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
};

type VisionResponse = {
	id: number;
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
};

type MissionResponse = {
	id: number;
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
};

export type MissionVisionResponse = {
	vision: VisionResponse;
	mission: MissionResponse;
};
