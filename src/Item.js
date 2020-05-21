import React, { useState } from 'react';

const Item = ({ content, deleteToDo, id }) => {
  const [isDone, setIsDone] = useState(false);

  const textDecoration = {
    textDecoration: isDone ? 'line-through' : 'none'
  }

  const handleDelete = () => {
    deleteToDo(id)
  }

  return (
    <li>
      <input type='checkbox' onChange={() => {
        setIsDone(!isDone)
      }}/>
      <span style={textDecoration}>{content}</span>
      <button onClick={handleDelete}>
        削除
      </button>
    </li>
  )
}

export default Item