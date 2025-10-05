import { app, BrowserWindow } from "electron";
import { Main } from "./main";
import { initilizeFiles } from "./appPaths";

Main.main(app, BrowserWindow);

app.whenReady().then(() => {
  initilizeFiles(); // read root path and db path from .env file
});
