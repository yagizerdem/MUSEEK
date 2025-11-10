import { getDatabase } from "../database.js";
export function createTrackTable() {
    var sql = "\nCREATE TABLE IF NOT EXISTS DeezerTrack (\n  id INTEGER PRIMARY KEY,\n  readable INTEGER,\n  title TEXT NOT NULL,\n  title_short TEXT,\n  title_version TEXT,\n  isrc TEXT,\n  link TEXT,\n  share TEXT,\n  duration INTEGER,\n  track_position INTEGER,\n  disk_number INTEGER,\n  rank INTEGER,\n  release_date TEXT,\n  explicit_lyrics INTEGER,\n  explicit_content_lyrics INTEGER,\n  explicit_content_cover INTEGER,\n  preview TEXT,\n  bpm REAL,\n  gain REAL,\n  available_countries TEXT,\n  md5_image TEXT,\n  track_token TEXT,\n  artist_id INTEGER,\n  album_id INTEGER,\n  type TEXT,\n  FOREIGN KEY (artist_id) REFERENCES DeezerArtist(id),\n  FOREIGN KEY (album_id) REFERENCES DeezerAlbum(id)\n);\n";
    var db = getDatabase();
    db.prepare(sql).run();
}
export function insertTrack(_a) {
    var track = _a.track;
    return new Promise(function (resolve, reject) {
        var _a, _b, _c, _d;
        var db = getDatabase();
        var sql = "\n      INSERT OR REPLACE INTO DeezerTrack\n      (\n        id, readable, title, title_short, title_version, isrc,\n        link, share, duration, track_position, disk_number, rank,\n        release_date, explicit_lyrics, explicit_content_lyrics, explicit_content_cover,\n        preview, bpm, gain, available_countries, md5_image, track_token,\n        artist_id, album_id, type\n      )\n      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ";
        db.run(sql, [
            track.id,
            track.readable ? 1 : 0,
            track.title,
            track.title_short,
            track.title_version,
            track.isrc,
            track.link,
            track.share,
            track.duration,
            track.track_position,
            track.disk_number,
            track.rank,
            track.release_date,
            track.explicit_lyrics ? 1 : 0,
            track.explicit_content_lyrics,
            track.explicit_content_cover,
            track.preview,
            track.bpm,
            track.gain,
            track.available_countries.join(","), // stored as comma-separated string
            track.md5_image,
            track.track_token,
            (_b = (_a = track.artist) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null,
            (_d = (_c = track.album) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : null,
            track.type,
        ], function (err) { return (err ? reject(err) : resolve()); });
    });
}
export function getAllTrack() {
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "SELECT * FROM DeezerTrack;";
        db.all(sql, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
export function updateTrackById(_a) {
    var track = _a.track;
    return new Promise(function (resolve, reject) {
        var _a, _b, _c, _d;
        var db = getDatabase();
        var sql = "\n      UPDATE DeezerTrack\n      SET\n        readable = ?,\n        title = ?,\n        title_short = ?,\n        title_version = ?,\n        isrc = ?,\n        link = ?,\n        share = ?,\n        duration = ?,\n        track_position = ?,\n        disk_number = ?,\n        rank = ?,\n        release_date = ?,\n        explicit_lyrics = ?,\n        explicit_content_lyrics = ?,\n        explicit_content_cover = ?,\n        preview = ?,\n        bpm = ?,\n        gain = ?,\n        available_countries = ?,\n        md5_image = ?,\n        track_token = ?,\n        artist_id = ?,\n        album_id = ?,\n        type = ?\n      WHERE id = ?;\n    ";
        db.run(sql, [
            track.readable ? 1 : 0,
            track.title,
            track.title_short,
            track.title_version,
            track.isrc,
            track.link,
            track.share,
            track.duration,
            track.track_position,
            track.disk_number,
            track.rank,
            track.release_date,
            track.explicit_lyrics ? 1 : 0,
            track.explicit_content_lyrics,
            track.explicit_content_cover,
            track.preview,
            track.bpm,
            track.gain,
            track.available_countries.join(","),
            track.md5_image,
            track.track_token,
            (_b = (_a = track.artist) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null,
            (_d = (_c = track.album) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : null,
            track.type,
            track.id,
        ], function (err) { return (err ? reject(err) : resolve()); });
    });
}
export function getTrackById(_a) {
    var id = _a.id;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "SELECT * FROM DeezerTrack WHERE id = ?;";
        db.get(sql, [id], function (err, row) {
            if (err)
                reject(err);
            else
                resolve(row ? row : null);
        });
    });
}
export function getTrackByTitle(_a) {
    var title = _a.title;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "\n      SELECT * FROM DeezerTrack\n      WHERE title LIKE ?;\n    ";
        db.all(sql, ["%".concat(title, "%")], function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
export function getTracksWithPagination(_a) {
    var index = _a.index, limit = _a.limit, _b = _a.orderBy, orderBy = _b === void 0 ? "rank" : _b, _c = _a.orderDir, orderDir = _c === void 0 ? "DESC" : _c, filterField = _a.filterField, filterValue = _a.filterValue, _d = _a.matchMode, matchMode = _d === void 0 ? "substring" : _d;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var allowedColumns = [
            "id",
            "title",
            "rank",
            "duration",
            "bpm",
            "release_date",
        ];
        if (!allowedColumns.includes(orderBy))
            orderBy = "rank";
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
        var sql = "\n      SELECT * FROM DeezerTrack\n      ".concat(whereClause, "\n      ORDER BY ").concat(orderBy, " ").concat(orderDir, "\n      LIMIT ? OFFSET ?;\n    ");
        params.push(limit, index);
        db.all(sql, params, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
//# sourceMappingURL=trackRepository.js.map