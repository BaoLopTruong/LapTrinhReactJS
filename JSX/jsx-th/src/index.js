import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//Thực hành 1:  Nhúng tên của bạn vào React Element tạo bởi React.createElement
const name = "Bảo Lớp Trưởng";
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
  React.createElement("h1", {style:  { textAlign: "center" } }, name),
  document.getElementById('root')
);

// thực hành 2: Nhúng tên của bạn vào React Element tạo bởi JSX
const myname = "Lê Ngọc Bảo"
ReactDOM.render(
  <><h1>TH2:</h1><h1 style={{ textAlign: "center" }}>
    {myname}
  </h1></>,
document.getElementById('name')
);


// thực hành 3: Tạo Element thể hiện danh sách các loại quả sử dụng hàm hàm React.createElement.

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

ReactDOM.render(
<div>
    <h1>TH3: List of fruits</h1>
    <ul>
      { fruits.map((item) => (
        <li>{ item }</li>
      )) }
    </ul>
 </div>,
document.getElementById('showfruits')
);

// thực hành 4: Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss) bằng JSX
const tick = () => {
  ReactDOM.render(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>,
      document.getElementById('timer')
    );
  }
  
  setInterval(tick, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
