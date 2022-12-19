import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrentUserContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <CurrentUserContextProvider>
      <App />
    </CurrentUserContextProvider>
  </DarkModeContextProvider>
);
