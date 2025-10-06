"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("network", {
    foo: () => electron_1.ipcRenderer.invoke("networkController:foo"), // test function
    SearchTracks: async (params) => electron_1.ipcRenderer.invoke("networkController:SearchTracks", params), // search tracks
});
//# sourceMappingURL=preload.js.map