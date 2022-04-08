
import './index.css';
import { createRoot } from 'react-dom/client';
// thực hành 3: Tạo Element thể hiện danh sách các loại quả sử dụng hàm hàm React.createElement.

 const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];
 const app =(
  <div>
      <h1>TH3: List of fruits</h1>
       <ul>
         { fruits.map((item) => (
          <li>{ item }</li>
        )) }
      </ul>
    </div>
 );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(app);
