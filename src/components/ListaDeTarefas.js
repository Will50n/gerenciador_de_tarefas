import React, { useContext } from "react";
import { TaskContext } from "../pages/Reducer";
import Tarefa from "./Tarefa";


function ListaDeTarefas() {
  const { state } = useContext(TaskContext);
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "feito") return task.done;
    if (filter === "pendente") return !task.done;
    return true; // tudo
  });

  return (
    <div className="div-lista-tarefas">
      <h2 className="titulo-lista" >Lista de Tarefas</h2>
      <ul className="lista-tarefas">
        {filteredTasks.map((task) => (
          <Tarefa key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
