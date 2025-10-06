"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
exports.SearchTracks = SearchTracks;
const networkService_1 = __importDefault(require("../services/networkService"));
const ApiResponse_1 = require("../shared/response/ApiResponse");
const foo = () => "bar"; // test function
exports.foo = foo;
async function SearchTracks({ query, strict = true, // default exact match search
offset = 0, // default cursor position 0
limit = 10, // default page size
 }) {
    try {
        const serviceResponse = await networkService_1.default.SearchTracks({
            query,
            strict,
            offset,
            limit,
        });
        return ApiResponse_1.ApiResponse.ok(serviceResponse.data, serviceResponse.message);
    }
    catch (error) {
        console.error(error);
        return ApiResponse_1.ApiResponse.fail("Failed to search tracks", error);
    }
}
exports.default = {
    foo,
    SearchTracks,
};
//# sourceMappingURL=networkController.js.map