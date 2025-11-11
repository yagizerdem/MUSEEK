import { createContext, useContext, type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

const BaseProviderContext = createContext(undefined);

interface BaseProviderProps {
  children?: ReactNode;
}

export function BaseProvider({ children }: BaseProviderProps) {
  return (
    <ThemeProvider>
      <BaseProviderContext.Provider value={undefined}>
        {children}
      </BaseProviderContext.Provider>
    </ThemeProvider>
  );
}

export function useBase() {
  const context = useContext(BaseProviderContext);

  if (context === undefined) {
    throw new Error("useBase must be used within a ThemeProvider");
  }

  return context;
}
