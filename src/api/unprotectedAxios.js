import axios from "axios";

const ourAxios = axios.create({
  baseURL: "http://10.178.241.172:8000",
});

// Add an interceptor to modify the request headers
ourAxios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = `application/json`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ourAxios;
