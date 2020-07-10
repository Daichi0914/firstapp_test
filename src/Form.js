import React, { useState } from 'react';

const Form = ({ addToDo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (value === "" || value === undefined) {
      return alert('文字を入力して下さい。')
    }
    addToDo(value)

    // フォームを空にする

    // state(今回はvalue)を空にする
    setValue('')
    // stateの変更がフォームに反映されるようにする
  }

  return (
    <form id='clear' onSubmit={handleSubmit}>
      ToDo:
      <input
        type='text'
        onChange={e => {
          setValue(e.target.value)
        }}
        value={value}
      />
      <button>送信</button>
    </form>
  )
}

export default Form