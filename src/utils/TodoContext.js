import React, { useState } from "react";

export const defaultState = {
  list: [],
};

export const ToDoContext = React.createContext(null);

export const ToDoProvider = ({ children }) => {
  // creating a local state
  const [todoList, setTodoList] = useState([]);

  return <ToDoContext.Provider value={{ todoList, setTodoList }}>{children}</ToDoContext.Provider>;
};
