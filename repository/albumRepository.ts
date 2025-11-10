import { getDatabase } from "../database.js";

export function createAlbumTable() {
  const sql = `
CREATE TABLE IF NOT EXISTS DeezerAlbum (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  upc TEXT,
  link TEXT,
  share TEXT,
  cover TEXT,
  cover_small TEXT,
  cover_medium TEXT,
  cover_big TEXT,
  cover_xl TEXT,
  md5_image TEXT,
  genre_id INTEGER,
  label TEXT,
  nb_tracks INTEGER,
  duration INTEGER,
  fans INTEGER,
  release_date TEXT,
  record_type TEXT,
  available INTEGER,
  tracklist TEXT,
  explicit_lyrics INTEGER,
  explicit_content_lyrics INTEGER,
  explicit_content_cover INTEGER,
  artist_id INTEGER,
  type TEXT,
  FOREIGN KEY (genre_id) REFERENCES DeezerGenre(id),
  FOREIGN KEY (artist_id) REFERENCES DeezerArtist(id)
);
`;
  const db = getDatabase();
  db.prepare(sql).run();
}
