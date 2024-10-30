// const response = await fetch("https://test-site.gdlapi.com.ng/pages/home/hero");
// const data = await response.json();

const baseURL = "https://site.housemoni.net"; // suppose to come from the env file

export const makeRequest = async (
  url,
  data = null,
  token = null,
  method_type = null
) => {
  const response = await fetch(`${baseURL}${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: method_type != null ? method_type : data == null ? "GET" : "POST",
    body: data == null ? null : JSON.stringify(data),
  });

  if (response.ok) {
    const data = await response.json();
    return { data };
  }
  const { response_description } = await response.json();
  throw new Error(response_description);
};
