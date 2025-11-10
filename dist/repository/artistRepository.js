import { getDatabase } from "../database.js";
export function createArtistTable() {
    var sql = "\nCREATE TABLE IF NOT EXISTS DeezerArtist (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  link TEXT,\n  share TEXT,\n  picture TEXT,\n  picture_small TEXT,\n  picture_medium TEXT,\n  picture_big TEXT,\n  picture_xl TEXT,\n  nb_album INTEGER,\n  nb_fan INTEGER,\n  radio INTEGER,\n  tracklist TEXT,\n  type TEXT\n);\n";
    var db = getDatabase();
    db.prepare(sql).run();
}
//# sourceMappingURL=artistRepository.js.map