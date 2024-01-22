import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./Style.css";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import Error from "./pages/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
