import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './View/HomePage.css'
import './View/Users/Users.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
