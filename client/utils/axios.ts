import axios, { AxiosInstance } from "axios";

// import { auth } from "./firebase/configs";

// // DEV:
// const DEFAULT_BASE_URL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5001/creato-web-app/us-central1/api/"
//     : process.env.GATSBY_API_URL;
// // const DEFAULT_BASE_URL = process.env.GATSBY_API_URL;

// const instance: AxiosInstance = axios.create({
//   baseURL: DEFAULT_BASE_URL,
//   timeout: 5000,
//   headers: {
//     "X-Custom-Header": "creato",
//   },
// });

// instance.interceptors.request.use(
//   async function (config: any) {
//     const idToken = (await auth.currentUser?.getIdToken()) ?? "";
//     if (idToken) {
//       config.headers.authorization = "Bearer " + idToken;
//     }
//     return config;
//   },
//   function (error: any) {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
instance.interceptors.response.use(
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

export default instance;
