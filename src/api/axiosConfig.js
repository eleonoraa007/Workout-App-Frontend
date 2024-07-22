import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  timeout: 5000,
  headers: { "Content-type": "application/json" },
});
