import './App.css';
import { useState } from 'react';
import InputBar from './components/inputbar';
import { ToDoContainer } from './components/todocontainer';
import { Edit } from './components/edit';
function App() {
  const [todolist, settodolist] = useState([]);
  const [edittask, setedittask] = useState({});
  const [editmode, seteditmode] = useState(false);
  return (
    <div className='container'>
      <h1 className='header'>Mern stack todo</h1>
      <InputBar todolist={todolist} settodolist={settodolist} />
      {!editmode ? (
        <ToDoContainer
          todolist={todolist}
          settodolist={settodolist}
          editmode={editmode}
          seteditmode={seteditmode}
          edittask={edittask}
          setedittask={setedittask}
        />
      ) : (
        <Edit
          editmode={editmode}
          seteditmode={seteditmode}
          edittask={edittask}
          setedittask={setedittask}
          todolist={todolist}
          settodolist={settodolist}
        />
      )}
    </div>
  );
}

export default App;
