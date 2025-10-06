class ApiResponse<T> {
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

  /** factory methods */
  static ok<T>(data: T, message = "Success"): ApiResponse<T> {
    return new ApiResponse<T>({ success: true, data, message });
  }

  static fail<T>(message = "An error occurred", error?: any): ApiResponse<T> {
    return new ApiResponse<T>({ success: false, message, error });
  }
}

export { ApiResponse };
