import React, { useContext } from "react";
import { TaskContext } from "../pages/Reducer";

function Tarefa({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.text}
      </span>
    </li>
  );
}

export default Tarefa;
