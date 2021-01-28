import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

import { Header, Form, CardList } from "./components/";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route path="/login" component={Form} />
      <Route exact path="/" component={CardList} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
