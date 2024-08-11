import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRINCIPAL_LOGIN } from "../url-config";
import { login } from "../../service/slices/principalAuthSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Login.css";

function PrincipalLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(PRINCIPAL_LOGIN, {
        password: password,
      });
      setResponse(response.data.message || "Login Successful");
      dispatch(login(response.data.token));
    } catch (error) {
      console.log(error.message);
      setError(
        error.response?.data?.message || error.message || "An error occurred"
      );
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center">
      <p className="text-5xl">Principal Login</p>
      <form
        className="flex flex-col items-center justify-center move-center"
        onSubmit={handleSubmit}
      >
        <label className="text-2xl self-center">Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="self-center text-2xl bg-button p-2 m-2 rounded-md w-40"
        >
          Submit
        </button>
      </form>
      {error && <div>{error}</div>} {response && <div>{response}</div>}
    </div>
  );
}

export default PrincipalLogin;
