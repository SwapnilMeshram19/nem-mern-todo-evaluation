import './App.css';
import { Login } from './components/Login';
import { ShowTodo } from './components/ShowTodo';

function App() {
  return (
    <div className="App">
      <Login/>
      <ShowTodo/>
    </div>
  );
}

export default App;
