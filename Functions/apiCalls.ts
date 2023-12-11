interface ApiConfig {
  method: string;
  url: string;
  data?: any;
  cache?: RequestCache;
  token?: string;
}

const api = {
  get: async (url: string, cache?: RequestCache, token?: string) => {
    return apiCalls({ method: "GET", url, cache, token });
  },
  post: async (
    url: string,
    data: any,
    cache?: RequestCache,
    token?: string
  ) => {
    return apiCalls({ method: "POST", url, data, cache, token });
  },
  put: async (url: string, data: any, cache?: RequestCache, token?: string) => {
    return apiCalls({ method: "PUT", url, data, cache, token });
  },
  delete: async (url: string, cache?: RequestCache, token?: string) => {
    return apiCalls({ method: "DELETE", url, cache, token });
  },
};

async function apiCalls({ method, url, data, cache, token }: ApiConfig) {
  try {
    const res = await fetch(url, {
      method,
      cache,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    });
    if (!res.ok) {
      throw new Error("Couldn't make the request!");
    }
    return res.json();
  } catch (err) {
    throw err;
  }
}

export default api;
