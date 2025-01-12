import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthRouter({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // Ou outro método de autenticação

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
