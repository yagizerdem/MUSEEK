import { mkdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";

function creatRootFolder() {
  const appDataAbsolutePath = process.env.APPDATA;
  const museekFolderName = "MUSEEK";

  const absolutePath = join(appDataAbsolutePath, museekFolderName);

  if (!existsSync(absolutePath)) {
    mkdirSync(absolutePath);
  }
}

function createDbFile() {
  const appDataAbsolutePath = process.env.APPDATA;
  const museekFolderName = "MUSEEK";
  const dbFileName = "museek.db";
  const absolutePath = join(appDataAbsolutePath, museekFolderName, dbFileName);
  if (!existsSync(absolutePath)) {
    writeFileSync(absolutePath, ""); // create empty file for sqlite
  }
}

export function initializeAppPaths() {
  creatRootFolder();
  createDbFile();
}
