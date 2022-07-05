
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CreateBook from './components/Home/NewBook';
import DetailBook from './components/Home/DetailBook';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/newbook' element={<CreateBook/>}></Route>
          <Route path={`/detail/:bookId`} element={<DetailBook/>}></Route>

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
