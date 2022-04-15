import './index.css';
//import App from './App';
import { createRoot } from 'react-dom/client';
import CalculatorFunction from './components/Calculator';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CalculatorFunction />);