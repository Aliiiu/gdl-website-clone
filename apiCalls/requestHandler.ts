const baseURL = "https://site.housemoni.net"; // TODO: Move to environment variables

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const makeRequest = async <T>(
	url: string,
	data: Record<string, any> | null = null,
	method_type: RequestMethod | null = null,
) => {
	const response = await fetch(`${baseURL}${url}`, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: method_type ?? (data == null ? "GET" : "POST"),
		body: data == null ? null : JSON.stringify(data),
	});

	if (response.ok) {
		const responseData = await response.json();
		return { data: responseData };
	}

	const { response_description } = await response.json();

	throw new Error(response_description);
};
