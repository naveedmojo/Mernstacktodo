import React from 'react';
import { Todo } from './todo';
import { useEffect } from 'react';
import axios from 'axios';
export const ToDoContainer = ({
  todolist,
  settodolist,
  editmode,
  seteditmode,
  edittask,
  setedittask,
}) => {
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tasks`)
      .then((res) => {
        settodolist(res.data);
      })
      .catch((err) => {
        console.log(`error happened in fetching from database =>  ${err}`);
      });
  });

  return (
    <div className='todocontainer'>
      <h3>Your Tasks</h3>
      {todolist.map((item) => {
        return (
          <Todo
            todolist={todolist}
            settodolist={settodolist}
            task={item.task}
            completed={item.completed}
            id={item._id}
            editmode={editmode}
            seteditmode={seteditmode}
            edittask={edittask}
            setedittask={setedittask}
          />
        );
      })}
      :
    </div>
  );
};
