import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "./Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/yap",
    element: <App />,
  },
]);


Modal.setAppElement("#root");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
