import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from './components/Home/HomePage';
import CreateBook from './components/Home/CreateBook';
import Layout from './components/Layout/Layout';
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
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/newbook" element={<CreateBook />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
