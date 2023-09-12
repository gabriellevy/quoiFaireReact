import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Saisie from './comp/Saisie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saisie />
  </React.StrictMode>
);

