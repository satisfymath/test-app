// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Set initial values in localStorage
localStorage.setItem('FormularioProvider', JSON.stringify(null));
localStorage.setItem('CartProvider', JSON.stringify(null));
localStorage.setItem('AccountProvider', JSON.stringify(null));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
