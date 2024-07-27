import axios, { AxiosResponse } from "axios";

interface ApiResponse<T = string> {
  message: T;
  status: number;
}

// Set the base URL for axios requests
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL;

// Define the shape of the API object with methods for each HTTP verb
interface ApiProps {
  get<T = string>(endpoint: string): Promise<ApiResponse<T>>;
  post<T = string>(endpoint: string, payload: object): Promise<ApiResponse<T>>;
  put<T = string>(endpoint: string, payload: object): Promise<ApiResponse<T>>;
  delete<T = string>(endpoint: string): Promise<ApiResponse<T>>;
}

/**
 * An object containing methods for making API calls.
 *
 * @typedef {Object} ApiProps
 * @property {function} get - Makes a GET request to the specified endpoint.
 * @property {function} post - Makes a POST request to the specified endpoint.
 * @property {function} put - Makes a PUT request to the specified endpoint.
 * @property {function} delete - Makes a DELETE request to the specified endpoint.
 */
const api: ApiProps = {
  get: async <T = string>(endpoint: string): Promise<ApiResponse<T>> =>
    await apiCalls("GET", endpoint),
  post: async <T = string>(
    endpoint: string,
    payload: object
  ): Promise<ApiResponse<T>> => await apiCalls("POST", endpoint, payload),
  put: async <T = string>(
    endpoint: string,
    payload: object
  ): Promise<ApiResponse<T>> => await apiCalls("PUT", endpoint, payload),
  delete: async <T = string>(endpoint: string): Promise<ApiResponse<T>> =>
    await apiCalls("DELETE", endpoint, {}),
};

/**
 * Makes an API call using the specified method, endpoint, and payload.
 *
 * @template T - The type of the response message. Defaults to string.
 * @param {string} method - The HTTP method to use for the request.
 * @param {string} endpoint - The API endpoint to call.
 * @param {object} payload - The data to send with the request.
 * @returns {Promise<ApiResponse<T>>} - A promise that resolves to the API response.
 * @throws {Error} - Throws an error if the request fails or the response status is not 200.
 */
async function apiCalls<T = string>(
  method: string,
  endpoint: string,
  payload?: object
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse = await axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      url: endpoint,
      data: payload,
    });
    if (response.status < 200 && response.status > 299) throw response;
    return { message: response.data.message, status: response.status };
  } catch (error: any) {
    throw {
      message: error.response.data.message || "An error occurred",
      status: error.response.status || 500,
    };
  }
}
export default api;
