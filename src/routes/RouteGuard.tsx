import React from "react";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
