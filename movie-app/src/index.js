import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
