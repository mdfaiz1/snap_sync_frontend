import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? // ? "http://localhost:5001/api"
      "http://localhost:8001/api/v1"
    : "https://snap-sync-backend.vercel.app/api/v1";

// console.log(BASE_URL);

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
