import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ErrorMessage from "./pages/ErrorMessage";
import { ShopRoute } from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { shopItem } from "./pages/ShopItem";
import Profile from "./pages/Profile";
import { newItem } from "./pages/PostItem";
import { editItem } from "./pages/EditItem";

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
            children: [
              { index: true, ...ShopRoute },
              {
                path: ":id",
                children: [
                  { index: true, ...shopItem },
                  { path: "edit", ...editItem },
                ],
              },
            ],
          },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "cart", element: <Cart /> },
          { path: "profile", element: <Profile /> },
          { path: "add", ...newItem },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
