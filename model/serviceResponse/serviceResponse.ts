import { getTraceId } from "../../utils/getTraceId.js";

export interface ServiceResponse<T> {
  data: T;
  success: boolean;
  message: string;
  traceId: string;
}

export function serviceResponseSuccess<T>({
  data,
  message = "Success",
}: {
  data: T;
  message?: string;
}): ServiceResponse<T> {
  return {
    data,
    success: true,
    message,
    traceId: getTraceId(),
  };
}

export function serviceResponseFail<T>({
  message,
  data = null,
}: {
  message: string;
  data?: T | null;
}): ServiceResponse<T | null> {
  return {
    data,
    success: false,
    message,
    traceId: getTraceId(),
  };
}
