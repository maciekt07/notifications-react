import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import AccessDenied from "./AccessDenied";

const root = ReactDOM.createRoot(document.getElementById("root"));

const password = "123";

if (localStorage.getItem("pass") !== password) {
  const pass = prompt("podaj hasło");
  localStorage.setItem("pass", pass);
}

if (localStorage.getItem("pass") === password) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <AccessDenied />
    </React.StrictMode>
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
