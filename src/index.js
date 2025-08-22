import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// 서브경로 배포 시에도 안전하게
const BASE =
  (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) ||
  process.env.PUBLIC_URL || '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={BASE}>
    <App />
  </BrowserRouter>
);
