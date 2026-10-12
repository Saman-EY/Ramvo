import axios from "axios";
import toast from "react-hot-toast";
// import { removeAuthToken } from "../functions";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

let isLoggingOut = false; // ⭐ CHANGED

// ─── Public ───────────────────────────────────────────────────
export const publicApi = axios.create({
  baseURL: BASE_URL,
});

// ─── Private ──────────────────────────────────────────────────
// export const privateApi = axios.create({
//   baseURL: BASE_URL,
// });

// // ⭐ CHANGED
// privateApi.interceptors.request.use((config) => {
//   const token = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY_COOKIE!);

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// ⭐ CHANGED
// privateApi.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (!error.response) {
//       toast.error("خطای شبکه. لطفا اتصال اینترنت خود را بررسی کنید.");
//       return Promise.reject(error);
//     }

//     const status = error.response.status;

//     if ((status === 401 || status === 403) && !isLoggingOut) {
//       isLoggingOut = true;

//       removeAuthToken();

//       toast.error("لطفا دوباره وارد حساب شوید.");

//       // window.location.href = "/";
//     }

//     return Promise.reject(error);
//   },
// );
