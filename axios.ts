import axios from "axios";

const deezerApi = axios.create({
  baseURL: "https://api.deezer.com/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  validateStatus: (status) => status >= 200 && status < 300,
});

export { deezerApi };
