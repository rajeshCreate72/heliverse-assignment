import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TeacherLogin from "./components/LoginPage/TeacherLogin";
import StudentLogin from "./components/LoginPage/StudentLogin";
import PrincipalLogin from "./components/LoginPage/PrincipalLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/principal-login" element={<PrincipalLogin />}></Route>
          <Route path="/teacher-login" element={<TeacherLogin />}></Route>
          <Route path="/student-login" element={<StudentLogin />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
