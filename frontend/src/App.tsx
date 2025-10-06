import { Fragment, useEffect } from "react";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light-default");
    root.classList.remove("dark-default");
    root.classList.remove("dark-sea-tonal");

    root.classList.add("dark-default");
  }, []);

  return (
    <Fragment>
      <DefaultLayout>
        <RouterProvider router={router} />
      </DefaultLayout>
    </Fragment>
  );
}

export default App;
