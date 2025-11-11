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
var artistService_js_1 = require("../service/artistService.js");
var executeServiceSafe_js_1 = require("../utils/executeServiceSafe.js");
// ----------- TESTS ------------
function insertArtistTest() {
    return __awaiter(this, void 0, void 0, function () {
        var artists, i, artist, _a, _b, _c, _i, i, artist, payload;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    artists = [];
                    for (i = 0; i < 5; i++) {
                        artist = createRandomArtist();
                        artists.push(artist);
                    }
                    _a = artists;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 3];
                    i = _c;
                    artist = artists[i];
                    return [4 /*yield*/, (0, executeServiceSafe_js_1.executeServiceSafe)({
                            fun: artistService_js_1.insertArtist,
                            args: [{ artist: artist }],
                        })];
                case 2:
                    payload = _d.sent();
                    console.log("Index ".concat(i, ", Inserted Artist:"), payload);
                    console.log("-".repeat(50));
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getArtistByIdTest() {
    return __awaiter(this, void 0, void 0, function () {
        var testId, payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testId = 564;
                    return [4 /*yield*/, (0, executeServiceSafe_js_1.executeServiceSafe)({
                            fun: artistService_js_1.getArtistById,
                            args: [{ id: testId }],
                        })];
                case 1:
                    payload = _a.sent();
                    console.log(payload);
                    return [2 /*return*/];
            }
        });
    });
}
function getArtistByNameTest() {
    return __awaiter(this, void 0, void 0, function () {
        var testName, payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testName = "Echo Fire";
                    return [4 /*yield*/, (0, executeServiceSafe_js_1.executeServiceSafe)({
                            fun: artistService_js_1.getArtistByName,
                            args: [{ name: testName }],
                        })];
                case 1:
                    payload = _a.sent();
                    console.log(payload);
                    return [2 /*return*/];
            }
        });
    });
}
function getAllArtistsTest() {
    return __awaiter(this, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, executeServiceSafe_js_1.executeServiceSafe)({
                        fun: artistService_js_1.getAllArtists,
                        args: [],
                    })];
                case 1:
                    payload = _a.sent();
                    console.log(payload);
                    return [2 /*return*/];
            }
        });
    });
}
function getArtistsWithPaginationTest() {
    return __awaiter(this, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, executeServiceSafe_js_1.executeServiceSafe)({
                        fun: artistService_js_1.getArtistsWithPagination,
                        args: [{ index: 0, limit: 5, orderBy: "nb_fan", orderDir: "ASC" }],
                    })];
                case 1:
                    payload = _a.sent();
                    console.log(payload);
                    return [2 /*return*/];
            }
        });
    });
}
// ----------- HELPERS ------------
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomChoice(arr) {
    return arr[randomInt(0, arr.length - 1)];
}
function randomWord() {
    var words = [
        "Dream",
        "Echo",
        "Shadow",
        "Neon",
        "Sky",
        "Fire",
        "Heart",
        "Pulse",
        "Moon",
    ];
    return randomChoice(words);
}
function createRandomArtist() {
    var id = randomInt(100, 999);
    var name = "".concat(randomWord(), " ").concat(randomWord());
    var nb_album = randomInt(1, 20);
    var nb_fan = randomInt(1000, 500000);
    return {
        id: id,
        name: name,
        link: "https://www.deezer.com/artist/".concat(id),
        share: "https://share.deezer.com/artist/".concat(id),
        picture: "https://picsum.photos/seed/artist".concat(id, "/400/400"),
        picture_small: "https://picsum.photos/seed/artist".concat(id, "/100/100"),
        picture_medium: "https://picsum.photos/seed/artist".concat(id, "/250/250"),
        picture_big: "https://picsum.photos/seed/artist".concat(id, "/500/500"),
        picture_xl: "https://picsum.photos/seed/artist".concat(id, "/800/800"),
        nb_album: nb_album,
        nb_fan: nb_fan,
        radio: Math.random() > 0.5,
        tracklist: "https://api.deezer.com/artist/".concat(id, "/top?limit=50"),
        type: "artist",
    };
}
// ----------- RUN TESTS ------------
//insertArtistTest();
//getArtistByIdTest();
//getArtistByNameTest();
// getAllArtistsTest();
// getArtistsWithPaginationTest();
//# sourceMappingURL=artistService.test.js.map