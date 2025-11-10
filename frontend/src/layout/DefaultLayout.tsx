interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col min-h-0 ">{children}</div>
  );
}
