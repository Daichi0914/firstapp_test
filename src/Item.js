import React, { useState } from 'react';

const Item = ({ content }) => {
  const [isDone, setIsDone] = useState(false);

  const textDecoration = {
    textDecoration: isDone ? 'line-through' : 'none'
  }

  return (
    <li>
      <input type='checkbox' onChange={() => {
        setIsDone(!isDone)
      }}/>
      <span style={textDecoration}>{content}</span>
    </li>
  )
}

export default Item