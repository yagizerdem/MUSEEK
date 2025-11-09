import { getTraceId } from "./getTraceId.js";

export function logMessageWrapper(message: string): string {
  const timestamp = new Date().toISOString();
  const traceId = getTraceId();

  const stack = new Error().stack;
  let caller = "unknown";

  if (stack) {
    const stackLines = stack.split("\n");
    const callerLine = stackLines[2] || "";
    const match = callerLine.match(/at (.+) \(/);
    if (match && match[1]) {
      caller = match[1];
    }
  }

  return `[${timestamp}] [${caller}] ${message} | TraceId: ${traceId}`;
}
