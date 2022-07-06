
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CreatePage from './components/Home/CreatePage';
import DetailPage from './components/Home/DetailPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/newbook' element={<CreatePage/>}></Route>
          <Route path={`/detail/:bookId`} element={<DetailPage/>} ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
