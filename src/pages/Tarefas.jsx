import ListarTarefas from "../components/ListarTarefas";
import Perfil from "../components/Perfil";
import CriaTarefa from "../components/CriaTarefa";

export default function Tarefas() {
  return (
    <>
      <Perfil />
      <CriaTarefa />
      <ListarTarefas />
    </>
  );
}
