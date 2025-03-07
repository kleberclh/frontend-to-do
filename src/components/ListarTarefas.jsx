// components/ListarTarefas.jsx
import React from "react";
import useUserTasks from "../hooks/useUserTasks";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import api from "../api/axios";

export default function ListarTarefas() {
  const { tasks, loading, error, refetch } = useUserTasks();

  if (loading) {
    return <p className="text-center text-gray-600">Carregando tarefas...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        <p>Erro ao carregar tarefas: {error.message}</p>
        <button
          onClick={refetch}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-600">Nenhuma tarefa encontrada.</p>
    );
  }

  const deletarTasks = async (id) => {
    try {
      const deletar = await api.delete(`/tarefa/${id}`);
      console.log(`Tarefa com ID: ${id} deletada`);
      refetch(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-14 border rounded-lg shadow-sm">
      <h1 className="text-xl font-bold text-center mb-4">Minhas Tarefas</h1>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border rounded bg-gray-100 hover:bg-gray-200"
          >
            <span>{task.titulo}</span>
            {/* <span className="text-gray-500 text-sm">{task.data_criacao}</span> */}
            <div className="flex gap-4">
              <button>
                {" "}
                <span className="text-blue-400 hover:text-blue-700">
                  <EditIcon />
                </span>
              </button>
              <span className="text-red-400 hover:text-red-700">
                <button onClick={() => deletarTasks(task.id)}>
                  <DeleteIcon />
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
