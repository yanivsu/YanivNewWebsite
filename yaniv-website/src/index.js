import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Router, BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// ReactDOM.render(
//   <HashRouter basename="/">
//     <App />
//   </HashRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
