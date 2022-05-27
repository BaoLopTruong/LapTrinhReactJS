import './index.css';
// import { createRoot } from 'react-dom/client';
//import App from './App';
import * as ReactDOM from 'react-dom/client';
import Loading from './components/Loading';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Loading/>);

//const root = ReactDOM.createRoot(document.getElementById("root"));