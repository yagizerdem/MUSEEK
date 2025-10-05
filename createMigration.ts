import path from "path";
import "./envLoader";
import fs from "fs";
import { execSync } from "child_process";

const DATABASE_URL = process.env.DATABASE_URL;

const migrationDir = path.join(__dirname, "prisma", "migrations");

// initial migration
if (!fs.existsSync(migrationDir)) {
  fs.mkdirSync(migrationDir, { recursive: true });
}

if (!DATABASE_URL)
  throw new Error("DATABASE_URL environment variable is not defined.");

const size = fs.readdirSync(migrationDir).length;

try {
  execSync(`npx prisma migrate dev --name mig${size + 1}`, {
    cwd: path.join(__dirname, "prisma"),
    env: {
      ...process.env,
      DATABASE_URL: DATABASE_URL,
    },
    stdio: "inherit",
  });
} catch (err) {
  console.error("Migration failed:", err);
}
