import Homepage from "./components/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TeacherLogin from "./components/LoginPage/TeacherLogin";
import StudentLogin from "./components/LoginPage/StudentLogin";
import PrincipalLogin from "./components/LoginPage/PrincipalLogin";
import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import PrincipalDashboard from "./components/Dashboard/PrincipalDashboard";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import axios from "axios";
import { useEffect } from "react";

function App() {
  let isAuthenticated = !!sessionStorage.getItem("authToken");

  const handleTokenAuth = async (e) => {
    const token = sessionStorage.getItem("authToken");
    try {
      const response = await axios.get(process.env.PR_ROUTE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      isAuthenticated = false;
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
