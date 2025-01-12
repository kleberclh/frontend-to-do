import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/authHook";
import BotaoSair from "./BotaoSair";

export default function Perfil() {
  const { user } = useAuth(); // Pega as informações do usuário logado
  const [nome, setNome] = useState("");

  useEffect(() => {
    // Caso o usuário não esteja no estado 'user', tenta pegar do localStorage
    if (!user) {
      const nomeUser = localStorage.getItem("nome");
      if (nomeUser) {
        setNome(nomeUser);
      }
    } else {
      setNome(user.nome); // Pega o nome do usuário logado
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center mb-10 h-20 bg-gray-50 relative">
      <h1 className="text-3xl font-semibold text-center text-gray-800">
        Seja bem-vindo!{" "}
        <span className="text-blue-500">{nome ? nome : "Usuário"}</span>
      </h1>
      <BotaoSair />
    </div>
  );
}
