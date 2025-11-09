import { v4 as uuidv4 } from "uuid";
var traceId = null;
export function getTraceId() {
    if (!traceId) {
        traceId = uuidv4();
    }
    return traceId;
}
export function resetTraceId() {
    traceId = null;
}
//# sourceMappingURL=getTraceId.js.map