"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestWithRetry = requestWithRetry;
const auxiliary_1 = require("./auxiliary");
async function requestWithRetry(requestFn, maxRetries = 3, delayMs) {
    let lastError;
    let knockOut = delayMs || 300;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxRetries}`);
            const response = await requestFn();
            console.log(`Success on attempt ${attempt}`);
            return response;
        }
        catch (err) {
            lastError = err;
            console.warn(`Attempt ${attempt} failed: ${err.message || err.toString()}`);
            if (attempt === maxRetries) {
                console.error("All retries failed.");
                throw lastError;
            }
            const noise = Math.random() * 200;
            const delay = knockOut * Math.pow(2, attempt - 1) + noise;
            await (0, auxiliary_1.sleep)(delay);
        }
    }
    throw new Error("Unexpected error in requestWithRetry");
}
//# sourceMappingURL=httpUtils.js.map