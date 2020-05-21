import React from 'react';
import Item from './Item'

import styled from 'styled-components'

const List = ({ toDos, deleteToDo }) => {
  return (
    <Ul>
      {
        toDos.map((toDo, index) => { // 第一引数で一つのオブジェクトを持ってくる
          return (
            <Item
              content={toDo.content}
              key={index}
              deleteToDo={deleteToDo}
              id={toDo.id}
            />
          )
        })
      }
    </Ul>
  )
}

const Ul = styled.ul`
  list-style: none;
`

export default List