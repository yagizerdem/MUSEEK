"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTraceId = getTraceId;
exports.resetTraceId = resetTraceId;
var uuid_1 = require("uuid");
var traceId = null;
function getTraceId() {
    if (!traceId) {
        traceId = (0, uuid_1.v4)();
    }
    return traceId;
}
function resetTraceId() {
    traceId = null;
}
//# sourceMappingURL=getTraceId.js.map