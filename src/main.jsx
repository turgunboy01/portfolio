import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToggleMenuContextProvider } from "./context/useMenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleMenuContextProvider>
      <App />
    </ToggleMenuContextProvider>
  </React.StrictMode>
);
