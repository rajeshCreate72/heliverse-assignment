import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
