import React from "react";
import { useNavigate } from "react-router-dom";
import principalImage from "../../assets/principal.png";
import studentImage from "../../assets/student.png";
import teacherImage from "../../assets/teacher.png";
import "./homepage.css";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between p-10">
      <div>
        <img className="images" src={principalImage} alt="principal-image" />
        <h3>Principal Login</h3>
        <button onClick={() => navigate("/principal-login")}>Login</button>
      </div>
      <div>
        <img className="images" src={teacherImage} alt="teacher-image" />
        <h3>Teacher Login</h3>
        <button onClick={() => navigate("/teacher-login")}>Login</button>
      </div>
      <div>
        <img className="images" src={studentImage} alt="student-image" />
        <h3>Student Login</h3>
        <button onClick={() => navigate("/student-login")}>Login</button>
      </div>
    </div>
  );
}

export default Homepage;
