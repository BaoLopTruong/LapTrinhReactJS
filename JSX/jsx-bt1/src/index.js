import './index.css';
import { createRoot } from 'react-dom/client';

// bai tap 1: Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng

const div = (
  <h4>Browser's details: { navigator.userAgent }</h4>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(div);
