import { useState } from "react";
import api from "../api/axios";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (email, senha) => {
    try {
      const response = await api.post("login", { email, senha });
      const { id, token, nome, email, user: loggedUser } = response.data;
      localStorage.setItem("id", id);
      localStorage.setItem("token", token);
      localStorage.setItem("nome", nome);
      localStorage.setItem("email", email);
      setUser(loggedUser);
    } catch (error) {
      console.error(
        "Erro ao fazer login, pode ser na variavel LOGIN do useAuth: ",
        error
      );
      throw error;
    }
  };
  const registrar = async (nome, email, senha) => {
    try {
      const response = await api.post("criar", { nome, email, senha });
      const { user: registeredUser } = response.data;
      setUser(registeredUser);
    } catch (error) {
      console.error(
        "Erro ao se registrar, pode ser na variavel registrar do useAuth: ",
        error
      );
      throw error;
    }
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };
  return { user, login, registrar, logout };
};
