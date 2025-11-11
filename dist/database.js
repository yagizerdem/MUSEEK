"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = initializeDatabase;
exports.getDatabase = getDatabase;
var path_1 = require("path");
var sqlite3_1 = __importDefault(require("sqlite3"));
var db = null;
function initializeDatabase() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var dbFileName = "museek.db";
    var absolutePath = (0, path_1.join)(appDataAbsolutePath, museekFolderName, dbFileName);
    db = new sqlite3_1.default.Database(absolutePath, function (err) {
        if (err) {
            console.error("Error opening database: ", err.message);
            process.exit(1);
        }
        db.run("PRAGMA foreign_keys = OFF;", function (err) {
            if (err)
                console.error("Could not disable FK checks:", err.message);
            else
                console.log("Foreign key checks permanently disabled.");
        });
    });
}
function getDatabase() {
    if (!db) {
        initializeDatabase();
    }
    return db;
}
//# sourceMappingURL=database.js.map