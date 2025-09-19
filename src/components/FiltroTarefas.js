import React, { useContext } from "react";
// import { TaskContext as Global } from "../context/TaskContext";
import { TaskContext } from "../pages/Reducer";


function FiltroTarefas() {
  const { state, dispatch } = useContext(TaskContext);

  return (
    <div className="div-botoes">
      <p className="label-filtros">Filtros: </p>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "tudo" })}
        disabled={state.filter === "tudo"}
      >
        Todas
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "feito" })}
        disabled={state.filter === "feito"}
      >
        Concluídas
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "pendente" })}
        disabled={state.filter === "pendente"}
      >
        Pendentes
      </button>
    </div>
  );
}

export default FiltroTarefas;
