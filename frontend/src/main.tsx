import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/load.style.ts";
import App from "./App.tsx";
import { BaseProvider } from "./providers/base-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <BaseProvider>
    <App />
  </BaseProvider>
);
