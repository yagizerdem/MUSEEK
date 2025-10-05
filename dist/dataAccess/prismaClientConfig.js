"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const rootPath = process.env.ROOT_PATH;
if (!rootPath) {
    throw new Error("ROOT_PATH environment variable is not defined.");
}
const dbName = process.env.DB_NAME;
if (!dbName) {
    throw new Error("DB_NAME environment variable is not defined.");
}
const dbPath = path_1.default.join(rootPath, `${dbName}.db`);
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: `file:${dbPath}`,
        },
    },
});
exports.prisma = prisma;
//# sourceMappingURL=prismaClientConfig.js.map