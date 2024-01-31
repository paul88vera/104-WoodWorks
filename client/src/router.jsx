import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { homeData } from "./pages/Home";
import Error from "./pages/Error";
import ErrorMessage from "./pages/ErrorMessage";
import { ShopRoute } from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { cartData } from "./pages/Cart";
import { shopItem } from "./pages/ShopItem";
import Profile from "./pages/Profile";
import { newItem } from "./pages/PostItem";
import { editItem } from "./pages/EditItem";
// import AuthenticateContext from "./api/AuthContext";
import LoginComponent from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="/home" /> },
          { path: "home", ...homeData },
          {
            path: "shop",
            children: [
              { index: true, ...ShopRoute },
              {
                path: ":id",
                children: [
                  { index: true, ...shopItem },
                  {
                    path: "edit",
                    ...editItem,
                  },
                ],
              },
            ],
          },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "cart", ...cartData },
          {
            path: "profile",
            element: <Profile />,
          },
          { path: "add", ...newItem },
          { path: "login", element: <LoginComponent /> },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
