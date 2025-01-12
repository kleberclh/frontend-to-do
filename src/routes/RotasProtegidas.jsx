import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import Tarefas from "../pages/Tarefas";

export default function RotasProtegidas() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRouter>
            <Tarefas />
          </AuthRouter>
        }
      />
    </Routes>
  );
}
