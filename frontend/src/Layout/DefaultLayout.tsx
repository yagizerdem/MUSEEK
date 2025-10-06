import { HorizontalSplitPane } from "../ui/HorizontalSplitPane";
import { ModernNavigationButton } from "../ui/ModernNavigationButton";
import { router } from "../router";
import { useState } from "react";

const activePageEnum = Object.freeze({
  HOME: "HOME",
  SEARCH: "SEARCH",
});

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<string>(activePageEnum.HOME);

  function goToHome() {
    router.navigate("/home");
    setActivePage(activePageEnum.HOME);
  }

  function goToSearch() {
    router.navigate("/search");
    setActivePage(activePageEnum.SEARCH);
  }

  return (
    <div className="w-screen h-screen">
      <HorizontalSplitPane
        leftChildren={
          <div
            className={`
          bg-[var(--clr-surface-a10)] 
          h-full 
          flex 
          flex-col 
          p-3 
          gap-4`}
          >
            <ModernNavigationButton
              label="Home"
              onMouseUp={goToHome}
              className={`${
                activePage === activePageEnum.HOME
                  ? "bg-[var(--clr-info-a0)]"
                  : ""
              }`}
            />
            <ModernNavigationButton
              label="Search"
              onMouseUp={goToSearch}
              className={`${
                activePage === activePageEnum.SEARCH
                  ? "bg-[var(--clr-info-a0)]"
                  : ""
              }`}
            />
          </div>
        }
        splitterClassName="bg-[var(--clr-surface-a30)] w-1"
        rightChildren={children}
        leftPanelInitialSize={200}
        leftPanelMinSize={100}
        leftPanelMaxSize={400}
      ></HorizontalSplitPane>
    </div>
  );
}

export { DefaultLayout };
