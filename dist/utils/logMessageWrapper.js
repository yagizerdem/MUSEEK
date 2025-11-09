import { getTraceId } from "./getTraceId.js";
export function logMessageWrapper(message) {
    var timestamp = new Date().toISOString();
    var traceId = getTraceId();
    var stack = new Error().stack;
    var caller = "unknown";
    if (stack) {
        var stackLines = stack.split("\n");
        var callerLine = stackLines[2] || "";
        var match = callerLine.match(/at (.+) \(/);
        if (match && match[1]) {
            caller = match[1];
        }
    }
    return "[".concat(timestamp, "] [").concat(caller, "] ").concat(message, " | TraceId: ").concat(traceId);
}
//# sourceMappingURL=logMessageWrapper.js.map