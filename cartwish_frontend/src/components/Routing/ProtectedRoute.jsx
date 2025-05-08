// ProtectedRoute.jsx
import React from "react";
import { getUser } from "../../services/userServices";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();

  return getUser() ? (
    <Outlet /> // Render child components if authenticated
  ) : (
    <Navigate to="/login" state={{ from: location }} /> // Pass entire location object
  );
};

export default ProtectedRoute;
