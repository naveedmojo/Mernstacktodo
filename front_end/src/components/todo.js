import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export const Todo = ({
  todolist,
  settodolist,
  task,
  completed,
  id,
  editmode,
  seteditmode,
  edittask,
  setedittask,
}) => {
  const [checked, setchecked] = useState(completed);
  async function handlecheck() {
    await axios.patch(`http://localhost:8000/api/tasks/${id}`, {
      completed: !checked,
    });
    setchecked(!checked);
  }
  function edithandler(id, task, completed) {
    seteditmode(!editmode);
    const updatedtask = { id: id, task: task, completed: completed };
    setedittask(updatedtask);
  }
  async function deletehandler(id) {
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
        <button
          onClick={() => {
            deletehandler(id);
          }}
        >
          del
        </button>
      </div>
      <div className='edit'>
        <button
          onClick={() => {
            edithandler(id, task, completed);
          }}
        >
          edit
        </button>
      </div>
    </div>
  );

  return todo;
};
