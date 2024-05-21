import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);