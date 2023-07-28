import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Styles
import "./index.css";
// Global context
import AppProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
