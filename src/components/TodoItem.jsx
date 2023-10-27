import PropTypes from 'prop-types'

import componentStyles from '@/styles/TodoItem.module.scss';
import { useState, useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ todo, handleChange, deleteTodo, editTodo }) => {
  const [editing, setEditing] = useState(false);
  // const [updateInput, setUpdateInput] = useState(todo.title);
  const editInputRef = useRef(null)
  const completedStyles = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }
  const viewModeStyle = { };
  const editModeStyle = { };
  if (editing) {
    viewModeStyle.display = 'none';
  } else {
    editModeStyle.display = 'none';
  }

  const handleEditing = () => setEditing(true)
  const handleEditComplete = (e) => {
    if (e.key === 'Enter') {
      setEditing(false)
      editTodo(editInputRef.current.value, todo.id)
    }
  }

  return (
    <li className={componentStyles.item}>
      <div className={componentStyles.content} style={viewModeStyle}>
        <input type='checkbox' 
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}/>
        { !todo.completed && 
          <button onClick={handleEditing}>
            <AiFillEdit />
          </button> 
        }
        <button onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
        <span style={ todo.completed ? completedStyles : null }>
          {todo.title}
        </span>
      </div>
      <input type='text'
        // value={updateInput}
        // onChange={(e) => setUpdateInput(e.target.value)}
        ref={editInputRef}
        defaultValue={todo.title}
        onKeyDown={handleEditComplete}
        className={componentStyles.textInput}
        style={editModeStyle}/>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object, 
  handleChange: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
}

export default TodoItem;