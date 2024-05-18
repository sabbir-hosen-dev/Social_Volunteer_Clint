import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import ProctedRoute from "./ProctedRoute";
import Admin from "../Pages/Admin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <ProctedRoute>
              <Register />
            </ProctedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProctedRoute>
              <Profile />
            </ProctedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProctedRoute >
              <Admin />
              </ProctedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
