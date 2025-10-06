export class ServiceResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: any;
  timestamp: string;

  private constructor({
    success,
    message,
    data,
    error,
  }: {
    success: boolean;
    message?: string;
    data?: T;
    error?: any;
  }) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.error = error;
    this.timestamp = new Date().toISOString();
  }

  static Success<T>(data: T, message = "Success"): ServiceResponse<T> {
    return new ServiceResponse<T>({
      success: true,
      data,
      message,
    });
  }

  static Fail<T>(
    message = "An error occurred",
    error?: any
  ): ServiceResponse<T> {
    return new ServiceResponse<T>({
      success: false,
      message,
      error,
    });
  }
}
