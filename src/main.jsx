import ReactDOM from "react-dom/client";
import React from "react";
import TodoApp from "@/components/TodoApp";
import '@/styles/app.scss';
import { HashRouter } from "react-router-dom";

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <HashRouter basename={import.meta.env.DEV ? '/' : '/todo-demo-vite/'}>
      <TodoApp />
    </HashRouter>
  </React.StrictMode>
);