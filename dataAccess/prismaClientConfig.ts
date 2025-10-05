import { PrismaClient } from "@prisma/client";
import path from "path";

const rootPath = process.env.ROOT_PATH;
if (!rootPath) {
  throw new Error("ROOT_PATH environment variable is not defined.");
}

const dbName = process.env.DB_NAME;
if (!dbName) {
  throw new Error("DB_NAME environment variable is not defined.");
}

const dbPath = path.join(rootPath, `${dbName}.db`);

const prisma: PrismaClient = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
});

export { prisma };
