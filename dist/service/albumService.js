"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAlbum = insertAlbum;
exports.getAlbumById = getAlbumById;
exports.getAlbumByTitle = getAlbumByTitle;
exports.getAllAlbums = getAllAlbums;
exports.getAlbumsWithPagination = getAlbumsWithPagination;
var serviceResponse_js_1 = require("../model/serviceResponse/serviceResponse.js");
var albumRepository_js_1 = require("../repository/albumRepository.js");
function insertAlbum(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var album = _b.album;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, albumRepository_js_1.insertAlbum)({ album: album })];
                case 1:
                    _c.sent();
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: album,
                            message: "Album inserted successfully",
                        })];
            }
        });
    });
}
function getAlbumById(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var album;
        var id = _b.id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, albumRepository_js_1.getAlbumById)({ id: id })];
                case 1:
                    album = _c.sent();
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: album,
                            message: "Album retrieved successfully",
                        })];
            }
        });
    });
}
function getAlbumByTitle(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var album;
        var title = _b.title;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, albumRepository_js_1.getAlbumByTitle)({ title: title })];
                case 1:
                    album = _c.sent();
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: album,
                            message: "Album retrieved successfully",
                        })];
            }
        });
    });
}
function getAllAlbums() {
    return __awaiter(this, void 0, void 0, function () {
        var albums;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, albumRepository_js_1.getAllAlbum)()];
                case 1:
                    albums = _a.sent();
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: albums,
                            message: "Albums retrieved successfully",
                        })];
            }
        });
    });
}
function getAlbumsWithPagination(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var albums;
        var index = _b.index, limit = _b.limit, _c = _b.orderBy, orderBy = _c === void 0 ? "release_date" : _c, _d = _b.orderDir, orderDir = _d === void 0 ? "DESC" : _d, filterField = _b.filterField, // "title", "label"
        filterValue = _b.filterValue, //  "love"
        _e = _b.matchMode, //  "love"
        matchMode = _e === void 0 ? "substring" : _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, (0, albumRepository_js_1.getAlbumsWithPagination)({
                        index: index,
                        limit: limit,
                        orderBy: orderBy,
                        orderDir: orderDir,
                        filterField: filterField,
                        filterValue: filterValue,
                        matchMode: matchMode,
                    })];
                case 1:
                    albums = _f.sent();
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: albums,
                            message: "Albums retrieved successfully",
                        })];
            }
        });
    });
}
//# sourceMappingURL=albumService.js.map