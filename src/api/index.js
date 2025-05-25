import axios from "axios";
import Cookies from "js-cookie";

// Create Axios instance
const axiosClient = axios.create({
  baseURL: "https://quizz-be-blue.vercel.app/api", // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor to add token from cookies
axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

// Generic API request handler
export const apiRequest = async ({ method, path, data, params }) => {
  try {
    const response = await axiosClient({
      method,
      url: path,
      data,
      params,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default axiosClient;
