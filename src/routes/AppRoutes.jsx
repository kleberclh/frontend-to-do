import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotasProtegidas from "./RotasProtegidas";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* rotas protegidas */}
        <Route path="/tarefas/*" element={<RotasProtegidas />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
