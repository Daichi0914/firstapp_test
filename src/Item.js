import React from 'react';

const Item = ({ content, id, deleteToDo, isDone, handleCheck, index }) => {
  return (
    <li>
      <input type='checkbox' onClick={() => handleCheck(index)} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{content}</span>
      <button onClick={() => deleteToDo(id)}>削除</button>
    </li>
  );
};

export default Item;
