import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { scrollSpy, scroller } from "react-scroll";
const containerId = "root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(containerId)
);
scrollSpy.update();
scroller.scrollTo(containerId, {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: -50,
});
