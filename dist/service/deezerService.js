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
exports.getAlbumById = getAlbumById;
exports.getAlbumFuzzySearchByAlbumTitle = getAlbumFuzzySearchByAlbumTitle;
exports.getArtistById = getArtistById;
exports.getArtistFuzzySearchByArtistName = getArtistFuzzySearchByArtistName;
exports.getTrackById = getTrackById;
exports.getTrackFuzzySearchByTrackTitle = getTrackFuzzySearchByTrackTitle;
var ServiceError_js_1 = require("../errors/ServiceError.js");
var serviceResponse_js_1 = require("../model/serviceResponse/serviceResponse.js");
var logMessageWrapper_js_1 = require("../utils/logMessageWrapper.js");
var baseUrl = "https://api.deezer.com";
function getAlbumById(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var fullUrl, response, data;
        var id = _b.id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    fullUrl = "".concat(baseUrl, "/album/").concat(id);
                    return [4 /*yield*/, fetch(fullUrl)];
                case 1:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new ServiceError_js_1.ServiceError("Failed to fetch album data from Deezer API", {
                            isOperational: false,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("HTTP ".concat(response.status, " ").concat(response.statusText, " while fetching album ").concat(id, " from ").concat(fullUrl)),
                        });
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (data.error) {
                        throw new ServiceError_js_1.ServiceError("Album not found", {
                            isOperational: true,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("Deezer API error for album ".concat(id, ": ").concat(JSON.stringify(data.error))),
                        });
                    }
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: data,
                            message: "Album fetched successfully",
                        })];
            }
        });
    });
}
function getAlbumFuzzySearchByAlbumTitle(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var params, fullUrl, response, data;
        var albumName = _b.albumName, index = _b.index, limit = _b.limit;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    params = new URLSearchParams();
                    params.append("q", "album:".concat(albumName));
                    params.append("index", (index === null || index === void 0 ? void 0 : index.toString()) || "0");
                    params.append("limit", (limit === null || limit === void 0 ? void 0 : limit.toString()) || "10");
                    fullUrl = "".concat(baseUrl, "/search?").concat(params.toString());
                    return [4 /*yield*/, fetch(fullUrl)];
                case 1:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new ServiceError_js_1.ServiceError("Failed to fetch album search results from Deezer API", {
                            isOperational: false,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("HTTP ".concat(response.status, " ").concat(response.statusText, " while searching albums with name \"").concat(albumName, "\" from ").concat(fullUrl)),
                        });
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (data.error) {
                        throw new ServiceError_js_1.ServiceError("Album not found", {
                            isOperational: true,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("Deezer API error for album ".concat(albumName, ": ").concat(JSON.stringify(data.error))),
                        });
                    }
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: data,
                            message: "Album search results fetched successfully",
                        })];
            }
        });
    });
}
function getArtistById(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var fullUrl, response, data;
        var id = _b.id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    fullUrl = "".concat(baseUrl, "/artist/").concat(id);
                    return [4 /*yield*/, fetch(fullUrl)];
                case 1:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new ServiceError_js_1.ServiceError("Failed to fetch artist data from Deezer API", {
                            isOperational: false,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("HTTP ".concat(response.status, " ").concat(response.statusText, " while fetching artist ").concat(id, " from ").concat(fullUrl)),
                        });
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (data.error) {
                        throw new ServiceError_js_1.ServiceError("Artist not found", {
                            isOperational: true,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("Deezer API error for artist ".concat(id, ": ").concat(JSON.stringify(data.error))),
                        });
                    }
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: data,
                            message: "Artist fetched successfully",
                        })];
            }
        });
    });
}
function getArtistFuzzySearchByArtistName(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var params, fullUrl, response, data;
        var artistName = _b.artistName, index = _b.index, limit = _b.limit;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    params = new URLSearchParams();
                    params.append("q", "artist:".concat(artistName));
                    params.append("index", (index === null || index === void 0 ? void 0 : index.toString()) || "0");
                    params.append("limit", (limit === null || limit === void 0 ? void 0 : limit.toString()) || "10");
                    fullUrl = "".concat(baseUrl, "/search?").concat(params.toString());
                    return [4 /*yield*/, fetch(fullUrl)];
                case 1:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new ServiceError_js_1.ServiceError("Failed to fetch artist search results from Deezer API", {
                            isOperational: false,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("HTTP ".concat(response.status, " ").concat(response.statusText, " while searching artists with name \"").concat(artistName, "\" from ").concat(fullUrl)),
                        });
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (data.error) {
                        throw new ServiceError_js_1.ServiceError("Artist not found", {
                            isOperational: true,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("Deezer API error for artist ".concat(artistName, ": ").concat(JSON.stringify(data.error))),
                        });
                    }
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: data,
                            message: "Artist search results fetched successfully",
                        })];
            }
        });
    });
}
function getTrackById(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var fullUrl, response, data;
        var id = _b.id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    fullUrl = "".concat(baseUrl, "/track/").concat(id);
                    return [4 /*yield*/, fetch(fullUrl)];
                case 1:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new ServiceError_js_1.ServiceError("Failed to fetch track data from Deezer API", {
                            isOperational: false,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("HTTP ".concat(response.status, " ").concat(response.statusText, " while fetching track ").concat(id, " from ").concat(fullUrl)),
                        });
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (data.error) {
                        throw new ServiceError_js_1.ServiceError("Track not found", {
                            isOperational: true,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("Deezer API error for track ".concat(id, ": ").concat(JSON.stringify(data.error))),
                        });
                    }
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: data,
                            message: "Track fetched successfully",
                        })];
            }
        });
    });
}
function getTrackFuzzySearchByTrackTitle(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var params, fullUrl, response, data;
        var trackTitle = _b.trackTitle, index = _b.index, limit = _b.limit;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    params = new URLSearchParams();
                    params.append("q", "track:".concat(trackTitle));
                    params.append("index", (index === null || index === void 0 ? void 0 : index.toString()) || "0");
                    params.append("limit", (limit === null || limit === void 0 ? void 0 : limit.toString()) || "10");
                    fullUrl = "".concat(baseUrl, "/search?").concat(params.toString());
                    return [4 /*yield*/, fetch(fullUrl)];
                case 1:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new ServiceError_js_1.ServiceError("Failed to fetch track search results from Deezer API", {
                            isOperational: false,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("HTTP ".concat(response.status, " ").concat(response.statusText, " while searching tracks with title \"").concat(trackTitle, "\" from ").concat(fullUrl)),
                        });
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (data.error) {
                        throw new ServiceError_js_1.ServiceError("Track not found", {
                            isOperational: true,
                            logMessage: (0, logMessageWrapper_js_1.logMessageWrapper)("Deezer API error for track ".concat(trackTitle, ": ").concat(JSON.stringify(data.error))),
                        });
                    }
                    return [2 /*return*/, (0, serviceResponse_js_1.serviceResponseSuccess)({
                            data: data,
                            message: "Track search results fetched successfully",
                        })];
            }
        });
    });
}
//# sourceMappingURL=deezerService.js.map