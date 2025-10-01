import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TicketsProvider } from "./context/TicketsContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TicketsProvider>
      <App />
      <ToastContainer position="bottom-right" />
    </TicketsProvider>
  </React.StrictMode>
);
