import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:8181/",
  headers: {
    "Content-type": "application/json",
  },
});

export default http;