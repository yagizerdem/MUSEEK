import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { sleep } from "./auxiliary";

async function requestWithRetry<T>(
  requestFn: () => Promise<AxiosResponse<T>>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<AxiosResponse<T>> {
  let lastError: unknown;

  let knockOut = 300;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${maxRetries}`);
      const response = await requestFn();
      console.log(`Success on attempt ${attempt}`);

      return response;
    } catch (err: any) {
      lastError = err;
      console.warn(
        `Attempt ${attempt} failed: ${err.message || err.toString()}`
      );

      if (attempt === maxRetries) {
        console.error("All retries failed.");
        throw lastError;
      }

      const noise = Math.random() * 200;
      const delay = knockOut * Math.pow(2, attempt - 1) + noise;
      await sleep(delay);
    }
  }

  throw new Error("Unexpected error in requestWithRetry");
}

export { requestWithRetry };
