import React from "react";
import { useNavigate } from "react-router-dom";
import principalImage from "../../assets/principal.png";
import studentImage from "../../assets/student.png";
import teacherImage from "../../assets/teacher.png";
import "./homepage.css";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="flex flex-row items-center justify-between p-10">
        <img className="images" src={principalImage} alt="principal-image" />
        <div className="flex flex-col items-center p-10">
          <h2 className="text-3xl">Principal Login</h2>
          <button
            className="text-2xl bg-button p-2 m-2 rounded-md"
            onClick={() => navigate("/principal-login")}
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-10">
        <img className="images" src={teacherImage} alt="teacher-image" />
        <div className="flex flex-col items-center p-10">
          <h3 className="text-3xl">Teacher Login</h3>
          <button
            className="text-2xl bg-button p-2 m-2 rounded-md"
            onClick={() => navigate("/teacher-login")}
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-10">
        <img className="images" src={studentImage} alt="student-image" />
        <div className="flex flex-col items-center p-10">
          <h3 className="text-3xl">Student Login</h3>
          <button
            className="text-2xl bg-button p-2 m-2 rounded-md"
            onClick={() => navigate("/student-login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
