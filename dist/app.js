"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var main_js_1 = require("./main.js");
var appPaths_js_1 = require("./appPaths.js");
var database_js_1 = require("./database.js");
var genreRepository_js_1 = require("./repository/genreRepository.js");
var albumRepository_js_1 = require("./repository/albumRepository.js");
var trackRepository_js_1 = require("./repository/trackRepository.js");
var artistRepository_js_1 = require("./repository/artistRepository.js");
var windowController_js_1 = require("./controller/windowController.js");
main_js_1.Main.main(electron_1.app);
electron_1.app.on("ready", function () {
    initializeApp();
});
function initializeApp() {
    (0, appPaths_js_1.initializeAppPaths)();
    (0, database_js_1.initializeDatabase)();
    initializeDatabaseTables();
}
function initializeDatabaseTables() {
    (0, genreRepository_js_1.createGenreTable)();
    (0, albumRepository_js_1.createAlbumTable)();
    (0, trackRepository_js_1.createTrackTable)();
    (0, artistRepository_js_1.createArtistTable)();
}
// hanlde ipc between main and preload
electron_1.app.whenReady().then(function () {
    electron_1.ipcMain.handle("windowController:minimizePanel", windowController_js_1.minimizePanel);
    electron_1.ipcMain.handle("windowController:maximizePanel", windowController_js_1.maximizePanel);
    electron_1.ipcMain.handle("windowController:closePanel", windowController_js_1.closePanel);
});
//# sourceMappingURL=app.js.map