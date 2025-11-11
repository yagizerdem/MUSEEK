"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceResponseSuccess = serviceResponseSuccess;
exports.serviceResponseFail = serviceResponseFail;
var getTraceId_js_1 = require("../../utils/getTraceId.js");
function serviceResponseSuccess(_a) {
    var data = _a.data, _b = _a.message, message = _b === void 0 ? "Success" : _b;
    return {
        data: data,
        success: true,
        message: message,
        traceId: (0, getTraceId_js_1.getTraceId)(),
    };
}
function serviceResponseFail(_a) {
    var message = _a.message, _b = _a.data, data = _b === void 0 ? null : _b;
    return {
        data: data,
        success: false,
        message: message,
        traceId: (0, getTraceId_js_1.getTraceId)(),
    };
}
//# sourceMappingURL=serviceResponse.js.map