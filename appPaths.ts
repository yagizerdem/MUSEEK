import { mkdirSync, existsSync } from "fs";
import { join } from "path";

function creatRootFolder() {
  const appDataAbsolutePath = process.env.APPDATA;
  const museekFolderName = "MUSEEK";

  const absolutePath = join(appDataAbsolutePath, museekFolderName);

  if (!existsSync(absolutePath)) {
    mkdirSync(absolutePath);
  }
}

export function initializeAppPaths() {
  creatRootFolder();
}
