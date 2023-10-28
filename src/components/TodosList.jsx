import { useTodosStore } from '@/store';
import TodoItem from './TodoItem';

const TodosList = () => {
  const todos = useTodosStore((state) => state.todos);
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} /> 
        ))
      }
    </ul>
  );
}

export default TodosList;