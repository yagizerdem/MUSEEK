"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var main_1 = require("./main");
var appPaths_1 = require("./appPaths");
main_1.Main.main(electron_1.app, electron_1.BrowserWindow);
electron_1.app.whenReady().then(function () {
    (0, appPaths_1.initilizeFiles)(); // read root path and db path from .env file
});
//# sourceMappingURL=app.js.map