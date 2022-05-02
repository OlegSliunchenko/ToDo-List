import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { ToDoProvider } from "./utils/TodoContext";
import { Home, AddTodo, NotFound } from "./pages";

// CSS
import "./index.css";
import "./reset.css";
import "./normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-todo" element={<AddTodo />} />
          <Route path="add-todo/:id" element={<AddTodo isEdit={true} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToDoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
