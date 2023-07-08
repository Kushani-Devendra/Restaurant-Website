import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errors/error-page";
import Index from "./routes";
import Layout from "./routes/layout";
import OrderOnline from "./pages/orderOnline/OrderOnline";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "order-online",
        element: <OrderOnline />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
