import { join } from "path";
import sqlite3 from "sqlite3";
var db = null;
export function initializeDatabase() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var dbFileName = "museek.db";
    var absolutePath = join(appDataAbsolutePath, museekFolderName, dbFileName);
    db = new sqlite3.Database(absolutePath, function (err) {
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
export function getDatabase() {
    if (!db) {
        initializeDatabase();
    }
    return db;
}
//# sourceMappingURL=database.js.map