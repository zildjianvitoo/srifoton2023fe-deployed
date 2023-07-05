import axios from "axios";
//  process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: "https://dzakylinggau.my.id",
  timeout: 70000,
});

export default axiosInstance;
