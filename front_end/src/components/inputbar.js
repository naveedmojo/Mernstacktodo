import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const InputBar = ({ todolist, settodolist }) => {
  const [text, settext] = useState('');
  function handletext(e) {
    settext(e.target.value);
  }
  async function submithandler() {
    if (text.trim() === '') {
      alert('you should enter any tasks');
      return;
    } else {
      try {
        const res = await axios.post('http://localhost:8000/api/tasks', {
          task: text,
          completed: false,
        });

        settext('');
        settodolist((prev) => {
          return [...prev, res.data];
        });
      } catch (err) {
        console.error(`Error occured  => ${err} `);
      }
    }
  }
  return (
    <div className='input-container'>
      <input
        placeholder='Enter task'
        required
        className='input-bar'
        type='text'
        onChange={handletext}
        value={text}
      ></input>
      <button onClick={submithandler} className='input-bar-button'>
        Submit
      </button>
    </div>
  );
};

export default InputBar;
