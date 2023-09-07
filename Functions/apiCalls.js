import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/";

const api = {
  get: async (url) => {
    return apiCalls("GET", url);
  },
  post: async (url, data) => {
    return apiCalls("POST", url, data);
  },
  put: async (url, data) => {
    return apiCalls("PUT", url, data);
  },
  delete: async (url) => {
    return apiCalls("DELETE", url);
  },
};

async function apiCalls({ method, url, data, cache, token }) {
  try {
    const res = await fetch(url, {
      method,
      cache,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (!res.ok) {
      throw "Couldn't make the request!";
    }
    return res.json();
  } catch (err) {
    throw err;
  }
}

export const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //AUTH_TOKEN
};

export default api;
