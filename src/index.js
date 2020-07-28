import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Donate from "./components/donate/Donate";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/donate" component={Donate} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
