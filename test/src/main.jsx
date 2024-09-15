import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App, { MessageContextProvider } from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "./Landing.jsx";
import Profile from "./Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/yap",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);


Modal.setAppElement("#root");
createRoot(document.getElementById("root")).render(
    <MessageContextProvider>
      <RouterProvider router={router}/>
    </MessageContextProvider>
);
