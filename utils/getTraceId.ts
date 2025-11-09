import { v4 as uuidv4 } from "uuid";

let traceId = null;

export function getTraceId() {
  if (!traceId) {
    traceId = uuidv4();
  }
  return traceId;
}

export function resetTraceId() {
  traceId = null;
}
