import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import AccessDenied from "./AccessDenied";
const root = ReactDOM.createRoot(document.getElementById("root"));

if (localStorage.getItem("v") !== atob(process.env.REACT_APP_V)) {
  const v = prompt(atob("cG9kYWogaGFzbG8="));
  localStorage.setItem("v", v);
}

if (localStorage.getItem("v") === atob(process.env.REACT_APP_V)) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(<AccessDenied />);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
