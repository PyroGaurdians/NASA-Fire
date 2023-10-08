import axios from "axios";

const ourAxios = axios.create({
  baseURL: "http://10.178.241.172:8000",
});

// Add an interceptor to modify the request headers
ourAxios.interceptors.request.use(
  (config) => {
    // Get the JWT from your storage (e.g., localStorage or sessionStorage)
    const jwtToken = localStorage.getItem("accessToken");
    config.headers["Content-Type"] = `application/json`;

    // If a JWT token exists, add it to the headers
    if (jwtToken) {
      config.headers.Authorization = `JWT ${jwtToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ourAxios;
