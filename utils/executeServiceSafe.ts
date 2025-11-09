import { ServiceError } from "../errors/ServiceError.js";
import {
  serviceResponseFail,
  ServiceResponse,
} from "../model/serviceResponse/serviceResponse.js";

export async function executeServiceSafe<
  TArgs extends any[],
  TResult extends ServiceResponse<any>
>({
  fun,
  args,
}: {
  fun: (...args: TArgs) => Promise<TResult> | TResult;
  args: TArgs;
}): Promise<TResult> {
  try {
    const result = await Promise.resolve(fun(...args));
    return result;
  } catch (err) {
    if (err instanceof ServiceError) {
      if (err.isOperational) {
        return serviceResponseFail({
          message: err.message || "An operational error occurred",
        }) as TResult;
      }
      return serviceResponseFail({
        message: "Unexpected error occurred",
      }) as TResult;
    }

    return serviceResponseFail({
      message: "Unexpected error occurred",
    }) as TResult;
  }
}
