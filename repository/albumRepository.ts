import { getDatabase } from "../database.js";
import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";

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

export function insertAlbum({ album }: { album: DeezerAlbum }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      INSERT OR REPLACE INTO DeezerAlbum
      (
        id, title, upc, link, share,
        cover, cover_small, cover_medium, cover_big, cover_xl,
        md5_image, genre_id, label, nb_tracks, duration,
        fans, release_date, record_type, available, tracklist,
        explicit_lyrics, explicit_content_lyrics, explicit_content_cover,
        artist_id, type
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.run(
      sql,
      [
        album.id,
        album.title,
        album.upc,
        album.link,
        album.share,
        album.cover,
        album.cover_small,
        album.cover_medium,
        album.cover_big,
        album.cover_xl,
        album.md5_image,
        album.genre_id,
        album.label,
        album.nb_tracks,
        album.duration,
        album.fans,
        album.release_date,
        album.record_type,
        album.available ? 1 : 0,
        album.tracklist,
        album.explicit_lyrics ? 1 : 0,
        album.explicit_content_lyrics,
        album.explicit_content_cover,
        album.artist?.id ?? null,
        album.type,
      ],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}

export function getAllAlbum(): Promise<DeezerAlbum[]> {
  return new Promise<DeezerAlbum[]>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerAlbum;`;

    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerAlbum[]);
    });
  });
}
export function updateAlbumById({ album }: { album: DeezerAlbum }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      UPDATE DeezerAlbum
      SET 
        title = ?,
        upc = ?,
        link = ?,
        share = ?,
        cover = ?,
        cover_small = ?,
        cover_medium = ?,
        cover_big = ?,
        cover_xl = ?,
        md5_image = ?,
        genre_id = ?,
        label = ?,
        nb_tracks = ?,
        duration = ?,
        fans = ?,
        release_date = ?,
        record_type = ?,
        available = ?,
        tracklist = ?,
        explicit_lyrics = ?,
        explicit_content_lyrics = ?,
        explicit_content_cover = ?,
        artist_id = ?,
        type = ?
      WHERE id = ?;
    `;

    db.run(
      sql,
      [
        album.title,
        album.upc,
        album.link,
        album.share,
        album.cover,
        album.cover_small,
        album.cover_medium,
        album.cover_big,
        album.cover_xl,
        album.md5_image,
        album.genre_id,
        album.label,
        album.nb_tracks,
        album.duration,
        album.fans,
        album.release_date,
        album.record_type,
        album.available ? 1 : 0,
        album.tracklist,
        album.explicit_lyrics ? 1 : 0,
        album.explicit_content_lyrics,
        album.explicit_content_cover,
        album.artist?.id ?? null,
        album.type,
        album.id,
      ],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function getAlbumById({
  id,
}: {
  id: number;
}): Promise<DeezerAlbum | null> {
  return new Promise<DeezerAlbum | null>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerAlbum WHERE id = ?;`;

    db.get(sql, [id], (err, row) => {
      if (err) reject(err);
      else resolve(row ? (row as DeezerAlbum) : null);
    });
  });
}

export function getAlbumByTitle({
  title,
}: {
  title: string;
}): Promise<DeezerAlbum | null> {
  return new Promise<DeezerAlbum | null>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerAlbum WHERE title = ?;`;

    db.get(sql, [title], (err, row) => {
      if (err) reject(err);
      else resolve(row ? (row as DeezerAlbum) : null);
    });
  });
}

export function getAlbumsWithPagination({
  index,
  limit,
  orderBy = "release_date",
  orderDir = "DESC",
  filterField, // "title", "label"
  filterValue, //  "love"
  matchMode = "substring", // "substring" | "exact"
}: {
  index: number;
  limit: number;
  orderBy?: keyof DeezerAlbum | string;
  orderDir?: "ASC" | "DESC";
  filterField?: keyof DeezerAlbum | string;
  filterValue?: string;
  matchMode?: "substring" | "exact";
}) {
  return new Promise<DeezerAlbum[]>((resolve, reject) => {
    const db = getDatabase();

    const allowedColumns = [
      "id",
      "title",
      "release_date",
      "fans",
      "nb_tracks",
      "label",
    ];
    if (!allowedColumns.includes(orderBy)) orderBy = "release_date";
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
      SELECT * FROM DeezerAlbum
      ${whereClause}
      ORDER BY ${orderBy} ${orderDir}
      LIMIT ? OFFSET ?;
    `;

    params.push(limit, index);

    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerAlbum[]);
    });
  });
}
