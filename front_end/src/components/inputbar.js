import React from 'react';
const InputBar = () => {
  return (
    <div className='input-container'>
      <input placeholder='Enter task' required className='input-bar'></input>
      <button className='input-bar-button'>Submit</button>
    </div>
  );
};

export default InputBar;
