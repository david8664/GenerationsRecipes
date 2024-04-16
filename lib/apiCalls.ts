import axios, { AxiosError, AxiosResponse } from "axios";

// Define a more detailed interface for the expected response data
interface DetailedResponseData {
  message: string;
  data: object;
}

// Define a more detailed interface for the expected response data
interface ApiResponse {
  message: string;
  status: number;
}

// Set the base URL for axios requests
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL;

// Define the shape of the API object with methods for each HTTP verb
interface ApiProps {
  get: (endpoint: string) => Promise<ApiResponse>;
  post: (endpoint: string, payload: object) => Promise<ApiResponse>;
  put: (endpoint: string, payload: object) => Promise<ApiResponse>;
  delete: (endpoint: string) => Promise<ApiResponse>;
}

// Implement the API object with methods that call the apiCalls function
const api: ApiProps = {
  get: async (endpoint: string): Promise<ApiResponse> =>
    await apiCalls("GET", endpoint, {}),
  post: async (endpoint: string, payload: object): Promise<ApiResponse> =>
    await apiCalls("POST", endpoint, payload),
  put: async (endpoint: string, payload: object): Promise<ApiResponse> =>
    await apiCalls("PUT", endpoint, payload),
  delete: async (endpoint: string): Promise<ApiResponse> =>
    await apiCalls("DELETE", endpoint, {}),
};

// Function to handle API calls with error handling
async function apiCalls(
  method: string,
  endpoint: string,
  payload: object
): Promise<ApiResponse> {
  try {
    const response: AxiosResponse = await axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      url: endpoint,
      data: payload,
    });
    if (response.status !== 200) throw response;
    return { message: response.data.message, status: response.status };
  } catch (error: any) {
    throw {
      message: error.response.data.message,
      status: error.response.status,
    };
  }
}
export default api;
