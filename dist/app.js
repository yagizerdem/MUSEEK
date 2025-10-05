"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./envLoader"); // load .env data is requred at top level to keep app code not break
const electron_1 = require("electron");
const main_1 = require("./main");
const appPaths_1 = require("./appPaths");
const child_process_1 = require("child_process");
main_1.Main.main(electron_1.app, electron_1.BrowserWindow);
electron_1.app.whenReady().then(async () => {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL environment variable is not defined.");
        }
        console.log("Applying Prisma migrations...");
        (0, child_process_1.execSync)("npx prisma migrate deploy", {
            stdio: "inherit",
            env: Object.assign(Object.assign({}, process.env), { DATABASE_URL: process.env.DATABASE_URL }),
        });
    }
    catch (err) {
        console.error("Migration failed:", err);
    }
    await (0, appPaths_1.initilizeFiles)();
});
//# sourceMappingURL=app.js.map