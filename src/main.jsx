import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShowInfoProvider } from "./store/show-info-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShowInfoProvider>
      <App />
    </ShowInfoProvider>
  </React.StrictMode>
);
