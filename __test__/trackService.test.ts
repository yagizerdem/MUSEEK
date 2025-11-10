import { DeezerTrack } from "../model/deezerReturnTypes/deezerTrack.js";
import {
  insertTrack,
  getTrackById,
  getTrackByTitle,
  getAllTracks,
  getTracksWithPagination,
} from "../service/trackService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

// ----------- TESTS ------------

async function insertTrackTest() {
  const tracks: DeezerTrack[] = [];
  for (let i = 0; i < 5; i++) {
    const track = createRandomTrack();
    tracks.push(track);
  }

  for (const i in tracks) {
    const track = tracks[i];
    const payload = await executeServiceSafe({
      fun: insertTrack,
      args: [{ track }],
    });

    console.log(`Index ${i}, Inserted Track:`, payload.data);
    console.log("-".repeat(50));
  }
}

async function getTrackByIdTest() {
  const testId = 1010;
  const payload = await executeServiceSafe({
    fun: getTrackById,
    args: [{ id: testId }],
  });
  console.log(payload);
}

async function getTrackByTitleTest() {
  const testTitle = "Dream Fire";
  const payload = await executeServiceSafe({
    fun: getTrackByTitle,
    args: [{ title: testTitle }],
  });
  console.log(payload);
}

async function getAllTracksTest() {
  const payload = await executeServiceSafe({
    fun: getAllTracks,
    args: [],
  });
  console.log(payload);
}

async function getTracksWithPaginationTest() {
  const payload = await executeServiceSafe({
    fun: getTracksWithPagination,
    args: [{ index: 0, limit: 5, orderBy: "rank", orderDir: "DESC" }],
  });
  console.log(payload);
}

// ----------- HELPERS ------------

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

function createRandomTrack(): DeezerTrack {
  const id = randomInt(1000, 9999);
  const title = `${randomWord()} ${randomWord()}`;
  const artistName = `${randomWord()} ${randomWord()}`;
  const albumTitle = `${randomWord()} ${randomWord()}`;
  const duration = randomInt(120, 600);
  const bpm = randomInt(60, 180);
  const rank = randomInt(0, 1000000);

  return {
    id,
    readable: Math.random() > 0.2,
    title,
    title_short: title.split(" ")[0],
    title_version: "Original",
    isrc: `ISRC${randomInt(1000000, 9999999)}`,
    link: `https://www.deezer.com/track/${id}`,
    share: `https://share.deezer.com/track/${id}`,
    duration,
    track_position: randomInt(1, 20),
    disk_number: randomInt(1, 3),
    rank,
    release_date: randomDate(),
    explicit_lyrics: Math.random() > 0.7,
    explicit_content_lyrics: randomInt(0, 2),
    explicit_content_cover: randomInt(0, 2),
    preview: `https://cdn.preview.com/${id}`,
    bpm,
    gain: Math.random() * 10,
    available_countries: ["US", "TR", "DE", "FR", "UK"],
    contributors: [],
    md5_image: Math.random().toString(36).substring(2, 18),
    track_token: Math.random().toString(36).substring(2, 12),
    artist: {
      id: randomInt(100, 999),
      name: artistName,
      link: `https://www.deezer.com/artist/${id}`,
      share: `https://share.deezer.com/artist/${id}`,
      picture: `https://picsum.photos/seed/artist${id}/400/400`,
      picture_small: `https://picsum.photos/seed/artist${id}/100/100`,
      picture_medium: `https://picsum.photos/seed/artist${id}/250/250`,
      picture_big: `https://picsum.photos/seed/artist${id}/500/500`,
      picture_xl: `https://picsum.photos/seed/artist${id}/800/800`,
      nb_album: randomInt(1, 20),
      nb_fan: randomInt(1000, 1000000),
      radio: Math.random() > 0.5,
      tracklist: `https://api.deezer.com/artist/${id}/top?limit=50`,
      type: "artist",
    },
    album: {
      id: randomInt(2000, 9999),
      title: albumTitle,
      upc: `UPC${randomInt(1000000000, 9999999999)}`,
      link: `https://www.deezer.com/album/${id}`,
      share: `https://share.deezer.com/album/${id}`,
      cover: `https://picsum.photos/seed/album${id}/400/400`,
      cover_small: `https://picsum.photos/seed/album${id}/100/100`,
      cover_medium: `https://picsum.photos/seed/album${id}/250/250`,
      cover_big: `https://picsum.photos/seed/album${id}/500/500`,
      cover_xl: `https://picsum.photos/seed/album${id}/800/800`,
      md5_image: Math.random().toString(36).substring(2, 18),
      genre_id: randomInt(1, 10),
      genres: { data: [] },
      label: randomChoice(["Sony", "Universal", "Warner", "Atlantic"]),
      nb_tracks: randomInt(8, 20),
      duration: randomInt(1200, 4800),
      fans: randomInt(1000, 500000),
      release_date: randomDate(),
      record_type: randomChoice(["album", "single", "ep"]),
      available: Math.random() > 0.2,
      tracklist: `https://api.deezer.com/album/${id}/tracks`,
      explicit_lyrics: Math.random() > 0.7,
      explicit_content_lyrics: randomInt(0, 2),
      explicit_content_cover: randomInt(0, 2),
      contributors: [],
      artist: {} as any, // prevent circular reference
      type: "album",
      tracks: { data: [] },
    },
    type: "track",
  };
}

// ----------- RUN TESTS ------------

// insertTrackTest();
// getTrackByIdTest();
// getTrackByTitleTest();
// getAllTracksTest();
// getTracksWithPaginationTest();
