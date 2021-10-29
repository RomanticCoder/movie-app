import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//react application should render only on component

// it is the process that put your code into the HTML root div
// React js put your App.js component into the div root

// <App /> -> basically it is a component
// component : a function that returns HTML
// javascript < - JSX -> HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);