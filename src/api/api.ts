/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { BaseUrl, RefreshTokenApi } from "@/utils/api-details";
import { ApiServiceProps } from "@/types/common.types";
import { useProfileStore } from "@/store/profile";
// import { removeStudentInfo, setTokens } from "../redux/persist-slice";

const axiosInstance = axios.create();

const checkForAPIFailure = (response: any): boolean => {
  if (response && response.status !== 200) {
    return true;
  }
  return false;
};

const getHeader = (
  isSecure: boolean,
  isFormData: boolean | undefined,
  isEmployee?: boolean
) => {
  if (isSecure) {
    const profileStore = useProfileStore();
    return {
      Accept: "*/*",
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      Authorization: `Bearer ${
        isEmployee ? "" : profileStore.getAccessToken()
      }`,
    };
  } else {
    return {
      Accept: "*/*",
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    };
  }
};

const checkRefreshToken = async (url: string): Promise<string> => {
  const profileStore = useProfileStore();
  try {
    const { data } = await axios.request({
      baseURL: url,
      url: RefreshTokenApi.uri,
      method: RefreshTokenApi.method,
      headers: getHeader(false, false),
      data: {
        refreshToken: profileStore.getRefreshToken(),
      },
      // timeout: 20000,
    });
    profileStore.setTokens(data?.accessToken, data?.refreshToken);
    return Promise.resolve(data?.accessToken);
  } catch {
    return Promise.reject("Refresh Token Error");
  }
};

const interceptAxios = (url: string, isEmployee?: boolean) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401 && !isEmployee) {
        const authToken = await checkRefreshToken(url);
        error.config.headers.Authorization = `Bearer ${authToken}`;
        return await axiosInstance(error.config);
      } else if (error.response.status === 401 && isEmployee) {
        alert("Session Expired. Please login again.");
      } else if (error.response.status === 403) {
        const profileStore = useProfileStore();
        profileStore.clearUserData();

        return Promise.reject("Login again");
      } else {
        return Promise.reject(error);
      }
    }
  );
};

const Api = async ({
  url,
  method,
  data,
  securedHeader,
  params,
  isFormData,
  isEmployee,
  isTajdeedApi,
}: ApiServiceProps): Promise<any> => {
  const BASE_URL = BaseUrl.production;

  if (!isTajdeedApi) {
    interceptAxios(BASE_URL, isEmployee);
  }

  const response = data
    ? await axios
        .request({
          baseURL: BASE_URL,
          url,
          method,
          headers: getHeader(securedHeader, isFormData, isEmployee),
          data,
          params: { ...params },
          // timeout: 20000,
        })
        .catch((error: any) => {
          return {
            status: error.response?.status,
            data: error.response?.data,
          };
        })
    : await axios
        .request({
          baseURL: BASE_URL,
          url,
          method,
          headers: getHeader(securedHeader, isFormData, isEmployee),
          params: { ...params },
          // timeout: 20000,
        })
        .catch((error: AxiosError) => ({
          status: error.response?.status,
          data: error.response?.data,
        }));

  if (!checkForAPIFailure(response)) {
    return Promise.resolve(response?.data);
  } else {
    return Promise.reject(response);
  }
};

export default Api;
