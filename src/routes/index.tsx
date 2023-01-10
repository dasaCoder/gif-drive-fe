import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { RouteGuard } from "./RouteGuard";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <Home />
            </RouteGuard>
          }
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
