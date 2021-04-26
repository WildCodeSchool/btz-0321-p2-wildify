import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Homepage from './components/homepage/homepage';

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
    {/* <App /> */}
  </React.StrictMode>,
  document.querySelector('#root'),
);
