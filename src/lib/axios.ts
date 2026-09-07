import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://finestpunishment-us.backendless.app/api",
});
