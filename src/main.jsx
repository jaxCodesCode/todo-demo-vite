import ReactDOM from "react-dom/client";
import React from "react";
import TodoApp from "@/components/TodoApp";
import '@/styles/app.scss';
import { BrowserRouter } from "react-router-dom";

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/todo-demo-vite/'}>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
);