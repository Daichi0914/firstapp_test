import React from 'react';

const Item = ({ content, id, deleteToDo, isDone, toggleCheck, index }) => {
  return (
    <li>
      <input type='checkbox' onClick={() => toggleCheck(index)} />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{content}</span>
      <button onClick={() => deleteToDo(id)}>削除</button>
    </li>
  );
};

export default Item;
