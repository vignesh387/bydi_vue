import {
  LoginMinDetailProps,
  LoginRegExpProps,
  LoginSchemaMessages,
} from "./interface";

export const LOGIN_SCHEMA_MESSAGES: LoginSchemaMessages = {
  MOBILE_NO_REQUIRED: "Mobile no is required",
  MOBILE_NO_START_WITH_05: "Mobile No should start with 05",
  MOBILE_NO_MIN_LENGTH: "Mobile No should be 10 digits",
  PASSWORD_RULES_LOWERCASE_ERROR_MSG:
    "Password should contain atleast one lowercase letter",
  PASSWORD_RULES_UPPERCASE_ERROR_MSG:
    "Password should contain atleast one uppercase letter",
  PASSWORD_RULES_NUMBER_ERROR_MSG: "Password should contain atleast one number",
  PASSWORD_RULES_SPECIAL_CHAR_ERROR_MSG:
    "Password should contain atleast one special character",
  PASSWORD_RULES_ERROR_MSG: "Password should be atleast 8 characters",
  PASSWORD_REQUIRED: "Password required",
  MOBILE_NO_INVALID: "Mobile no is invalid",
};

export const LOGIN_REGEX: LoginRegExpProps = {
  LOWERCASE_REGEX: new RegExp(/\w*[a-z]\w*/),
  UPPERCASE_REGEX: new RegExp(/\w*[A-Z]\w*/),
  NUMBER_REGEX: new RegExp(/\d/),
  SPECIAL_CHAR_REGEX: new RegExp(/[!@#$%^]/),
  MOBILE_NO_REGEX: new RegExp(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  ),
};

export const LOGIN_MIN_DETAILS: LoginMinDetailProps = {
  NUMBER_STARTS_WITH: "05",
  MINIMUM_USERNAME_LENGTH: 10,
  MINIMUM_PASSWORD_LENGTH: 8,
};
