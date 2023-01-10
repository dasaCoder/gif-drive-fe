import React from "react";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const auth = false;
  return auth ? children : <Navigate to="/login" replace />;
};
