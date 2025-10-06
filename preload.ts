import { ipcRenderer } from "electron";

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("network", {
  foo: () => ipcRenderer.invoke("networkController:foo"), // test function
  SearchTracks: async (params) =>
    ipcRenderer.invoke("networkController:SearchTracks", params), // search tracks
});
