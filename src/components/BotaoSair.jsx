import React from "react";
import { useAuth } from "../hooks/authHook";
export default function BotaoSair() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    // Redirecionar para a tela de login
    window.location.href = "/login";
  };
  return (
    <div className="absolute top-1 right-5">
      <button
        onClick={handleLogout}
        className=" bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  );
}
