import React from 'react';
import Item from './Item'

import styled from 'styled-components'

const List = ({ toDos }) => {
  return (
    <Ul>
      {
        toDos.map((toDo, index) => {
          return (
            <Item key={index} content={toDo.content} />
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