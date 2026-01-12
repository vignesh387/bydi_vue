import { ApiMethods, ApiRequestProps } from "@/types/common.types";

export const BaseUrl = {
  development: "http://10.1.4.24:89",
  production: "https://studentapi.binyaber.com",
};

// refresh token
export const RefreshTokenApi: ApiRequestProps = {
  uri: "/api/Auth/refreshToken",
  method: ApiMethods.POST,
  securedHeader: false,
};

export const LoginDetailsApi: ApiRequestProps = {
  uri: "/api/Auth/login",
  method: ApiMethods.POST,
  securedHeader: true,
};

export const NotificationListApi: ApiRequestProps = {
  uri: "/api/notification/get",
  method: ApiMethods.GET,
  securedHeader: true,
};

export const GetPaymentDetailsApi: ApiRequestProps = {
  uri: "/api/Payment/getStudentPaymentSummary",
  method: ApiMethods.GET,
  securedHeader: true,
};
