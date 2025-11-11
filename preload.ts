import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("windowController", {
  minimizePanel: () => ipcRenderer.invoke("windowController:minimizePanel"),
  maximizePanel: () => ipcRenderer.invoke("windowController:maximizePanel"),
  closePanel: () => ipcRenderer.invoke("windowController:closePanel"),
});
