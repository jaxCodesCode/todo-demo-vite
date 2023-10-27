import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

import PropTypes from 'prop-types'

const InputTodo = ({ addTodo }) => {

  const [title, setTitle] = useState('');
  const [warning, setWarning] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title)
      setTitle('')
      setWarning('');
    } else {
      setWarning('Please add an item.')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" 
          placeholder="Add Todo..." 
          value={title} 
          onChange={handleChange}
          className="input-text"/>
        <button className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{warning}</span>
    </>
  )
}

InputTodo.propTypes = {
  addTodo: PropTypes.func
}

export default InputTodo;