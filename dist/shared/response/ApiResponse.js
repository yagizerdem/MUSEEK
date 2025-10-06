"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor({ success, message, data, error, }) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
        this.timestamp = new Date().toISOString();
    }
    /** factory methods */
    static ok(data, message = "Success") {
        return new ApiResponse({ success: true, data, message });
    }
    static fail(message = "An error occurred", error) {
        return new ApiResponse({ success: false, message, error });
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map