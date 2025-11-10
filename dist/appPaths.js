import { mkdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
function creatRootFolder() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var absolutePath = join(appDataAbsolutePath, museekFolderName);
    if (!existsSync(absolutePath)) {
        mkdirSync(absolutePath);
    }
}
function createDbFile() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var dbFileName = "museek.db";
    var absolutePath = join(appDataAbsolutePath, museekFolderName, dbFileName);
    if (!existsSync(absolutePath)) {
        writeFileSync(absolutePath, ""); // create empty file for sqlite
    }
}
export function initializeAppPaths() {
    creatRootFolder();
    createDbFile();
}
//# sourceMappingURL=appPaths.js.map