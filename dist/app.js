import { app } from "electron";
import { Main } from "./main.js";
import { initializeAppPaths } from "./appPaths.js";
Main.main(app);
app.on("ready", function () {
    initializeAppPaths();
});
//# sourceMappingURL=app.js.map