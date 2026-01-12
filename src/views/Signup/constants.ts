import { SignUpSchemaMessageProps } from "./interface";

export const SIGNUP_SCHEMA_MESSAGES: SignUpSchemaMessageProps = {
  VALID_NAME: "Please enter valid name",
  NAME_REQUIRED: "Fullname is required",
  PASSWORD_NOT_MATCHED: "Password not matched",
  CONFIRM_PASSWORD_REQUIRED: "Confirm Password is required",
};

export const FULLNAME_REGEX: RegExp = new RegExp(/^[A-Za-z ]*$/);
