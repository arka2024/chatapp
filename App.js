import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001/");

function App() {
  return (
    <div className="App">
      hehehee
    </div>
  );
}

export default App;
