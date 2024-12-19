import { makeRequest } from "@/apiCalls/requestHandler";

export const getMediaGeneralData = async () => {
	const generalResponse = await makeRequest("/pages/resources/mp/general");
	return generalResponse.data.data;
};
