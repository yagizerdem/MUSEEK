import { BrowserWindow, app } from "electron";

export class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static onClose() {
    Main.mainWindow = null;
  }

  private static onReady() {
    Main.mainWindow = new BrowserWindow({ width: 800, height: 600 });

    if (app.isPackaged) {
      Main.mainWindow.loadURL("file://" + __dirname + "/index.html");
    } else {
      Main.mainWindow.loadURL("http://localhost:5173/");
    }

    Main.mainWindow.on("closed", Main.onClose);
  }

  static main(app: Electron.App) {
    Main.application = app;
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
  }
}
