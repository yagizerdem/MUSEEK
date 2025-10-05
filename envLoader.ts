import path from "path";

process.env.ROOT_FOLDER_NAME = "Museek";
process.env.DB_NAME = "museekdb";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const rootFolderName = process.env.ROOT_FOLDER_NAME;
const appData = process.env.APPDATA;

if (!appData) {
  throw new Error("APPDATA environment variable is not defined.");
}
if (!rootFolderName) {
  throw new Error("ROOT_FOLDER_NAME environment variable is not defined.");
}

const rootFolderPath = path.join(appData, rootFolderName);
process.env.ROOT_PATH = rootFolderPath;

const rootPath = process.env.ROOT_PATH;
if (!rootPath) {
  throw new Error("ROOT_PATH environment variable is not defined.");
}

const dbName = process.env.DB_NAME;
if (!dbName) {
  throw new Error("DB_NAME environment variable is not defined.");
}

const dbPath = path.join(rootPath, `${dbName}.db`);
process.env.DB_PATH = dbPath;
process.env.DATABASE_URL = `file:${dbPath}`;
