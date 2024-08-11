const BASE_URL = "https://heliverse-assignment-ruddy.vercel.app";

// Principal details handling
const PRINCIPAL_LOGIN = `${BASE_URL}/api/v1/principal`;

// Teachers Details handling
const TEACHERS_CONFIG_MAIL = `${BASE_URL}/api/v1/teacher/post-mail`;
const TEACHERS_CONFIG_PASS = `${BASE_URL}/api/v1/teacher/post-password`;
const TEACHERS_DETAILS_UPDATE = `${BASE_URL}/api/v1/update/:email`;
const TEACHERS_DETAILS_DELETE = `${BASE_URL}/api/v1/delete/:email`;

// Students Details handling
const STUDENT_CONFIG_ID = `${BASE_URL}/api/v1/student/post-id`;
const STUDENT_CONFIG_PASS = `${BASE_URL}/api/v1/student/post-password`;
const STUDENT_DETAILS_UPDATE = `${BASE_URL}/api/v1/update/:sId`;
const STUDENT_DETAILS_DELETE = `${BASE_URL}/api/v1/delete/:sId`;

// Token Verification
const PRINCIPAL_VERIFICATION = `${BASE_URL}/api/v1/principal/protected-route`;
const TEACHER_VERIFICATION = `${BASE_URL}/api/v1/teacher/protected-route`;
const STUDENT_VERIFICATION = `${BASE_URL}/api/v1/student/protected-route`;

export {
  PRINCIPAL_LOGIN,
  TEACHERS_CONFIG_MAIL,
  TEACHERS_CONFIG_PASS,
  TEACHERS_DETAILS_UPDATE,
  TEACHERS_DETAILS_DELETE,
  STUDENT_CONFIG_ID,
  STUDENT_CONFIG_PASS,
  STUDENT_DETAILS_UPDATE,
  STUDENT_DETAILS_DELETE,
  PRINCIPAL_VERIFICATION,
  TEACHER_VERIFICATION,
  STUDENT_VERIFICATION,
};
