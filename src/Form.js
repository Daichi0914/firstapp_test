import React, { useState } from 'react';

const Form = ({ toDos, setToDos, addToDo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    addToDo(value)
    // if (value === "" || value === undefined) {
    //   return alert('文字を入力して下さい。')
    // } else {
    //   setToDos([
    //     ...toDos,
    //     {
    //       content: value
    //     }
    //   ])
    //   // setValue(clearForm)
    // }
  }

  // function clearForm() {
  //   document.getElementById('clear').reset();
  // }

  return (
    <form id='clear' onSubmit={handleSubmit}>
      ToDo:
      <input
        type='text'
        onChange={e => {
          setValue(e.target.value)
        }}
      />
      <button type='submit'>送信</button>
    </form>
  )
}

export default Form