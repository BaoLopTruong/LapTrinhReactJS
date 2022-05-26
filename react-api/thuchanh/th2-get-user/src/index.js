import './index.css';
import { createRoot } from 'react-dom/client';

import GetUser from './components/demo';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<GetUser />);

