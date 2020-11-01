import React from "react";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom";
import style from "./cssMain/cssmain.module.css";
import App from "./App";
import store from "./store/reduxStore/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
