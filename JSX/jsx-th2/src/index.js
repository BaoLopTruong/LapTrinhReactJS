import React from 'react';
import './index.css';
import App from './App';
import  {createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App  />);


// thực hành 2: Nhúng tên của bạn vào React Element tạo bởi JSX
//const myname = "Lê Ngọc Bảo"

// document.getElementById('yourname').innerText = myname;
  
document.getElementById('root')
