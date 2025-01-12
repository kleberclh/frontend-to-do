import React, { useState } from "react";
import Input from "../components/input";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {

  };

  const handleSubmit = (e) => {

  };

  return (
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
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        value={formData.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Entrar
      </button>
    </form>
  );
}
