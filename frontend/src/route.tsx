import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <div>search page</div>,
  },
]);

export { router };
