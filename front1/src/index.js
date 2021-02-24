import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

import { Home, Login, Offers, News } from "./pages";
import { Header } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/offers" component={Offers} />
      <Route path="/news" component={News} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
