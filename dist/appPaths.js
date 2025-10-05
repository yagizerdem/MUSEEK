"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initilizeFiles = initilizeFiles;
const fs_1 = __importDefault(require("fs"));
function createRootPath() {
    if (!fs_1.default.existsSync(process.env.ROOT_PATH)) {
        fs_1.default.mkdirSync(process.env.ROOT_PATH);
    }
}
function createDb() {
    if (!fs_1.default.existsSync(process.env.DB_PATH)) {
        fs_1.default.writeFileSync(process.env.DB_PATH, "");
    }
}
function initilizeFiles() {
    createRootPath();
    createDb();
}
//# sourceMappingURL=appPaths.js.map