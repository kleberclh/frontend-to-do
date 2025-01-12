import React, { useState } from "react";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/authHook";
export default function Registro() {
  const navigate = useNavigate();
  const { registrar } = useAuth(); // Importando `registrar` do hook
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registrar(nome, email, senha);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar, JSX do Registrar: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded-lg shadow-sm space-y-4"
    >
      <h1 className="text-xl font-bold text-center">Registro</h1>
      <Input
        label="Nome"
        type="text"
        name="nome"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Senha"
        type="password"
        name="senha"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        Registrar
      </button>
    </form>
  );
}
