import React, { useState } from 'react';
import shortid from 'shortid';
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

  const addToDo = content => {
    setToDos([
      ...toDos,
      {
        content: content,
        id: shortid.generate()
      }
    ])
  }

  return (
    <>
      <h1>ToDo App</h1>
      <Form toDos={toDos} setToDos={setToDos} addToDo={addToDo}/>
      <List toDos={toDos} />
    </>
  )
}


export default App