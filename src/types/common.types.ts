export interface ApiServiceProps {
  url: string;
  method: ApiMethods;
  data?: object;
  securedHeader: boolean;
  params?: object;
  isFormData?: boolean;
  isEmployee?: boolean;
  employeeAuthToken?: string;
  isTajdeedApi?: boolean;
}

export enum ApiMethods {
  GET = "Get",
  POST = "Post",
}

export interface ApiRequestProps {
  uri: string;
  method: ApiMethods;
  securedHeader: boolean;
}
