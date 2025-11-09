import { getTraceId } from "../../utils/getTraceId.js";
export function serviceResponseSuccess(_a) {
    var data = _a.data, _b = _a.message, message = _b === void 0 ? "Success" : _b;
    return {
        data: data,
        success: true,
        message: message,
        traceId: getTraceId(),
    };
}
export function serviceResponseFail(_a) {
    var message = _a.message, _b = _a.data, data = _b === void 0 ? null : _b;
    return {
        data: data,
        success: false,
        message: message,
        traceId: getTraceId(),
    };
}
//# sourceMappingURL=serviceResponse.js.map