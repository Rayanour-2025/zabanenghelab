import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // همیشه با کوکی
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
