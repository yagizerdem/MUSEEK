import dotenv from "dotenv";
import path from "path";
import fs from "fs";

function LoadEnv() {
  const envPath = path.join(__dirname, ".env");
  dotenv.config({ path: envPath });
}

function createRootPath() {
  const rootFolderName = process.env.ROOT_FOLDER_NAME;
  const appData = process.env.APPDATA;

  if (!appData) {
    throw new Error("APPDATA environment variable is not defined.");
  }
  if (!rootFolderName) {
    throw new Error("ROOT_FOLDER_NAME environment variable is not defined.");
  }
  const absolutePath = path.join(appData, rootFolderName);

  if (!fs.existsSync(absolutePath)) {
    fs.mkdirSync(absolutePath);
  }

  process.env.ROOT_PATH = absolutePath;
}

function createDb() {
  const rootPath = process.env.ROOT_PATH;
  if (!rootPath) {
    throw new Error("ROOT_PATH environment variable is not defined.");
  }

  const dbName = process.env.DB_NAME;
  if (!dbName) {
    throw new Error("DB_NAME environment variable is not defined.");
  }

  const dbPath = path.join(rootPath, `${dbName}.db`);

  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, "");
  }
  process.env.DB_PATH = dbPath;
  process.env.DATABASE_URL = `file:${dbPath}`;
}

function initilizeFiles() {
  LoadEnv();
  createRootPath();
  createDb();
}

export { initilizeFiles };
