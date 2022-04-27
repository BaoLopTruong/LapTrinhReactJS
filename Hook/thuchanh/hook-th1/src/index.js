import './index.css';
import { createRoot } from 'react-dom/client';
import Count from './components/Count';
// import Student from './components/Student';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Count />);
