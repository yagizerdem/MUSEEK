"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAlbumTable = createAlbumTable;
exports.insertAlbum = insertAlbum;
exports.getAllAlbum = getAllAlbum;
exports.updateAlbumById = updateAlbumById;
exports.getAlbumById = getAlbumById;
exports.getAlbumByTitle = getAlbumByTitle;
exports.getAlbumsWithPagination = getAlbumsWithPagination;
var database_js_1 = require("../database.js");
function createAlbumTable() {
    var sql = "\nCREATE TABLE IF NOT EXISTS DeezerAlbum (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  upc TEXT,\n  link TEXT,\n  share TEXT,\n  cover TEXT,\n  cover_small TEXT,\n  cover_medium TEXT,\n  cover_big TEXT,\n  cover_xl TEXT,\n  md5_image TEXT,\n  genre_id INTEGER,\n  label TEXT,\n  nb_tracks INTEGER,\n  duration INTEGER,\n  fans INTEGER,\n  release_date TEXT,\n  record_type TEXT,\n  available INTEGER,\n  tracklist TEXT,\n  explicit_lyrics INTEGER,\n  explicit_content_lyrics INTEGER,\n  explicit_content_cover INTEGER,\n  artist_id INTEGER,\n  type TEXT,\n  FOREIGN KEY (genre_id) REFERENCES DeezerGenre(id),\n  FOREIGN KEY (artist_id) REFERENCES DeezerArtist(id)\n);\n";
    var db = (0, database_js_1.getDatabase)();
    db.prepare(sql).run();
}
function insertAlbum(_a) {
    var album = _a.album;
    return new Promise(function (resolve, reject) {
        var _a, _b;
        var db = (0, database_js_1.getDatabase)();
        var sql = "\n      INSERT OR REPLACE INTO DeezerAlbum\n      (\n        id, title, upc, link, share,\n        cover, cover_small, cover_medium, cover_big, cover_xl,\n        md5_image, genre_id, label, nb_tracks, duration,\n        fans, release_date, record_type, available, tracklist,\n        explicit_lyrics, explicit_content_lyrics, explicit_content_cover,\n        artist_id, type\n      )\n      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ";
        db.run(sql, [
            album.id,
            album.title,
            album.upc,
            album.link,
            album.share,
            album.cover,
            album.cover_small,
            album.cover_medium,
            album.cover_big,
            album.cover_xl,
            album.md5_image,
            album.genre_id,
            album.label,
            album.nb_tracks,
            album.duration,
            album.fans,
            album.release_date,
            album.record_type,
            album.available ? 1 : 0,
            album.tracklist,
            album.explicit_lyrics ? 1 : 0,
            album.explicit_content_lyrics,
            album.explicit_content_cover,
            (_b = (_a = album.artist) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null,
            album.type,
        ], function (err) {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
function getAllAlbum() {
    return new Promise(function (resolve, reject) {
        var db = (0, database_js_1.getDatabase)();
        var sql = "SELECT * FROM DeezerAlbum;";
        db.all(sql, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
function updateAlbumById(_a) {
    var album = _a.album;
    return new Promise(function (resolve, reject) {
        var _a, _b;
        var db = (0, database_js_1.getDatabase)();
        var sql = "\n      UPDATE DeezerAlbum\n      SET \n        title = ?,\n        upc = ?,\n        link = ?,\n        share = ?,\n        cover = ?,\n        cover_small = ?,\n        cover_medium = ?,\n        cover_big = ?,\n        cover_xl = ?,\n        md5_image = ?,\n        genre_id = ?,\n        label = ?,\n        nb_tracks = ?,\n        duration = ?,\n        fans = ?,\n        release_date = ?,\n        record_type = ?,\n        available = ?,\n        tracklist = ?,\n        explicit_lyrics = ?,\n        explicit_content_lyrics = ?,\n        explicit_content_cover = ?,\n        artist_id = ?,\n        type = ?\n      WHERE id = ?;\n    ";
        db.run(sql, [
            album.title,
            album.upc,
            album.link,
            album.share,
            album.cover,
            album.cover_small,
            album.cover_medium,
            album.cover_big,
            album.cover_xl,
            album.md5_image,
            album.genre_id,
            album.label,
            album.nb_tracks,
            album.duration,
            album.fans,
            album.release_date,
            album.record_type,
            album.available ? 1 : 0,
            album.tracklist,
            album.explicit_lyrics ? 1 : 0,
            album.explicit_content_lyrics,
            album.explicit_content_cover,
            (_b = (_a = album.artist) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null,
            album.type,
            album.id,
        ], function (err) { return (err ? reject(err) : resolve()); });
    });
}
function getAlbumById(_a) {
    var id = _a.id;
    return new Promise(function (resolve, reject) {
        var db = (0, database_js_1.getDatabase)();
        var sql = "SELECT * FROM DeezerAlbum WHERE id = ?;";
        db.get(sql, [id], function (err, row) {
            if (err)
                reject(err);
            else
                resolve(row ? row : null);
        });
    });
}
function getAlbumByTitle(_a) {
    var title = _a.title;
    return new Promise(function (resolve, reject) {
        var db = (0, database_js_1.getDatabase)();
        var sql = "SELECT * FROM DeezerAlbum WHERE title = ?;";
        db.get(sql, [title], function (err, row) {
            if (err)
                reject(err);
            else
                resolve(row ? row : null);
        });
    });
}
function getAlbumsWithPagination(_a) {
    var index = _a.index, limit = _a.limit, _b = _a.orderBy, orderBy = _b === void 0 ? "release_date" : _b, _c = _a.orderDir, orderDir = _c === void 0 ? "DESC" : _c, filterField = _a.filterField, // "title", "label"
    filterValue = _a.filterValue, //  "love"
    _d = _a.matchMode, //  "love"
    matchMode = _d === void 0 ? "substring" : _d;
    return new Promise(function (resolve, reject) {
        var db = (0, database_js_1.getDatabase)();
        var allowedColumns = [
            "id",
            "title",
            "release_date",
            "fans",
            "nb_tracks",
            "label",
        ];
        if (!allowedColumns.includes(orderBy))
            orderBy = "release_date";
        if (filterField && !allowedColumns.includes(filterField))
            filterField = undefined;
        var whereClause = "";
        var params = [];
        if (filterField && filterValue) {
            if (matchMode === "substring") {
                whereClause = "WHERE ".concat(filterField, " LIKE ?");
                params.push("%".concat(filterValue, "%"));
            }
            else {
                whereClause = "WHERE ".concat(filterField, " = ?");
                params.push(filterValue);
            }
        }
        var sql = "\n      SELECT * FROM DeezerAlbum\n      ".concat(whereClause, "\n      ORDER BY ").concat(orderBy, " ").concat(orderDir, "\n      LIMIT ? OFFSET ?;\n    ");
        params.push(limit, index);
        db.all(sql, params, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
//# sourceMappingURL=albumRepository.js.map