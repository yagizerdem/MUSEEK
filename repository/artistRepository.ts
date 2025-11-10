import { getDatabase } from "../database.js";
import { DeezerArtist } from "../model/deezerReturnTypes/deezerArtist.js";

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

export function insertArtist({ artist }: { artist: DeezerArtist }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      INSERT OR REPLACE INTO DeezerArtist
      (
        id, name, link, share,
        picture, picture_small, picture_medium, picture_big, picture_xl,
        nb_album, nb_fan, radio, tracklist, type
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.run(
      sql,
      [
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
      ],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function getAllArtist(): Promise<DeezerArtist[]> {
  return new Promise<DeezerArtist[]>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerArtist;`;

    db.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerArtist[]);
    });
  });
}

export function updateArtistById({ artist }: { artist: DeezerArtist }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      UPDATE DeezerArtist
      SET 
        name = ?,
        link = ?,
        share = ?,
        picture = ?,
        picture_small = ?,
        picture_medium = ?,
        picture_big = ?,
        picture_xl = ?,
        nb_album = ?,
        nb_fan = ?,
        radio = ?,
        tracklist = ?,
        type = ?
      WHERE id = ?;
    `;

    db.run(
      sql,
      [
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
      ],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function getArtistById({
  id,
}: {
  id: number;
}): Promise<DeezerArtist | null> {
  return new Promise<DeezerArtist | null>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerArtist WHERE id = ?;`;

    db.get(sql, [id], (err, row) => {
      if (err) reject(err);
      else resolve(row ? (row as DeezerArtist) : null);
    });
  });
}

export function getArtistByName({
  name,
}: {
  name: string;
}): Promise<DeezerArtist | null> {
  return new Promise<DeezerArtist | null>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerArtist WHERE name = ?;`;

    db.get(sql, [name], (err, row) => {
      if (err) reject(err);
      else resolve(row ? (row as DeezerArtist) : null);
    });
  });
}

export function getArtistsWithPagination({
  index,
  limit,
  orderBy = "nb_fan",
  orderDir = "DESC",
  filterField,
  filterValue,
  matchMode = "substring",
}: {
  index: number;
  limit: number;
  orderBy?: keyof DeezerArtist | string;
  orderDir?: "ASC" | "DESC";
  filterField?: keyof DeezerArtist | string;
  filterValue?: string;
  matchMode?: "substring" | "exact";
}) {
  return new Promise<DeezerArtist[]>((resolve, reject) => {
    const db = getDatabase();

    const allowedColumns = [
      "id",
      "name",
      "nb_album",
      "nb_fan",
      "radio",
      "type",
    ];
    if (!allowedColumns.includes(orderBy)) orderBy = "nb_fan";
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
      SELECT * FROM DeezerArtist
      ${whereClause}
      ORDER BY ${orderBy} ${orderDir}
      LIMIT ? OFFSET ?;
    `;

    params.push(limit, index);

    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as DeezerArtist[]);
    });
  });
}
