import { BrowserWindow, app } from "electron";
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
        Main.mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
            },
        });
        if (app.isPackaged) {
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
export { Main };
//# sourceMappingURL=main.js.map