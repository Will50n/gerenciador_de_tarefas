import React, { createContext, useReducer } from "react";

// Estado inicial
const estadoInicial = {
  tasks: [],
  filter: "tudo", // tudo | feito | pendente
};

// Reducer para atualizar o estado
function ReducerGerenciador(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

// Criando contexto
export const TaskContext = createContext();

// Provider
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(ReducerGerenciador, estadoInicial);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
