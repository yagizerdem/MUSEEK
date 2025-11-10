import { getDatabase } from "../database.js";
export function createAlbumTable() {
    var sql = "\nCREATE TABLE IF NOT EXISTS DeezerAlbum (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  upc TEXT,\n  link TEXT,\n  share TEXT,\n  cover TEXT,\n  cover_small TEXT,\n  cover_medium TEXT,\n  cover_big TEXT,\n  cover_xl TEXT,\n  md5_image TEXT,\n  genre_id INTEGER,\n  label TEXT,\n  nb_tracks INTEGER,\n  duration INTEGER,\n  fans INTEGER,\n  release_date TEXT,\n  record_type TEXT,\n  available INTEGER,\n  tracklist TEXT,\n  explicit_lyrics INTEGER,\n  explicit_content_lyrics INTEGER,\n  explicit_content_cover INTEGER,\n  artist_id INTEGER,\n  type TEXT,\n  FOREIGN KEY (genre_id) REFERENCES DeezerGenre(id),\n  FOREIGN KEY (artist_id) REFERENCES DeezerArtist(id)\n);\n";
    var db = getDatabase();
    db.prepare(sql).run();
}
//# sourceMappingURL=albumRepository.js.map