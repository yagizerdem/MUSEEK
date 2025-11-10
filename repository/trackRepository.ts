import { getDatabase } from "../database.js";

export function createTrackTable() {
  const sql = `
CREATE TABLE IF NOT EXISTS DeezerTrack (
  id INTEGER PRIMARY KEY,
  readable INTEGER,
  title TEXT NOT NULL,
  title_short TEXT,
  title_version TEXT,
  isrc TEXT,
  link TEXT,
  share TEXT,
  duration INTEGER,
  track_position INTEGER,
  disk_number INTEGER,
  rank INTEGER,
  release_date TEXT,
  explicit_lyrics INTEGER,
  explicit_content_lyrics INTEGER,
  explicit_content_cover INTEGER,
  preview TEXT,
  bpm REAL,
  gain REAL,
  available_countries TEXT,
  md5_image TEXT,
  track_token TEXT,
  artist_id INTEGER,
  album_id INTEGER,
  type TEXT,
  FOREIGN KEY (artist_id) REFERENCES DeezerArtist(id),
  FOREIGN KEY (album_id) REFERENCES DeezerAlbum(id)
);
`;
  const db = getDatabase();
  db.prepare(sql).run();
}
