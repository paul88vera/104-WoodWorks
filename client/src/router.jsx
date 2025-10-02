import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Error from "./pages/Error";
import ErrorMessage from "./pages/ErrorMessage";
import Contact from "./pages/Contact";
import { ShopRoute } from "./pages/Shop";
import { homeData } from "./pages/Home";
// import { cartData } from "./pages/Cart";
import { shopItem } from "./pages/ShopItem";
import { newItem } from "./pages/PostItem";
import { editItem } from "./pages/EditItem";
import Services from "./pages/Services";

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
            path: "/shop",
            children: [
              { index: true, ...ShopRoute },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    ...shopItem,
                  },
                  {
                    path: "edit",
                    ...editItem,
                  },
                ],
              },
            ],
          },
          { path: "services", element: <Services /> },
          { path: "contact", element: <Contact /> },
          // {
          //   path: `cart/:id`,
          //   ...cartData,
          // },
          { path: "add", ...newItem },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
