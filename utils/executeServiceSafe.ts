import { ServiceError } from "../errors/ServiceError.js";
import { serviceResponseFail } from "../model/serviceResponse/serviceResponse.js";

export async function executeServiceSafe<TArgs extends any[], TResult>({
  fun,
  args,
}: {
  fun: (...args: TArgs) => Promise<TResult> | TResult;
  args: TArgs;
}) {
  return await Promise.resolve(fun(...args)).catch((err) => {
    if (err instanceof ServiceError) {
      if (err.isOperational) {
        return serviceResponseFail({
          message: err.message || "An operational error occurred",
        });
      }

      return serviceResponseFail({
        message: "Unexpected error occurred",
      });
    } else {
      return serviceResponseFail({
        message: "Unexpected error occurred",
      });
    }
  });
}
