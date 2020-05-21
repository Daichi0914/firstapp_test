import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [toDos, setToDos] = useState([
    {
      content: '課題をする'
    },
    {
      content: '洗濯をする'
    },
    {
      content: '電話をする'
    }
  ])

  return (
    <>
      <h1>ToDo App</h1>
      <Form toDos={toDos} setToDos={setToDos} />
      <List toDos={toDos} />
    </>
  )
}


export default App