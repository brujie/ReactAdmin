import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import request from './api/request.js'
import 'antd/dist/antd.css';
import './assets/css/main.css'
React.$http = request
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

