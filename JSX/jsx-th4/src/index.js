import './index.css';
import { createRoot } from 'react-dom/client';

// thực hành 4: Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss) bằng JSX
const tick = (  
 
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
     
    );
    
  
    setInterval(tick, 1000);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(tick);
