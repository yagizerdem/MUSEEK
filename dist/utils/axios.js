"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deezerApi = void 0;
const axios_1 = __importDefault(require("axios"));
const deezerApi = axios_1.default.create({
    baseURL: "https://api.deezer.com/",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
    validateStatus: (status) => status >= 200 && status < 300,
});
exports.deezerApi = deezerApi;
//# sourceMappingURL=axios.js.map