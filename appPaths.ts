import fs from "fs";

function createRootPath() {
  if (!fs.existsSync(process.env.ROOT_PATH)) {
    fs.mkdirSync(process.env.ROOT_PATH);
  }
}

function createDb() {
  if (!fs.existsSync(process.env.DB_PATH)) {
    fs.writeFileSync(process.env.DB_PATH, "");
  }
}

function initilizeFiles() {
  createRootPath();
  createDb();
}

export { initilizeFiles };
