"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const path_1 = __importDefault(require("path"));
class Main {
    static onWindowAllClosed() {
        if (process.platform !== "darwin") {
            Main.application.quit();
        }
    }
    static onClose() {
        // Dereference the window object.
        Main.mainWindow = null;
    }
    static onReady() {
        Main.mainWindow = new Main.BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path_1.default.join(__dirname, "preload.js"),
                contextIsolation: true,
                nodeIntegration: false,
            },
        });
        if (Main.application.isPackaged) {
            Main.mainWindow.loadURL("file://" + __dirname + "/index.html");
        }
        else {
            Main.mainWindow.loadURL("http://localhost:5173/");
        }
        Main.mainWindow.on("closed", Main.onClose);
    }
    static main(app, browserWindow) {
        // we pass the Electron.App object and the
        // Electron.BrowserWindow into this function
        // so this class has no dependencies. This
        // makes the code easier to write tests for
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowAllClosed);
        Main.application.on("ready", Main.onReady);
    }
}
exports.Main = Main;
//# sourceMappingURL=main.js.map