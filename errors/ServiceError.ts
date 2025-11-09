import { getTraceId } from "../utils/getTraceId";

interface ServiceErrorOptions {
  isOperational?: boolean;
  logMessage?: string;
}

export class ServiceError extends Error {
  public isOperational: boolean;
  public traceId: string;
  public logMessage: string;

  constructor(message: string, options: ServiceErrorOptions = {}) {
    super(message);

    this.isOperational = options.isOperational ?? true;
    this.traceId = getTraceId();
    this.logMessage = options.logMessage || message;

    // maintain correct prototype chain
    Object.setPrototypeOf(this, new.target.prototype);

    // capture stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
