"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initilizeFiles = initilizeFiles;
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function LoadEnv() {
    var envPath = path_1.default.join(__dirname, ".env");
    dotenv_1.default.config({ path: envPath });
}
function createRootPath() {
    var rootFolderName = process.env.ROOT_FOLDER_NAME;
    var appData = process.env.APPDATA;
    if (!appData) {
        throw new Error("APPDATA environment variable is not defined.");
    }
    if (!rootFolderName) {
        throw new Error("ROOT_FOLDER_NAME environment variable is not defined.");
    }
    var absolutePath = path_1.default.join(appData, rootFolderName);
    if (!fs_1.default.existsSync(absolutePath)) {
        fs_1.default.mkdirSync(absolutePath);
    }
    process.env.ROOT_PATH = absolutePath;
}
function createDb() {
    var rootPath = process.env.ROOT_PATH;
    if (!rootPath) {
        throw new Error("ROOT_PATH environment variable is not defined.");
    }
    var dbName = process.env.DB_NAME;
    if (!dbName) {
        throw new Error("DB_NAME environment variable is not defined.");
    }
    var dbPath = path_1.default.join(rootPath, "".concat(dbName, ".db"));
    if (!fs_1.default.existsSync(dbPath)) {
        fs_1.default.writeFileSync(dbPath, "");
    }
    process.env.DB_PATH = dbPath;
}
function initilizeFiles() {
    LoadEnv();
    createRootPath();
    createDb();
}
initilizeFiles();
//# sourceMappingURL=appPaths.js.map