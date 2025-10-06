import { HorizontalSplitPane } from "../ui/HorizontalSplitPane";
import { ModernNavigationButton } from "../ui/ModernNavigationButton";
import { router } from "../router";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  function goToHome() {
    router.navigate("/home");
  }

  function goToSearch() {
    router.navigate("/search");
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
            <ModernNavigationButton label="Home" onMouseUp={goToHome} />
            <ModernNavigationButton label="Search" onMouseUp={goToSearch} />
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
