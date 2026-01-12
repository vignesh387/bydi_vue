export interface ShiftTypeProps {
  shiftType: string;
  startTime: string;
  endTime: string;
  label: string;
}

export type ApiErrorProps = {
  data?: {
    success: boolean;
    message: string;
    title?: string;
  };
};

export interface CustomErrorTypes {
  INVALID_REQUEST: string;
  SOMETHING_WENT_WRONG: string;
  INVALID_OTP: string;
  UNABLE_TO_SAVE_PAYMENT_DETAILS: string;
  UNABLE_TO_FETCH_PAYMENT_STATUS: string;
  UNABLE_TO_SAVE_DETAILS: string;
}

export interface ValidationMessageProps {
  MOBILE_NO_LENGTH: string;
  MOBILE_NO_INVALID: string;
  MOBILE_NO_STARTS_WITH_ZERO: string;
}
