import { Routes, Route, Link } from "react-router-dom";
import Detail from './components/Detail';
import Home from "./components/Home";
import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />

      </Routes>
    </div>
  );
}



export default App;
