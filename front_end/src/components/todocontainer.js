import React from 'react';
import { Todo } from './todo';
export const ToDDoContainer = () => {
  return (
    <div className='todocontainer'>
      <h3>Your Tasks</h3>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};
