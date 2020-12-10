import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import List from './List';

const App = () => {
  const [isDone, setIsDone] = useState(false);
  const [toDos, setToDos] = useState({
    TODO_LIST: [
      {
        content: '掃除をする',
        id: nanoid(),
        isDone: isDone,
      },
      {
        content: '洗濯をする',
        id: nanoid(),
        isDone: isDone,
      },
      {
        content: '料理をする',
        id: nanoid(),
        isDone: isDone,
      },
    ],
  });

  const addToDo = content => {
    setToDos({
      TODO_LIST: [
        ...toDos.TODO_LIST,
        {
          content: content,
          id: nanoid(),
          isDone: isDone,
        },
      ],
    });
  };

  const handleCheck = index => {
    const { TODO_LIST } = toDos;
    setIsDone((TODO_LIST[index].isDone = !toDos.TODO_LIST[index].isDone));
    setToDos({ TODO_LIST });
  };

  const deleteToDo = id => {
    setToDos({
      TODO_LIST: toDos.TODO_LIST.filter(toDo => toDo.id !== id), // filterは配列を返すので[]はいらない
    });
  };

  return (
    <>
      <h1>ToDo App</h1>
      <Form addToDo={addToDo} />
      <List toDos={toDos.TODO_LIST} deleteToDo={deleteToDo} handleCheck={handleCheck} />
    </>
  );
};

export default App;
