export {};

declare global {
  interface Window {
    windowController: windowController;
  }
}

interface windowController {
  minimizePanel: () => Promise<void>;
  maximizePanel: () => Promise<void>;
  closePanel: () => Promise<void>;
}
