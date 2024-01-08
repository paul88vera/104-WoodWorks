import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ErrorMessage from "./pages/ErrorMessage";
import { ShopRoute } from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="/home" /> },
          { path: "home", element: <Home /> },
          {
            path: "shop",
            ...ShopRoute,
            children: [{ path: "cart", element: <Cart /> }],
          },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
  { path: "*", element: <Error /> },
]);
