import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector('#root'),
);
