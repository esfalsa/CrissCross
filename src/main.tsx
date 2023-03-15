import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Link } from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement />
  </React.StrictMode>
);
