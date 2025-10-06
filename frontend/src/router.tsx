import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <div>search page</div>,
  },
]);

export { router };
