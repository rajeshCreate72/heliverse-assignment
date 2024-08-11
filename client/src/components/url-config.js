const BASE_URL = "http://localhost:8000";

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
};
