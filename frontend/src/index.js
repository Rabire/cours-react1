import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

import { Header, Home } from "./components";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {/* <Route path="/login" component={Form} /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
