import './App.css';
import { useState } from 'react';
import InputBar from './components/inputbar';
import { ToDoContainer } from './components/todocontainer';
function App() {
  const [todolist, settodolist] = useState([]);
  return (
    <div className='container'>
      <h1 className='header'>Mern stack todo</h1>
      <InputBar todolist={todolist} settodolist={settodolist} />
      <ToDoContainer todolist={todolist} settodolist={settodolist} />
    </div>
  );
}

export default App;
