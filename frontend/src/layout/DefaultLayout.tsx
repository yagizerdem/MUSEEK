import { Title } from "../components/defaultLayout/Title";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col min-h-0 ">
      <Title />
      <div className="flex-1 flex-col min-h-0 bg-red-500 overflow-y-auto">
        <div className="h-[1000px] bg-blue-50"></div>
        {children}
      </div>
    </div>
  );
}
