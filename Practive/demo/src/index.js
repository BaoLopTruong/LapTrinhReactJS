import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <BrowserRouter>
      <Routes>
        <Route path='/home/*' element={<App/>}></Route>
        <Route exact path='/' element={<Login/>}></Route>
      </Routes>
   </BrowserRouter>
 
);

