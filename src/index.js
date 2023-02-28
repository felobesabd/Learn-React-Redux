// import React  from 'react';
// import ReactDOM  from 'react-dom';
// // import './css/style.css'
// import App from './app.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { store } from './component/Store';
// import { Provider } from 'react-redux'

// ReactDOM.render(
//     <Provider storeContent={store}>
//     <App/>
//     </Provider>
//     ,
//     document.getElementById('root'))
import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import App from "./app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);