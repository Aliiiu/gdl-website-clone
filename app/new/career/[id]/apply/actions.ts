import { makeRequest } from "@/apiCalls/requestHandler";

type Position = {
  id: number;
  title_of_position: string;
  job_description: string;
  job_responsibilities: string;
};
export const getJobPositionsData = async (): Promise<Position[]> => {
  const jobData = await makeRequest("/job/positions");
  return jobData.data.data;
};
