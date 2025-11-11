import { Navbar } from "@/components/navigationLayout/NavBar";
import { HorizontalSplitPane } from "@/components/ui/HorizontalSplitPane";
import { cn } from "@/lib/utils";

interface NavigationLayoutProps {
  children?: React.ReactNode;
}

export function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <div className="flex-1  overflow-y-auto">
      <HorizontalSplitPane
        leftChildren={<Navbar />}
        leftPanelInitialSize={200}
        leftPanelMinSize={200}
        leftPanelMaxSize={400}
        splitterClassName={cn("bg-(--color-card)")}
        rightChildren={children}
      />
    </div>
  );
}
