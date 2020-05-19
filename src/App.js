import React from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const toDos = [
    {
      content: '課題をする'
    },
    {
      content: '洗濯をする'
    },
    {
      content: '電話をする'
    },
    {
      content: ''
    }
  ]

  return (
    <>
      <h1>ToDo App</h1>
      <Form />
      <List toDos={toDos}/>
    </>
  )
}


export default App