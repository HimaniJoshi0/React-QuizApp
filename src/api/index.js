import axios from "axios";
import Cookies from "js-cookie";

// Create Axios instance
const axiosClient = axios.create({
  baseURL: "https://quizz-be-blue.vercel.app/api", // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
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
    // Check for 401 status code
    if (error.response && error.response.status === 401) {
      console.log("401 Unauthorized: Clearing token and redirecting to login.");
      // Clear the auth_token cookie
      Cookies.remove("auth_token");
      // Redirect to the login page
      // Note: This assumes you are in a browser environment with access to window
      if (typeof window !== 'undefined') {
        window.location.href = '/login'; // Adjust the login path if necessary
      }
    }
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
