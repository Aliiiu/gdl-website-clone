import { makeRequest } from "@/apiCalls/requestHandler";

export async function getPrivacyContent() {
  const policyData = await makeRequest("/pages/privacy/policy");

  return policyData.data.data.pop();
}
