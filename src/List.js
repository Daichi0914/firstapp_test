import React from 'react';
import Item from './Item';

import styled from 'styled-components';

const List = ({ toDos, deleteToDo, handleCheck }) => {
  return (
    <Ul>
      {toDos.map((toDo, index) => {
        // 第一引数で一つのオブジェクトを持ってくる
        return (
          <Item
            key={toDo.id}
            content={toDo.content}
            id={toDo.id}
            deleteToDo={deleteToDo}
            isDone={toDo.isDone}
            handleCheck={handleCheck}
            index={index}
          />
        );
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
`;

export default List;
