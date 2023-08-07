import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", // Note the corrected protocol (http instead of https)
  headers: { "ngrok-skip-browser-warning": "true" },
});
