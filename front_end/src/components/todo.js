import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export const Todo = ({ todolist, settodolist, task, completed, id }) => {
  console.log(todolist);
  const [checked, setchecked] = useState(completed);
  async function handlecheck() {
    const res = await axios.patch(`http://localhost:8000/api/tasks/${id}`, {
      completed: !checked,
    });
    setchecked(!checked);
    console.log(res);
  }
  function edithandler() {}
  async function deletehandler() {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${id}`);
      settodolist(
        todolist.filter((item) => {
          return item._id !== id;
        })
      );
    } catch (err) {
      console.error(`problem in deleting the task`, err);
    }
  }
  const todo = (
    <div className='todo'>
      <div
        className={!checked ? 'todo-content' : 'todo-content-completed'}
      >{`${task}`}</div>
      <div className='input-checkbox'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handlecheck}
          name='checkbox'
        />
      </div>
      <div className='delete'>
        <button onClick={deletehandler}>del</button>
      </div>
      <div className='edit'>
        <button onClick={edithandler}>edit</button>
      </div>
    </div>
  );

  return todo;
};
