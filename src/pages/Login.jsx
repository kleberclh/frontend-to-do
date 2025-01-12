import React, { useState } from "react";
import Input from "../components/input";
import { useAuth } from "../hooks/authHook";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, senha);
      navigate("/tarefas");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border rounded-lg shadow-sm space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Login</h1>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite seu email"
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
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Entrar
        </button>
        <div className="flex justify-center">
          <p>
            <a href="/registro">Não tem uma conta? Crie agora!</a>
          </p>
        </div>
      </form>
    </>
  );
}
