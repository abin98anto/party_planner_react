import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5173",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
