import "./envLoader"; // load .env data is requred at top level to keep app code not break
import { app, BrowserWindow } from "electron";
import { Main } from "./main";
import { initilizeFiles } from "./appPaths";
import { prisma } from "./dataAccess/prismaClientConfig";
import { execSync } from "child_process";
import path from "path";

Main.main(app, BrowserWindow);

app.whenReady().then(async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not defined.");
    }

    console.log("Applying Prisma migrations...");
    execSync("npx prisma migrate deploy", {
      stdio: "inherit",
      env: {
        ...process.env,
        DATABASE_URL: process.env.DATABASE_URL,
      },
    });
  } catch (err) {
    console.error("Migration failed:", err);
  }

  await initilizeFiles();
});
