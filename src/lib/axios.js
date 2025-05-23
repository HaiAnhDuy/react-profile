import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://...", // api's base_url
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// // Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

instance.defaults.withCredentials = true; // Allow cross-origin cookies to be sent

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.message || "Unexpected error occurred";

    let errorMessage = `Error (${status}): ${message}`;

    switch (status) {
      case 400:
        errorMessage = "Bad Request";
        break;
      case 401:
        errorMessage = "Unauthorized! Please login again.";
        break;
      case 403:
        errorMessage = "Access Denied";
        break;
      case 404:
        errorMessage = "Resource Not Found";
        break;
      case 422:
        errorMessage = "Validation Error";
        break;
    }

    return Promise.reject(error);
  }
);

export default instance;
