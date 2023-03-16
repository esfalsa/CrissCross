import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PointNationSection from "./sections/PointNationSection";
import UserNationSection from "./sections/UserNationSection";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <PointNationSection />,
  },
  {
    path: "/cross/:pointNation",
    element: <UserNationSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement />
  </React.StrictMode>
);
