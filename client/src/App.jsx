import { useEffect, useState } from "react";
import Homepage from "./components/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import axios from "axios";
import TeacherLogin from "./components/LoginPage/TeacherLogin";
import StudentLogin from "./components/LoginPage/StudentLogin";
import PrincipalLogin from "./components/LoginPage/PrincipalLogin";
import PrincipalDashboard from "./components/PrincipalDashboard/PrincipalDashboard";
import TeacherDashboard from "./components//TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import { PRINCIPAL_VERIFICATION } from "./components/url-config";
import { useDispatch, useSelector } from "react-redux";
import { logout, getMail } from "./service/slices/principalAuthSlice";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleTokenAuth = async (e) => {
    const token = sessionStorage.getItem("authToken");
    try {
      const response = await axios.get(PRINCIPAL_VERIFICATION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getMail(response.data.user.email));
    } catch (error) {
      console.log(error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    handleTokenAuth();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/principal-login"
            element={
              !isAuthenticated ? (
                <PrincipalLogin />
              ) : (
                <Navigate to="/principal-dashboard" />
              )
            }
          ></Route>
          <Route path="/teacher-login" element={<TeacherLogin />}></Route>
          <Route path="/student-login" element={<StudentLogin />}></Route>
          <Route
            path="/principal-dashboard"
            element={
              isAuthenticated ? <PrincipalDashboard /> : <Navigate to="/" />
            }
          ></Route>
          <Route
            path="/teacher-dashboard"
            element={<TeacherDashboard />}
          ></Route>
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
