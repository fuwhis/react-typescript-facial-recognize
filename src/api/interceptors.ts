import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { JwtVerification } from "../utils/jwt_verification";

var numberOfPendingCallAPI = 0;

const getAccessToken = () => {
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    return localStorage.getItem("accessToken");
  } else {
  }
  return "";
};

const getRefreshToken = () => {
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    return localStorage.getItem("refreshToken");
  } else {
  }
  return "";
};

const ApiClient = () => {
  const instance: AxiosInstance = axios.create();
  /** Axios Request */
  instance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const accessToken = getAccessToken();
      const language = "en";

      if (accessToken && JwtVerification(accessToken)) {
        // do sth
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        config.headers["X-Language"] = language;
        config.headers["Access-Control-Allow-Origin"] = "*";
      }

      /** Set Loading */
      numberOfPendingCallAPI += 1;
      // if (config?.loading !== false) {
      //   store.dispatch(setIsLoading(true));
      // }

      return config;
    },
    (error: AxiosError) => {
      console.log("axios use() return error", error);
      return Promise.reject(error);
    }
  );

  /** Axios Response */
  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      numberOfPendingCallAPI -= 1;
      // if (numberOfPendingCallAPI === 0) {
      //   store.dispatch(setIsLoading(false));
      // }

      return response;
    },
    (error: AxiosError) => {
      numberOfPendingCallAPI -= 1;
      // if (numberOfPendingCallAPI === 0) {
      //   store.dispatch(setIsLoading(false));
      // }
      const refreshToken = getRefreshToken();

      return error;
    }
  );

  return instance;
};

export default ApiClient;
