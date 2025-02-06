import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptors";

//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: `https://fakestoreapi.com`,
  // baseURL: 'https://jsonplaceholder.typicode.com'
  // headers: {},
});

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
