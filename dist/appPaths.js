"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAppPaths = initializeAppPaths;
var fs_1 = require("fs");
var path_1 = require("path");
function creatRootFolder() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var absolutePath = (0, path_1.join)(appDataAbsolutePath, museekFolderName);
    if (!(0, fs_1.existsSync)(absolutePath)) {
        (0, fs_1.mkdirSync)(absolutePath);
    }
}
function createDbFile() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var dbFileName = "museek.db";
    var absolutePath = (0, path_1.join)(appDataAbsolutePath, museekFolderName, dbFileName);
    if (!(0, fs_1.existsSync)(absolutePath)) {
        (0, fs_1.writeFileSync)(absolutePath, ""); // create empty file for sqlite
    }
}
function initializeAppPaths() {
    creatRootFolder();
    createDbFile();
}
//# sourceMappingURL=appPaths.js.map