import { Title } from "../components/defaultLayout/Title";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col min-h-0 bg-(--color-background) ">
      <Title />
      <div className="flex flex-1 flex-col min-h-0  ">{children}</div>
    </div>
  );
}
