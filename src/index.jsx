import React from 'react';
import ReactDOM from 'react-dom/client';
// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Bootstrap & Fortawesome
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <App />
);

reportWebVitals();
