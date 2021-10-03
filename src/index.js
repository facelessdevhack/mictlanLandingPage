import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/AvenirLTStd-Book.otf";
import "./assets/fonts/AvenirLTStd-Roman.otf";
import "./assets/fonts/AvenirLTStd-Black.otf";
import "./assets/fonts/Avenir-Light.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
