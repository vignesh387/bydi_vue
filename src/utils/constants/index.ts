import {
  CustomErrorTypes,
  ShiftTypeProps,
  ValidationMessageProps,
} from "./interface";

export const TestBookingMockData = [
  {
    id: 1,
    date: "24 Feb",
    slotNo: 4,
    examiner: "Assessor 1",
    slotList: ["08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM"],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 2,
    examiner: "Assessor 1 (Al Ruwayyah)",
    slotList: ["09:30 AM", "10:00 AM"],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 10,
    examiner: "Assessor 1",
    slotList: [
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
    ],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 6,
    examiner: "Assessor 1",
    slotList: [
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
    ],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 12,
    examiner: "Assessor 1",
    slotList: [
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
    ],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 1,
    examiner: "Assessor 1",
    slotList: ["09:30 AM"],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 5,
    examiner: "Assessor 1",
    slotList: ["09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 8,
    examiner: "Assessor 1",
    slotList: [
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
    ],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 4,
    examiner: "Assessor 1",
    slotList: ["09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
  },
  {
    id: 2,
    date: "25 Feb",
    slotNo: 3,
    examiner: "Assessor 1",
    slotList: ["09:30 AM", "10:00 AM", "10:30 AM"],
  },
];

export const ShiftType: ShiftTypeProps[] = [
  {
    shiftType: "All",
    startTime: "07:30",
    endTime: "23:00",
    label: "07:30 AM - 23:00 PM",
  },
  {
    shiftType: "Morning",
    startTime: "07:30",
    endTime: "14:30",
    label: "07:30 AM - 02:30 PM",
  },
  {
    shiftType: "Afternoon",
    startTime: "14:30",
    endTime: "17:30",
    label: "02:30 PM - 05:30 PM",
  },
  {
    shiftType: "Night",
    startTime: "17:30",
    endTime: "23:00",
    label: "05:30 PM - 11:00 PM",
  },
];

export const CountryMockData = [
  {
    id: 18,
    name: "Bangladesh",
  },
  {
    id: 62,
    name: "Egypt",
  },
  {
    id: 95,
    name: "India",
  },
  {
    id: 138,
    name: "Morocco",
  },
  {
    id: 143,
    name: "Nepal",
  },
  {
    id: 155,
    name: "Pakistan",
  },
  {
    id: 188,
    name: "Somalia",
  },
  {
    id: 195,
    name: "Sudan",
  },
  {
    id: 215,
    name: "Uganda",
  },
];

export const TransportTimingMockData = [
  { pickupTime: "10:30 AM", arrivalTime: "11:00 AM" },
  { pickupTime: "11:30 AM", arrivalTime: "12:00 PM" },
  { pickupTime: "12:30 PM", arrivalTime: "01:00 PM" },
  { pickupTime: "01:30 PM", arrivalTime: "02:00 PM" },
  { pickupTime: "02:30 PM", arrivalTime: "03:00 PM" },
];

export const CustomErrors: CustomErrorTypes = {
  INVALID_REQUEST: "Invalid request",
  INVALID_OTP: "Invalid OTP",
  SOMETHING_WENT_WRONG: "Something went wrong",
  UNABLE_TO_SAVE_PAYMENT_DETAILS: "Unable to save payment details",
  UNABLE_TO_FETCH_PAYMENT_STATUS: "Unable to fetch payment status",
  UNABLE_TO_SAVE_DETAILS: "Unable to save details",
};

// export const getClassTypeIcon = (type: string) => {
//   const classTypeIcons: { [key: string]: string } = {
//     "Road Training": road_training_icon,
//     "Yard Training": yard_training_icon,
//     "Independent Driving": independent_training,
//     "Highway Class": highway_class_icon,
//     "Extra Class": extra_class_icon,
//     "Night Class": night_class_icon,
//     "Stage 1 Training": night_class_icon,
//   };
//   return classTypeIcons[type];
// };

export const NumberRegex: RegExp = /^[0-9]*$/;
export const MobileNumberRegex: RegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const EmaiRegEx: RegExp =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const PaymentDetailData: string[] = [
  "Bin Yaber Charges",
  "RTA Charges",
  "Full Pay Discount",
  "VAT ( 5% )",
  "Total Amount",
];

export const ValidationMessages: ValidationMessageProps = {
  MOBILE_NO_LENGTH: "Mobile Number should be 10 digit",
  MOBILE_NO_INVALID: "Invalid Mobile Number",
  MOBILE_NO_STARTS_WITH_ZERO: "Mobile Number should start with 05",
};

export const BYDI_FMS_URL = "https://student.binyaber.com";

// export const getPaymentStatusMsg = (
//   paymentType: PaymentStatusModalType
// ): string => {
//   if (paymentType === PaymentStatusModalType.PAYMENT_SUCCESS) {
//     return "Payment processed successfully";
//   } else if (
//     paymentType === PaymentStatusModalType.PAYMENT_SUCCESS_TABBY_FIXED
//   ) {
//     return "Tabby payment successfull. our staff will apply the payments";
//   } else if (paymentType === PaymentStatusModalType.PAYMENT_SUCCESS_TABBY) {
//     return "Tabby payment processed successfully";
//   } else {
//     return "Your transaction is incomplete";
//   }
// };

export enum APP_TYPE {
  ANDROID = 1,
  IOS = 2,
  HUWAWEI = 3,
}

export const getAppLinks = (type: APP_TYPE): string => {
  const appLinks = {
    [APP_TYPE.ANDROID]: "https://gsw.ae/8tzD",
    [APP_TYPE.IOS]: "https://gsw.ae/8tzE",
    [APP_TYPE.HUWAWEI]: "https://gsw.ae/8tzQ",
  };
  return appLinks[type];
};

export const STUDENT_PORTAL_LINK = "https://studentmob.binyaber.com/register";
export const FMS_PORTAL_LINK = "https://student.binyaber.com";

export const BYDI_TABBY_LINK =
  "https://tabby.ai/en-AE/merchant/bin-yaber-driving-institute";

export enum DocumentType {
  Emirates_ID = 1,
  NOC = 2,
  Learning_Permit = 3,
  Male_Permission_Letter = 4,
  Current_License = 5,
  Transfer_In_NOC = 7,
  Traffic_Number = 10,
  Eye_Test = 16,
  Passport_Copy = 17,
  Transfer_Out_NOC = 1016,
  Transport_Request = 1017,
  Additional_Discount_Approval = 1018,
  Student_Information_Checklist = 1019,
  Passport = 1020,
  Visa = 1021,
  Final_Account_Clearance = 1022,
  Attendance_Records = 1023,
  RTA_Documents = 1024,
  Clearance = 1025,
  Contract_Summary = 1026,
  Renewal_Learning_Permit = 1027,
  Medical_Report = 1028,
  Refreshment_Agreement = 1029,
  UAE_LICENCE = 1030,
  PROFILE_IMAGE = 1031,
}

export const getDocumentName = (docType: DocumentType): string => {
  const documentNames: { [key: number]: string } = {
    [DocumentType.Emirates_ID]: "Upload Emirates ID",
    [DocumentType.NOC]: "Upload NOC",
    [DocumentType.Learning_Permit]: "Upload Learning Permit",
    [DocumentType.Male_Permission_Letter]: "Upload Male Permission Letter",
    [DocumentType.Current_License]: "Upload Home Country Licence",
    [DocumentType.Transfer_In_NOC]: "Upload Transfer In NOC",
    [DocumentType.Traffic_Number]: "Upload Traffic Number",
    [DocumentType.Eye_Test]: "Upload Eye Test",
    [DocumentType.Passport_Copy]: "Upload Passport Copy",
    [DocumentType.Transfer_Out_NOC]: "Upload Transfer Out NOC",
    [DocumentType.Transport_Request]: "Upload Transport Request",
    [DocumentType.Additional_Discount_Approval]:
      "Upload Additional Discount Approval",
    [DocumentType.Student_Information_Checklist]:
      "Upload Student Information Checklist",
    [DocumentType.Passport]: "Upload Passport",
    [DocumentType.Visa]: "Uplaod Visa",
    [DocumentType.Final_Account_Clearance]: "Upload Final Account Clearance",
    [DocumentType.Attendance_Records]: "Upload Attendance Records",
    [DocumentType.RTA_Documents]: "Upload RTA Documents",
    [DocumentType.Clearance]: "Upload Clearance",
    [DocumentType.Contract_Summary]: "Upload Contract Summary",
    [DocumentType.Renewal_Learning_Permit]: "Upload Renewal Learning Permit",
    [DocumentType.Medical_Report]: "Upload Medical Report",
    [DocumentType.Refreshment_Agreement]: "Upload Refreshment Agreement",
    [DocumentType.UAE_LICENCE]: "Upload UAE Licence",
    [DocumentType.PROFILE_IMAGE]: "Upload Profile Image",
  };
  return documentNames[docType];
};

export const TRANSPORT_TERMS_ENGLISH = {
  title: "Dear Student,",
  subTitle:
    "If you are scheduling your test for the Current or next day or Apart from the available Institute's transportation timings, you have to arrange your transportation by your own.",
};

export const TRANSPORT_TERMS_URUDU = {
  title: "عزیز طالب علم،",
  subTitle:
    "گر آپ اپنا ٹیسٹ آج یا اگلے دن کے لئے شیڈول کر رہے ہیں یا انسٹی ٹیوٹ کے دستیاب ٹرانسپورٹیشن اوقات کے علاوہ کسی اور وقت، تو آپ کو اپنی ٹرانسپورٹیشن کا انتظام خود کرنا ہوگا۔ براہ کرم نیچے دیے گئے لنک سے ہمارے ٹرانسپورٹیشن پک اپ اور آمد کے اوقات دیکھیں۔",
};

export const TRANSPORT_TERMS_ARABIC = {
  title: "عزيزي الطالب،",
  subTitle:
    "إذا كنت تقوم بجدولة اختبارك لليوم الحالي أو اليوم التالي أو خارج أوقات النقل المتاحة في المعهد، فعليك ترتيب وسيلة النقل الخاصة بك. يرجى الرجوع إلى الرابط أدناه لمواعيد التقاط ووصول النقل الخاصة بنا.",
};

// export const SIDE_MENU_ITEMS = [
//   {
//     id: 1,
//     title: "Student Activity",
//     subMenu: [],
//     isSubMenuAvailable: false,
//     menuIcon: graduation_gray_icon,
//     navLink: "",
//   },
//   {
//     id: 2,
//     title: "Payment",
//     subMenu: [
//       {
//         id: 1,
//         title: "Online Payment",
//         navLink: "payment",
//         isExternalLink: false,
//       },
//       {
//         id: 2,
//         title: "Payment History",
//         navLink: "payment-history",
//         isExternalLink: false,
//       },
//     ],
//     isSubMenuAvailable: true,
//     menuIcon: money_dark_gray_icon,
//     navLink: "",
//   },
//   {
//     id: 3,
//     title: "Theory Test",
//     subMenu: [
//       {
//         id: 1,
//         title: "Practice Test",
//         navLink: "",
//         isExternalLink: true,
//       },
//       {
//         id: 2,
//         title: "Mock Test",
//         navLink: "",
//         isExternalLink: true,
//       },
//       {
//         id: 3,
//         title: "Mock Test Report",
//         navLink: "mocktest-report",
//         isExternalLink: false,
//       },
//     ],
//     isSubMenuAvailable: true,
//     menuIcon: reader_dark_gray_icon,
//     navLink: "",
//   },
//   {
//     id: 4,
//     title: "Requests",
//     subMenu: [
//       {
//         id: 1,
//         title: "Add Requests",
//         navLink: "request",
//         isExternalLink: false,
//       },
//       {
//         id: 2,
//         title: "Request Log",
//         navLink: "request-report",
//         isExternalLink: false,
//       },
//     ],
//     isSubMenuAvailable: true,
//     menuIcon: hand_dark_gray_icon,
//     navLink: "",
//   },
//   {
//     id: 5,
//     title: "Documents",
//     subMenu: [],
//     isSubMenuAvailable: false,
//     menuIcon: folder_dark_gray_icon,
//     navLink: "documents",
//   },
//   {
//     id: 6,
//     title: "Complaint",
//     subMenu: [
//       {
//         id: 1,
//         title: "Add Complaint",
//         navLink: "complaint",
//         isExternalLink: false,
//       },
//       {
//         id: 2,
//         title: "Complaint Log",
//         navLink: "complaint-log",
//         isExternalLink: false,
//       },
//     ],
//     isSubMenuAvailable: true,
//     menuIcon: file_pen_dark_gray_icon,
//     navLink: "",
//   },
//   {
//     id: 7,
//     title: "Branches",
//     subMenu: [],
//     isSubMenuAvailable: false,
//     menuIcon: file_pen_dark_gray_icon,
//     navLink: "branches",
//   },
// ];

export const PROFILE_SUB_MENU_ITEMS = [
  {
    id: 1,
    title: "View & Edit Profile",
    subMenu: [],
    navLink: "profile",
    isExternalLink: false,
  },
  {
    id: 2,
    title: "BYDI Cancellation Policy",
    subMenu: [],
    navLink: "https://www.binyaber.com/cancellation-policy",
    isExternalLink: true,
  },
  {
    id: 3,
    title: "BYDI Privacy Policy",
    subMenu: [],
    navLink: "https://www.binyaber.com/about-us/privacy-policy",
    isExternalLink: true,
  },
  {
    id: 4,
    title: "Log Out",
    subMenu: [],
    navLink: "",
    isExternalLink: false,
  },
];

export const TABBY_NO_PROCESS_ERROR: string =
  "Unable to process tabby payment. Please select other payment type";

export const DATA_FETCH_NOT_SUCCESSFULL = "Data fetch not successfull";
