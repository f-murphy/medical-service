import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/pages/index.css';
import App from "../src/pages/App"

const root = ReactDOM.createRoot(
  document.getElementById('nroot') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
