import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);