"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
require("./envLoader");
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
const DATABASE_URL = process.env.DATABASE_URL;
const migrationDir = path_1.default.join(__dirname, "prisma", "migrations");
// initial migration
if (!fs_1.default.existsSync(migrationDir)) {
    fs_1.default.mkdirSync(migrationDir, { recursive: true });
}
if (!DATABASE_URL)
    throw new Error("DATABASE_URL environment variable is not defined.");
const size = fs_1.default.readdirSync(migrationDir).length;
try {
    (0, child_process_1.execSync)(`npx prisma migrate dev --name mig${size + 1}`, {
        cwd: path_1.default.join(__dirname, "prisma"),
        env: Object.assign(Object.assign({}, process.env), { DATABASE_URL: DATABASE_URL }),
        stdio: "inherit",
    });
}
catch (err) {
    console.error("Migration failed:", err);
}
//# sourceMappingURL=createMigration.js.map