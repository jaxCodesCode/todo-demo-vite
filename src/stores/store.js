import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { persist } from "zustand/middleware";

const todosStore = (set) => ({
  todos: [],
  addTodo: (title) => {
    set((state) => ({
      todos: [...state.todos, 
        {
          id: uuidv4(),
          title: title,
          completed: false
        }
      ]
    }))
  },
  deleteTodo: (id) => {
    set((state) => ({
      todos: [
        ...state.todos.filter((todo) => todo.id !== id)
      ]
    }))
  },
  handleChange: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }) 
    }))
  },
  editTodo: (title, id) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        
        return todo;
      })
    }))
  }
});

export const useTodosStore = create(
  persist(todosStore, {
    name: 'todos'
  })
);