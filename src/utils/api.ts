import axios from "axios";
import * as https from "https";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  httpAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default api;
