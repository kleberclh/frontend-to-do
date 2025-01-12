import { useState } from "react";
import api from "../api/axios";

export default function useTask() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tarefa");
      setTasks(response.data); // Atualiza a lista de tarefas
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const addTasks = async (titulo) => {
    try {
      const response = await api.post("/tarefa", { titulo }); // Envia o título da tarefa para a API
      setTasks([...tasks, response.data]); // Atualiza a lista de tarefas com a nova tarefa
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return { tasks, fetchTasks, addTasks }; // Retorna as funções e o estado
}
