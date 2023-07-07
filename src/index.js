import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./errors/error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";
import Layout from "./routes/layout";
import ViewMenu from "./pages/ViewMenu";
import OrderOnline from "./pages/OrderOnline";
import ShoppingCart from "./pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "order-online",
        element: <OrderOnline />,
        // loader: contactLoader,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Root />,
  //   errorElement: <ErrorPage />,
  //   loader: rootLoader,
  //   action: rootAction,
  //   children: [
  //     { index: true, element: <Index /> },

  //     {
  //       path: "contacts/:contactId",
  //       element: <Contact />,
  //       loader: contactLoader,
  //     },
  //     {
  //       path: "contacts/:contactId/edit",
  //       element: <EditContact />,
  //       loader: contactLoader,
  //       action: editAction,
  //     },
  //     {
  //       path: "contacts/:contactId/destroy",
  //       action: destroyAction,
  //       errorElement: <div>Oops! There was an error.</div>,
  //     },
  //   ],
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
