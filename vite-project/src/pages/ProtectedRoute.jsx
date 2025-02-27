import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("User in ProtectedRoute:", user); // Debugging: Log the user
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;