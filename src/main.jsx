// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // 있으면 유지

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter /* basename 설정이 필요하면 basename="/서브경로" */>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
