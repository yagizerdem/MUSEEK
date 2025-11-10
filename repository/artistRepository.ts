import { getDatabase } from "../database.js";

export function createArtistTable() {
  const sql = `
CREATE TABLE IF NOT EXISTS DeezerArtist (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  link TEXT,
  share TEXT,
  picture TEXT,
  picture_small TEXT,
  picture_medium TEXT,
  picture_big TEXT,
  picture_xl TEXT,
  nb_album INTEGER,
  nb_fan INTEGER,
  radio INTEGER,
  tracklist TEXT,
  type TEXT
);
`;
  const db = getDatabase();
  db.prepare(sql).run();
}
