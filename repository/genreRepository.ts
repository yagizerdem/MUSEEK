import { getDatabase } from "../database.js";
import { DeezerGenre } from "../model/deezerReturnTypes/deezerGenre.js";

export function createGenreTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS DeezerGenre (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      picture TEXT,
      picture_small TEXT,
      picture_medium TEXT,
      picture_big TEXT,
      picture_xl TEXT,
      type TEXT
    );
  `;
  const db = getDatabase();
  db.prepare(sql).run();
}

export function insertGenre({ genre }: { genre: DeezerGenre }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      INSERT OR REPLACE INTO DeezerGenre
      (id, name, picture, picture_small, picture_medium, picture_big, picture_xl, type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.run(
      sql,
      [
        genre.id,
        genre.name,
        genre.picture,
        genre.picture_small,
        genre.picture_medium,
        genre.picture_big,
        genre.picture_xl,
        genre.type,
      ],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}

export function getAllGenre(): Promise<DeezerGenre[]> {
  return new Promise<DeezerGenre[]>((resolve, reject) => {
    const db = getDatabase();
    const sql = `SELECT * FROM DeezerGenre;`;

    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as DeezerGenre[]);
      }
    });
  });
}

export function updateGenreById({ genre }: { genre: DeezerGenre }) {
  return new Promise<void>((resolve, reject) => {
    const db = getDatabase();
    const sql = `
      UPDATE DeezerGenre
      SET 
        name = ?,
        picture = ?,
        picture_small = ?,
        picture_medium = ?,
        picture_big = ?,
        picture_xl = ?,
        type = ?
      WHERE id = ?;
    `;

    db.run(
      sql,
      [
        genre.name,
        genre.picture,
        genre.picture_small,
        genre.picture_medium,
        genre.picture_big,
        genre.picture_xl,
        genre.type,
        genre.id, // WHERE id = ?
      ],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}
