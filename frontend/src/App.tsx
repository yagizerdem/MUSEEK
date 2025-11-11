import { RouterProvider } from "react-router";
import { DefaultLayout } from "./layout/DefaultLayout";
import { router } from "./route";

function App() {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
}

export default App;
