// hooks/useUserTasks.js
import { useState, useEffect } from "react";
import api from "../api/axios";

const useUserTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get("/me"); // Endpoint para buscar as tarefas do usuário
      console.log(response);
      setTasks(response.data.tarefas); // Certifique-se de que "tasks" corresponde ao formato retornado pela API
    } catch (err) {
      console.error("Erro ao buscar tarefas do usuário:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserTasks();
  }, []);

  return { tasks, loading, error, refetch: fetchUserTasks };
};

export default useUserTasks;
