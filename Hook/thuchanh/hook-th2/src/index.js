import './index.css';
import { createRoot } from 'react-dom/client';
import EffectDemo from './components/EffectDemo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EffectDemo />);
