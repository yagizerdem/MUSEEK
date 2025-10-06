"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
class ServiceResponse {
    constructor({ success, message, data, error, }) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
        this.timestamp = new Date().toISOString();
    }
    static Success(data, message = "Success") {
        return new ServiceResponse({
            success: true,
            data,
            message,
        });
    }
    static Fail(message = "An error occurred", error) {
        return new ServiceResponse({
            success: false,
            message,
            error,
        });
    }
}
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=ServiceResponse.js.map