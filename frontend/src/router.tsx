import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { SearchTracksPage } from "./Pages/SearchTracksPage";
import { SearchTracksProvider } from "./context/SearchTracksContext";

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
    path: "/search-tracks",
    element: (
      <SearchTracksProvider>
        <SearchTracksPage />
      </SearchTracksProvider>
    ),
  },
]);

export { router };
