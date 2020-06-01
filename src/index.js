import React from "react";

import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import { Context } from "./context";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Context>
      <App />
    </Context>
  </Router>,
  document.getElementById("root")
);
