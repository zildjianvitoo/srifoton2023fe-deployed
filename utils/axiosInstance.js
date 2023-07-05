import axios from "axios";
process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 7000,
});

export default axiosInstance;
