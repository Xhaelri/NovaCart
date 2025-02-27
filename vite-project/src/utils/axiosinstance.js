import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-commerce-apii.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;