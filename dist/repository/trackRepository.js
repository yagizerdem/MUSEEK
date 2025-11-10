import { getDatabase } from "../database.js";
export function createTrackTable() {
    var sql = "\nCREATE TABLE IF NOT EXISTS DeezerTrack (\n  id INTEGER PRIMARY KEY,\n  readable INTEGER,\n  title TEXT NOT NULL,\n  title_short TEXT,\n  title_version TEXT,\n  isrc TEXT,\n  link TEXT,\n  share TEXT,\n  duration INTEGER,\n  track_position INTEGER,\n  disk_number INTEGER,\n  rank INTEGER,\n  release_date TEXT,\n  explicit_lyrics INTEGER,\n  explicit_content_lyrics INTEGER,\n  explicit_content_cover INTEGER,\n  preview TEXT,\n  bpm REAL,\n  gain REAL,\n  available_countries TEXT,\n  md5_image TEXT,\n  track_token TEXT,\n  artist_id INTEGER,\n  album_id INTEGER,\n  type TEXT,\n  FOREIGN KEY (artist_id) REFERENCES DeezerArtist(id),\n  FOREIGN KEY (album_id) REFERENCES DeezerAlbum(id)\n);\n";
    var db = getDatabase();
    db.prepare(sql).run();
}
//# sourceMappingURL=trackRepository.js.map