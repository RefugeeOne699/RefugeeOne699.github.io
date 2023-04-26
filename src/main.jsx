import "./index.css";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import AppRoot from "./App";

const About = lazy(async () => import("@/pages/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    // todo: error page
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Navigate to="/about" />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
      <TailWindToaster />
    </Suspense>
  </React.StrictMode>
);
