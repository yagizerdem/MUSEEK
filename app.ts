import { app } from "electron";
import { Main } from "./main.js";
import { initializeAppPaths } from "./appPaths.js";
import { initializeDatabase } from "./database.js";
import { createGenreTable } from "./repository/genreRepository.js";
import { createAlbumTable } from "./repository/albumRepository.js";
import { createTrackTable } from "./repository/trackRepository.js";
import { createArtistTable } from "./repository/artistRepository.js";

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
