import logo from './logo.svg';
import './App.css';
import ClassClock from './Component/ClassClock';
import FuncClock from './Component/FuncClock';

function App() {
  return (
    <div className="App">
      <ClassClock />
      <br />
      <hr />
      <FuncClock />
    </div>
  );
}

export default App;
