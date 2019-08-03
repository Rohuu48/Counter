import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createmyStore } from "./store";
import { Provider } from "react-redux";

export const store = createmyStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
