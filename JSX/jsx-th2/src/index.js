import React from 'react';
import './index.css';
// import App from './App';
import  {createRoot } from 'react-dom/client';

// thực hành 2: Nhúng tên của bạn vào React Element tạo bởi JSX
const myname = "Lê Ngọc Bảo"

const app = (
  <><h1>TH2:</h1><h1 style={{ textAlign: "center" }}>
    {myname}
  </h1></>
);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(app);

