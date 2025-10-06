import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";

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
    element: <SearchPage />,
  },
]);

export { router };
