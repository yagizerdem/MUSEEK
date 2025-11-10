import { join } from "path";
import sqlite3 from "sqlite3";

let db: sqlite3.Database | null = null;

export function initializeDatabase() {
  const appDataAbsolutePath = process.env.APPDATA;
  const museekFolderName = "MUSEEK";
  const dbFileName = "museek.db";
  const absolutePath = join(appDataAbsolutePath, museekFolderName, dbFileName);

  db = new sqlite3.Database(absolutePath, (err) => {
    if (err) {
      console.error("Error opening database: ", err.message);
      process.exit(1);
    }

    db.run("PRAGMA foreign_keys = OFF;", (err) => {
      if (err) console.error("Could not disable FK checks:", err.message);
      else console.log("Foreign key checks permanently disabled.");
    });
  });
}

export function getDatabase(): sqlite3.Database {
  if (!db) {
    initializeDatabase();
  }
  return db!;
}
