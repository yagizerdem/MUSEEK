"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== "darwin") {
            Main.application.quit();
        }
    };
    Main.onClose = function () {
        Main.mainWindow = null;
    };
    Main.onReady = function () {
        Main.mainWindow = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: path_1.default.join(__dirname, "preload.js"),
            },
        });
        if (electron_1.app.isPackaged) {
            Main.mainWindow.loadURL("file://" + __dirname + "/index.html");
        }
        else {
            Main.mainWindow.loadURL("http://localhost:5173/");
        }
        Main.mainWindow.on("closed", Main.onClose);
    };
    Main.main = function (app) {
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowAllClosed);
        Main.application.on("ready", Main.onReady);
    };
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=main.js.map