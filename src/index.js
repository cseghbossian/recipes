import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// The following line is the default setting with React
// serviceWorker.unregister();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration => {
    console.log("Service Worker registered!");
    console.log(registration);
  }).catch(error => {
    console.log("Service Worker failed to register.");
    console.log(error);
  }

  )
  ;
}