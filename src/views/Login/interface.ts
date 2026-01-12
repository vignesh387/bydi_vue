export interface LoginProps {
  username: string;
  password: string;
  deviceType: string;
  osType: string;
  deviceId: string;
}

export interface LoginSagaRequestProps {
  data: LoginProps;
  onSuccess: (params: boolean) => void;
  onError: (params: string) => void;
}

export interface LoginMinDetailProps {
  NUMBER_STARTS_WITH: string;
  MINIMUM_USERNAME_LENGTH: number;
  MINIMUM_PASSWORD_LENGTH: number;
}

export interface LoginRegExpProps {
  LOWERCASE_REGEX: RegExp;
  UPPERCASE_REGEX: RegExp;
  NUMBER_REGEX: RegExp;
  SPECIAL_CHAR_REGEX: RegExp;
  MOBILE_NO_REGEX: RegExp;
}

export interface LoginSchemaMessages {
  MOBILE_NO_REQUIRED: string;
  MOBILE_NO_START_WITH_05: string;
  MOBILE_NO_MIN_LENGTH: string;
  MOBILE_NO_INVALID: string;
  PASSWORD_RULES_LOWERCASE_ERROR_MSG: string;
  PASSWORD_RULES_UPPERCASE_ERROR_MSG: string;
  PASSWORD_RULES_NUMBER_ERROR_MSG: string;
  PASSWORD_RULES_SPECIAL_CHAR_ERROR_MSG: string;
  PASSWORD_RULES_ERROR_MSG: string;
  PASSWORD_REQUIRED: string;
}

export interface SignUpProps {
  name: string;
  mobileNo: string;
  password: string;
  email?: string;
  socialPlatform?: number;
  ProfilePicUri?: string;
  SSID?: string;
  deviceId?: string | null;
  deviceType?: string;
  osType?: string;
  pnToken?: string | null;
}

export interface SignUpPayloadProps {
  data: SignUpProps;
  onSuccess: () => void;
  onError: (params: string) => void;
}

export interface GetWebLinkPayloadProps {
  onSuccess: () => void;
  onError: (params: string) => void;
}
