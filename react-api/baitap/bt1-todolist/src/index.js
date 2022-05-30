import './index.css';
// import { createRoot } from 'react-dom/client';
import App from './App';
import * as ReactDOM from 'react-dom/client';
// import ToDoList from './components/ToDoList';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

//const root = ReactDOM.createRoot(document.getElementById("root"));