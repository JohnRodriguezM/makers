import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor
baseUrl.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // For example, you can add authorization headers
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
baseUrl.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { baseUrl };