
// import './App.css';
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Create from './components/Home/Create';
import Detail from './components/Home/Detail';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const userlogined = useSelector(state => state.userlogined);

  useEffect(() => {
    if (!userlogined.username) {
      navigate("/login");
    }
  }, [userlogined, navigate]);
  return (
    <div className="App">
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newbook' element={<Create/>}></Route>
        <Route path={`/detail/:bookId`} element={<Detail/>}></Route>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
