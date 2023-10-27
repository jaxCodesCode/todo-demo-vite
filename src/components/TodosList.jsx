import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChange, deleteTodo, editTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem key={todo.id} 
            todo={todo} 
            handleChange={handleChange}
            deleteTodo={deleteTodo}
            editTodo={editTodo}/>
        ))
      }
    </ul>
  )
}

TodosList.propTypes = {
  todos: PropTypes.array,
  handleChange: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
}

export default TodosList;