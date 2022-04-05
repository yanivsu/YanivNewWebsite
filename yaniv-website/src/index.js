import React from "react";
import ReactDOM from "react-dom";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import App from "./App";
import "./index.css";

// ReactDOM.render(
//   <HashRouter basename="/">
//     <App />
//   </HashRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <BrowserRouter basename="/yaniv-website">
    <Switch>
      <Route path="" component={App} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
