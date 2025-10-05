"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = sleep;
async function sleep(msec) {
    return new Promise((resolve) => setTimeout(resolve, msec));
}
//# sourceMappingURL=auxiliary.js.map