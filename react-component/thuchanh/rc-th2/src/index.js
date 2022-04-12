import './index.css';
import App from '../../rc-th2/src/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
