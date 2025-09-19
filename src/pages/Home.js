import React from "react";
import NovaTarefa from "../components/NovaTarefa";
import ListaDeTarefas from "../components/ListaDeTarefas";
import FiltroTarefas from "../components/FiltroTarefas";

function Home() {
  return (
    <div className="corpo">
      <h1 className="titulo-geral">Gerenciador de Tarefas</h1>
      <NovaTarefa />
      <FiltroTarefas />
      <ListaDeTarefas />
    </div>
  );
}

export default Home;
