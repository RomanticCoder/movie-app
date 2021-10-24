import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// it is the process that put your code into the HTML root div
// React js put your App.js component into the div root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);