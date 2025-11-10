import { getDatabase } from "../database.js";
import { DeezerTrack } from "../model/deezerReturnTypes/deezerTrack.js";

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

export function insertTrack({ track }: { track: DeezerTrack }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      INSERT OR REPLACE INTO DeezerTrack
      (
        id, readable, title, title_short, title_version, isrc,
        link, share, duration, track_position, disk_number, rank,
        release_date, explicit_lyrics, explicit_content_lyrics, explicit_content_cover,
        preview, bpm, gain, available_countries, md5_image, track_token,
        artist_id, album_id, type
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.run(
      sql,
      [
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
        track.artist?.id ?? null,
        track.album?.id ?? null,
        track.type,
      ],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function getAllTrack(): Promise<DeezerTrack[]> {
  return new Promise<DeezerTrack[]>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerTrack;`;

    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerTrack[]);
    });
  });
}

export function updateTrackById({ track }: { track: DeezerTrack }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      UPDATE DeezerTrack
      SET
        readable = ?,
        title = ?,
        title_short = ?,
        title_version = ?,
        isrc = ?,
        link = ?,
        share = ?,
        duration = ?,
        track_position = ?,
        disk_number = ?,
        rank = ?,
        release_date = ?,
        explicit_lyrics = ?,
        explicit_content_lyrics = ?,
        explicit_content_cover = ?,
        preview = ?,
        bpm = ?,
        gain = ?,
        available_countries = ?,
        md5_image = ?,
        track_token = ?,
        artist_id = ?,
        album_id = ?,
        type = ?
      WHERE id = ?;
    `;

    db.run(
      sql,
      [
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
        track.artist?.id ?? null,
        track.album?.id ?? null,
        track.type,
        track.id,
      ],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function getTrackById({
  id,
}: {
  id: number;
}): Promise<DeezerTrack | null> {
  return new Promise<DeezerTrack | null>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerTrack WHERE id = ?;`;

    db.get(sql, [id], (err, row) => {
      if (err) reject(err);
      else resolve(row ? (row as DeezerTrack) : null);
    });
  });
}

export function getTrackByTitle({
  title,
}: {
  title: string;
}): Promise<DeezerTrack[]> {
  return new Promise<DeezerTrack[]>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      SELECT * FROM DeezerTrack
      WHERE title LIKE ?;
    `;
    db.all(sql, [`%${title}%`], (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerTrack[]);
    });
  });
}

export function getTracksWithPagination({
  index,
  limit,
  orderBy = "rank",
  orderDir = "DESC",
  filterField,
  filterValue,
  matchMode = "substring",
}: {
  index: number;
  limit: number;
  orderBy?: keyof DeezerTrack | string;
  orderDir?: "ASC" | "DESC";
  filterField?: keyof DeezerTrack | string;
  filterValue?: string;
  matchMode?: "substring" | "exact";
}) {
  return new Promise<DeezerTrack[]>((resolve, reject) => {
    const db = getDatabase();

    const allowedColumns = [
      "id",
      "title",
      "rank",
      "duration",
      "bpm",
      "release_date",
    ];
    if (!allowedColumns.includes(orderBy)) orderBy = "rank";
    if (filterField && !allowedColumns.includes(filterField))
      filterField = undefined;

    let whereClause = "";
    const params: any[] = [];

    if (filterField && filterValue) {
      if (matchMode === "substring") {
        whereClause = `WHERE ${filterField} LIKE ?`;
        params.push(`%${filterValue}%`);
      } else {
        whereClause = `WHERE ${filterField} = ?`;
        params.push(filterValue);
      }
    }

    const sql = `
      SELECT * FROM DeezerTrack
      ${whereClause}
      ORDER BY ${orderBy} ${orderDir}
      LIMIT ? OFFSET ?;
    `;

    params.push(limit, index);

    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerTrack[]);
    });
  });
}
