import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";
import {
  insertAlbum,
  getAlbumById,
  getAlbumByTitle,
  getAllAlbums,
  getAlbumsWithPagination,
} from "../service/albumService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

async function insertAlbumTest() {
  const albums: DeezerAlbum[] = [];
  for (let i = 0; i < 5; i++) {
    const album = createRandomAlbum();
    albums.push(album);
  }

  for (const i in albums) {
    const album = albums[i];
    const payload = await executeServiceSafe({
      fun: insertAlbum,
      args: [{ album }],
    });

    console.log(`Index ${i} , Inserted Album:`, payload.data);
    console.log("-".repeat(50));
  }
}

async function getAlbumByIdTest() {
  const testId = 1280;
  const payload = await executeServiceSafe({
    fun: getAlbumById,
    args: [{ id: testId }],
  });
  console.log(payload);
}

async function getAlbumByTitleTest() {
  const testTitle = "Dream Moon";
  const payload = await executeServiceSafe({
    fun: getAlbumByTitle,
    args: [{ title: testTitle }],
  });
  console.log(payload);
}

async function getAllAlbumsTest() {
  const payload = await executeServiceSafe({
    fun: getAllAlbums,
    args: [],
  });
  console.log(payload);
}

async function getAlbumsWithPaginationTest() {
  const payload = await executeServiceSafe({
    fun: getAlbumsWithPagination,
    args: [{ index: 0, limit: 5, orderBy: "title", orderDir: "DESC" }],
  });

  console.log(payload);
}

// auxilary
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

function randomDate() {
  const start = new Date(1980, 0, 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

function randomWord() {
  const words = [
    "Dream",
    "Echo",
    "Shadow",
    "Neon",
    "Sky",
    "Fire",
    "Heart",
    "Pulse",
    "Moon",
  ];
  return randomChoice(words);
}

function createRandomAlbum(): DeezerAlbum {
  const id = randomInt(1000, 9999);
  const title = `${randomWord()} ${randomWord()}`;
  const label = randomChoice([
    "Sony Music",
    "Universal",
    "Warner",
    "Indie Records",
    "Atlantic",
  ]);
  const artistName = `${randomWord()} ${randomWord()}`;
  const duration = randomInt(1200, 4800);
  const nb_tracks = randomInt(8, 20);
  const fans = randomInt(1000, 500000);

  return {
    id,
    title,
    upc: `UPC${randomInt(1000000000, 9999999999)}`,
    link: `https://www.deezer.com/album/${id}`,
    share: `https://share.deezer.com/album/${id}`,
    cover: `https://picsum.photos/seed/${id}/400/400`,
    cover_small: `https://picsum.photos/seed/${id}/100/100`,
    cover_medium: `https://picsum.photos/seed/${id}/250/250`,
    cover_big: `https://picsum.photos/seed/${id}/500/500`,
    cover_xl: `https://picsum.photos/seed/${id}/800/800`,
    md5_image: Math.random().toString(36).substring(2, 18),
    genre_id: randomInt(1, 10),
    genres: { data: [] },
    label,
    nb_tracks,
    duration,
    fans,
    release_date: randomDate(),
    record_type: randomChoice(["album", "single", "ep"]),
    available: Math.random() > 0.2,
    tracklist: `https://api.deezer.com/album/${id}/tracks`,
    explicit_lyrics: Math.random() > 0.7,
    explicit_content_lyrics: randomInt(0, 2),
    explicit_content_cover: randomInt(0, 2),
    contributors: [],
    artist: {
      share: `https://www.deezer.com/artist/${id}`,
      id: randomInt(100, 999),
      name: artistName,
      link: `https://www.deezer.com/artist/${id}`,
      picture: `https://picsum.photos/seed/artist${id}/400/400`,
      picture_small: `https://picsum.photos/seed/artist${id}/100/100`,
      picture_medium: `https://picsum.photos/seed/artist${id}/250/250`,
      picture_big: `https://picsum.photos/seed/artist${id}/500/500`,
      picture_xl: `https://picsum.photos/seed/artist${id}/800/800`,
      nb_album: randomInt(1, 30),
      nb_fan: randomInt(1000, 1000000),
      radio: Math.random() > 0.5,
      tracklist: `https://api.deezer.com/artist/${id}/top?limit=50`,
      type: "artist",
    },
    type: "album",
    tracks: { data: [] },
  };
}

// tests

// insertAlbumTest();
// getAlbumByIdTest();
// getAlbumByTitleTest();
// getAllAlbumsTest();
getAlbumsWithPaginationTest();
