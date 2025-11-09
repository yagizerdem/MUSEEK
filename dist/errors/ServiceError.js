var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { getTraceId } from "../utils/getTraceId.js";
var ServiceError = /** @class */ (function (_super) {
    __extends(ServiceError, _super);
    function ServiceError(message, options) {
        if (options === void 0) { options = {}; }
        var _newTarget = this.constructor;
        var _a;
        var _this = _super.call(this, message) || this;
        _this.isOperational = (_a = options.isOperational) !== null && _a !== void 0 ? _a : true;
        _this.traceId = getTraceId();
        _this.logMessage = options.logMessage || message;
        // maintain correct prototype chain
        Object.setPrototypeOf(_this, _newTarget.prototype);
        // capture stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return ServiceError;
}(Error));
export { ServiceError };
//# sourceMappingURL=ServiceError.js.map