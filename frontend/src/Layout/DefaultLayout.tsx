import { HorizontalSplitPane } from "../ui/HorizontalSplitPane";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <HorizontalSplitPane
        leftPanelInitialSize={200}
        leftPanelMinSize={100}
        leftPanelMaxSize={400}
      >
        {children}
      </HorizontalSplitPane>
    </div>
  );
}

export { DefaultLayout };
