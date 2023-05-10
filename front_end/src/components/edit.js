import React from 'react';
import axios from 'axios';
import { useState } from 'react';
export const Edit = ({
  editmode,
  seteditmode,
  edittask,
  todolist,
  settodolist,
}) => {
  const [edittext, seteditext] = useState(edittask.task);
  async function editupdatehandler(id, edittedtask) {
    if (!edittedtask) {
      alert('Enter any tasks or delete it');
    }
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/tasks/${id}`,
        {
          task: edittedtask,
        }
      );
      settodolist((prev) => {
        return [...prev, response.data];
      });
      seteditmode(!editmode);
    } catch (err) {
      console.error(`error happened in updating the task`, err);
    }
  }
  async function editdeletehandler(id) {
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
    seteditmode(!editmode);
  }
  return (
    <div className='editcontainer'>
      <input
        type='text'
        className='edit-input'
        onChange={(e) => {
          seteditext(e.target.value);
        }}
        value={edittext}
      />
      <button
        className='edit-del-button'
        onClick={() => {
          editdeletehandler(edittask.id);
        }}
      >
        delete
      </button>
      <button
        className='update-button'
        onClick={() => {
          editupdatehandler(edittask.id, edittext);
        }}
      >
        update
      </button>
    </div>
  );
};
