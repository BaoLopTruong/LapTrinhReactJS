import './index.css';
import { createRoot } from 'react-dom/client';
import ClockHook from './components/ClockHook';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ClockHook />);
