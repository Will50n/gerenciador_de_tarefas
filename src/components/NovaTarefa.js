import React, { useState, useContext } from "react";
import { TaskContext } from "../pages/Reducer";

function NovaTarefa() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    if (text.trim() === "") return;
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text, done: false },
    });
    setText("");
  };

  return (
    <div>
      <input className="input-nova-tarefa"
        type="text"
        value={text}
        placeholder="Digite uma nova tarefa..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>+ Adicionar</button>
    </div>
  );
}

export default NovaTarefa;
