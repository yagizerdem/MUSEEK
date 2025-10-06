import "./envLoader"; // load .env data is requred at top level to keep app code not break
import { app, BrowserWindow, ipcMain } from "electron";
import { Main } from "./main";
import { initilizeFiles } from "./appPaths";
import { execSync } from "child_process";
import networkController from "./controllers/networkController";
import type { SearchTracksDTO } from "./shared/DTO/SearchTracksDTO";

Main.main(app, BrowserWindow);

app.whenReady().then(async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not defined.");
    }

    initilizeFiles();

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

// network controller ipc handlers
app.whenReady().then(() => {
  ipcMain.handle("networkController:foo", networkController.foo);
  ipcMain.handle(
    "networkController:SearchTracks",
    async (_event, params: SearchTracksDTO) => {
      return await networkController.SearchTracks(params);
    }
  );
});
