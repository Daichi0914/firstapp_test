import React from 'react';
import Item from './Item'

import styled from 'styled-components'

const List = ({ toDos }) => {
  return (
    <Ul>
      {
        toDos.map((toDo, index) => {
          return (
            <Item content={toDo.content} key={index} />
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