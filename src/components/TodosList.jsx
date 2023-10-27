import TodoItem from './TodoItem';
import { useTodosContext } from '@/context/TodosContext';


const TodosList = () => {
  const { todos } = useTodosContext();

  return (
    <ul>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
}

export default TodosList;