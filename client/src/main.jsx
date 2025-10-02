import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./Style.css";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import Error from "./pages/Error";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import { ClerkProvider } from "@clerk/clerk-react";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ErrorBoundary fallback={<Error />}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ClerkProvider>
  </React.StrictMode>
);
