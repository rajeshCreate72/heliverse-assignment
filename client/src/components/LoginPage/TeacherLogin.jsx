import React from "react";
import "./Login.css";

function TeacherLogin() {
  return (
    <div>
      <p className="text-5xl">Teacher Login</p>
      <form className="flex flex-col items-center justify-center move-center">
        <label className="text-2xl self-center m-10">
          Email: <input type="text" />
        </label>
        <label className="text-2xl self-center m-10">
          Password: <input type="password" />
        </label>
        <button className="self-center text-2xl bg-button p-2 m-2 rounded-md w-40">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TeacherLogin;
