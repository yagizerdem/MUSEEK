import { getDatabase } from "../database.js";
export function createArtistTable() {
    var sql = "\nCREATE TABLE IF NOT EXISTS DeezerArtist (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  link TEXT,\n  share TEXT,\n  picture TEXT,\n  picture_small TEXT,\n  picture_medium TEXT,\n  picture_big TEXT,\n  picture_xl TEXT,\n  nb_album INTEGER,\n  nb_fan INTEGER,\n  radio INTEGER,\n  tracklist TEXT,\n  type TEXT\n);\n";
    var db = getDatabase();
    db.prepare(sql).run();
}
export function insertArtist(_a) {
    var artist = _a.artist;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "\n      INSERT OR REPLACE INTO DeezerArtist\n      (\n        id, name, link, share,\n        picture, picture_small, picture_medium, picture_big, picture_xl,\n        nb_album, nb_fan, radio, tracklist, type\n      )\n      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ";
        db.run(sql, [
            artist.id,
            artist.name,
            artist.link,
            artist.share,
            artist.picture,
            artist.picture_small,
            artist.picture_medium,
            artist.picture_big,
            artist.picture_xl,
            artist.nb_album,
            artist.nb_fan,
            artist.radio ? 1 : 0,
            artist.tracklist,
            artist.type,
        ], function (err) { return (err ? reject(err) : resolve()); });
    });
}
export function getAllArtist() {
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "SELECT * FROM DeezerArtist;";
        db.all(sql, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
export function updateArtistById(_a) {
    var artist = _a.artist;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "\n      UPDATE DeezerArtist\n      SET \n        name = ?,\n        link = ?,\n        share = ?,\n        picture = ?,\n        picture_small = ?,\n        picture_medium = ?,\n        picture_big = ?,\n        picture_xl = ?,\n        nb_album = ?,\n        nb_fan = ?,\n        radio = ?,\n        tracklist = ?,\n        type = ?\n      WHERE id = ?;\n    ";
        db.run(sql, [
            artist.name,
            artist.link,
            artist.share,
            artist.picture,
            artist.picture_small,
            artist.picture_medium,
            artist.picture_big,
            artist.picture_xl,
            artist.nb_album,
            artist.nb_fan,
            artist.radio ? 1 : 0,
            artist.tracklist,
            artist.type,
            artist.id,
        ], function (err) { return (err ? reject(err) : resolve()); });
    });
}
export function getArtistById(_a) {
    var id = _a.id;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "SELECT * FROM DeezerArtist WHERE id = ?;";
        db.get(sql, [id], function (err, row) {
            if (err)
                reject(err);
            else
                resolve(row ? row : null);
        });
    });
}
export function getArtistByName(_a) {
    var name = _a.name;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "SELECT * FROM DeezerArtist WHERE name = ?;";
        db.get(sql, [name], function (err, row) {
            if (err)
                reject(err);
            else
                resolve(row ? row : null);
        });
    });
}
export function getArtistsWithPagination(_a) {
    var index = _a.index, limit = _a.limit, _b = _a.orderBy, orderBy = _b === void 0 ? "nb_fan" : _b, _c = _a.orderDir, orderDir = _c === void 0 ? "DESC" : _c, filterField = _a.filterField, filterValue = _a.filterValue, _d = _a.matchMode, matchMode = _d === void 0 ? "substring" : _d;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var allowedColumns = [
            "id",
            "name",
            "nb_album",
            "nb_fan",
            "radio",
            "type",
        ];
        if (!allowedColumns.includes(orderBy))
            orderBy = "nb_fan";
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
        var sql = "\n      SELECT * FROM DeezerArtist\n      ".concat(whereClause, "\n      ORDER BY ").concat(orderBy, " ").concat(orderDir, "\n      LIMIT ? OFFSET ?;\n    ");
        params.push(limit, index);
        db.all(sql, params, function (err, rows) {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
//# sourceMappingURL=artistRepository.js.map