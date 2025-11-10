import { getDatabase } from "../database.js";
export function createGenreTable() {
    var sql = "\n    CREATE TABLE IF NOT EXISTS DeezerGenre (\n      id INTEGER PRIMARY KEY,\n      name TEXT NOT NULL,\n      picture TEXT,\n      picture_small TEXT,\n      picture_medium TEXT,\n      picture_big TEXT,\n      picture_xl TEXT,\n      type TEXT\n    );\n  ";
    var db = getDatabase();
    db.prepare(sql).run();
}
export function insertGenre(_a) {
    var genre = _a.genre;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "\n      INSERT OR REPLACE INTO DeezerGenre\n      (id, name, picture, picture_small, picture_medium, picture_big, picture_xl, type)\n      VALUES (?, ?, ?, ?, ?, ?, ?, ?);\n    ";
        db.run(sql, [
            genre.id,
            genre.name,
            genre.picture,
            genre.picture_small,
            genre.picture_medium,
            genre.picture_big,
            genre.picture_xl,
            genre.type,
        ], function (err) {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
export function getAllGenre() {
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "SELECT * FROM DeezerGenre;";
        db.all(sql, function (err, rows) {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}
export function updateGenreById(_a) {
    var genre = _a.genre;
    return new Promise(function (resolve, reject) {
        var db = getDatabase();
        var sql = "\n      UPDATE DeezerGenre\n      SET \n        name = ?,\n        picture = ?,\n        picture_small = ?,\n        picture_medium = ?,\n        picture_big = ?,\n        picture_xl = ?,\n        type = ?\n      WHERE id = ?;\n    ";
        db.run(sql, [
            genre.name,
            genre.picture,
            genre.picture_small,
            genre.picture_medium,
            genre.picture_big,
            genre.picture_xl,
            genre.type,
            genre.id, // WHERE id = ?
        ], function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
//# sourceMappingURL=genreRepository.js.map