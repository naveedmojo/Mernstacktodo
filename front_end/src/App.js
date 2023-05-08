import './App.css';
import InputBar from './components/inputbar';
import { ToDDoContainer } from './components/todocontainer';
function App() {
  return (
    <div className='container'>
      <h1 className='header'>Mern stack todo</h1>
      <InputBar />
      <ToDDoContainer />
    </div>
  );
}

export default App;
