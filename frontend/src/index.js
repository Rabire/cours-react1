import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

import { Header, Home, LoginForm } from "./components";
import reportWebVitals from "./reportWebVitals";
import { UsersList } from "./components/UsersList/UsersList";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route path="/promo" component={UsersList}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
