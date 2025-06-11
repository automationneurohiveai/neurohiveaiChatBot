import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UIContextProvider } from "./Context/UIContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UIContextProvider>
);
