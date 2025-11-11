import { Main } from "../main";

export function minimizePanel() {
  Main.mainWindow.minimize();
}

export function maximizePanel() {
  Main.mainWindow.maximize();
}

export function closePanel() {
  Main.mainWindow.close();
}
