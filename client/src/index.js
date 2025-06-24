import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UIContextProvider } from "./Context/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIContextProvider>
    <App />
  </UIContextProvider>
);
