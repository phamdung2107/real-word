import axios from "axios";

export const callApi = async ({ method, url, data, params }) => {
  // config header
  // get token from local storage
  const jwtToken = localStorage.getItem("token");
  const config = {
    baseURL: "https://api.realworld.io/api",
    headers: {
      Authorization: !!jwtToken ? `Bearer ${jwtToken}` : "",
    },
    params: { ...params },
  };
  try {
    const dataResponse =
      method === "GET"
        ? await axios.get(url, config)
        : method === "POST"
        ? await axios.post(url, data, config)
        : method === "PUT"
        ? await axios.put(url, data, config)
        : method === "DELETE"
        ? await axios.delete(url, config)
        : {};
    return dataResponse;
  } catch (error) {
    throw error;
  }
};

export const GET = (url, params) => callApi({ method: "GET", url, params });

export const POST = (url, data) => callApi({ method: "POST", url, data });

export const PUT = (url, data) => callApi({ method: "PUT", url, data });

export const DELETE = (url) => callApi({ method: "DELETE", url });
