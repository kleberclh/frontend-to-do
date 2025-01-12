import React, { useState } from "react";
import Input from "../components/input";
import useTask from "../hooks/taskHook";

export default function CriaTarefa() {
  const [tarefa, setTarefa] = useState("");
  const { addTasks } = useTask(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTasks(tarefa); 
      setTarefa("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border rounded-lg shadow-sm space-y-4"
      >
        <div>
          <Input
            label="Adicionar tarefa"
            type="text"
            placeholder="Adicionar uma tarefa..."
            maxLength={50}
            required
            value={tarefa} // Bind do estado "tarefa" com o input
            onChange={(e) => setTarefa(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Adicionar tarefa
          <span className="ml-2 text-sm text-gray-600">
            (max 50 caracteres)
          </span>
        </button>
      </form>
    </>
  );
}
