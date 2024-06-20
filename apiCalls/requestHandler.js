// const response = await fetch("https://test-site.gdlapi.com.ng/pages/home/hero");
// const data = await response.json();

const baseURL = "http://62.173.45.205:30013"; // suppose to come from the env file

// const baseURL = "http://165.22.115.227";

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
  } else {
    const { response_description } = await response.json();
    // alert(response_description);
    throw new Error(response_description);
  }
};
