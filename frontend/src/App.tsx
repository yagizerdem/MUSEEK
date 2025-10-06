import { Fragment, useEffect } from "react";
import { DefaultLayout } from "./Layout/DefaultLayout";

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
        <span className="w-full h-full flex-1 flex flex-col bg-[var(--clr-surface-a0)]">
          ajflajf
        </span>
      </DefaultLayout>
    </Fragment>
  );
}

export default App;
