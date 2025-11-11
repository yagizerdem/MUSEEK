"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimizePanel = minimizePanel;
exports.maximizePanel = maximizePanel;
exports.closePanel = closePanel;
var main_1 = require("../main");
function minimizePanel() {
    main_1.Main.mainWindow.minimize();
}
function maximizePanel() {
    main_1.Main.mainWindow.maximize();
}
function closePanel() {
    main_1.Main.mainWindow.close();
}
//# sourceMappingURL=windowController.js.map