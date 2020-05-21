import React, { useState } from 'react';
import shortid from 'shortid';
import Form from './Form';
import List from './List';


const App = () => {
  const [toDos, setToDos] = useState([
    {
      content: '課題をする',
      id: shortid.generate()
    },
    {
      content: '洗濯をする',
      id: shortid.generate()
    },
    {
      content: '電話をする',
      id: shortid.generate()
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

  const deleteToDo = id => {
    // const copyToDos = toDos.slice(0, toDos.length); // 0から最後まで
    const copyToDos = toDos.slice(); // 配列全部をコピーするときは引数省略可
    alert(id + ' is deleted!!');

    // toDos(配列)からidプロパティが合致する要素(オブジェクト)を検索
    const deleteIndex = copyToDos.findIndex((toDo) => {
      return toDo.id === id // Boolean値が返る
    })

    copyToDos.splice(deleteIndex, 1)
    setToDos(copyToDos)
    /*
    setToDos(copyToDos.splice(deleteIndex, 1))
    ↑切り取ったやつを表示してしまう
    */
  }

  return (
    <>
      <h1>ToDo App</h1>
      <Form addToDo={addToDo} />
      <List toDos={toDos} deleteToDo={deleteToDo} />
    </>
  )
}


export default App