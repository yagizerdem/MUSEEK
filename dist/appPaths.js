import { mkdirSync, existsSync } from "fs";
import { join } from "path";
function creatRootFolder() {
    var appDataAbsolutePath = process.env.APPDATA;
    var museekFolderName = "MUSEEK";
    var absolutePath = join(appDataAbsolutePath, museekFolderName);
    if (!existsSync(absolutePath)) {
        mkdirSync(absolutePath);
    }
}
export function initializeAppPaths() {
    creatRootFolder();
}
//# sourceMappingURL=appPaths.js.map