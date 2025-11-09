// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
