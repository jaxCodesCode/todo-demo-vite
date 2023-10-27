import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
  const initTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return  storedTodos ? JSON.parse(storedTodos) : [];
  }
  
  const [todos, setTodos] = useState(initTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id
      })
    ])
  }

  const addTodo = (title) => {
    setTodos([...todos, 
      {
        id: uuidv4(),
        title: title,
        completed: false
      }
    ])
  }

  const editTodo = (title, id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      
      return todo;
    }))
  }
  
  return (
    <div>
      <InputTodo addTodo={addTodo}/>
      <TodosList todos={todos} 
        handleChange={handleChange}
        deleteTodo={deleteTodo}
        editTodo={editTodo}/>
    </div>
  );
}

export default TodosLogic;