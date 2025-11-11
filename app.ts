import { app, ipcMain } from "electron";
import { Main } from "./main.js";
import { initializeAppPaths } from "./appPaths.js";
import { initializeDatabase } from "./database.js";
import { createGenreTable } from "./repository/genreRepository.js";
import { createAlbumTable } from "./repository/albumRepository.js";
import { createTrackTable } from "./repository/trackRepository.js";
import { createArtistTable } from "./repository/artistRepository.js";
import {
  closePanel,
  maximizePanel,
  minimizePanel,
} from "./controller/windowController.js";

Main.main(app);

app.on("ready", () => {
  initializeApp();
});

function initializeApp() {
  initializeAppPaths();
  initializeDatabase();
  initializeDatabaseTables();
}

function initializeDatabaseTables() {
  createGenreTable();
  createAlbumTable();
  createTrackTable();
  createArtistTable();
}

// hanlde ipc between main and preload
app.whenReady().then(() => {
  ipcMain.handle("windowController:minimizePanel", minimizePanel);
  ipcMain.handle("windowController:maximizePanel", maximizePanel);
  ipcMain.handle("windowController:closePanel", closePanel);
});
