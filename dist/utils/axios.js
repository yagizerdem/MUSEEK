"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deezerApi = void 0;
var axios_1 = __importDefault(require("axios"));
var deezerApi = axios_1.default.create({
    baseURL: "https://api.deezer.com/",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
    validateStatus: function (status) { return status >= 200 && status < 300; },
});
exports.deezerApi = deezerApi;
//# sourceMappingURL=axios.js.map