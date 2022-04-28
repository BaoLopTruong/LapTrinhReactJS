import './index.css';
import { createRoot } from 'react-dom/client';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Login />);
