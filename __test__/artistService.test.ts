import { DeezerArtist } from "../model/deezerReturnTypes/deezerArtist.js";
import {
  insertArtist,
  getArtistById,
  getArtistByName,
  getAllArtists,
  getArtistsWithPagination,
} from "../service/artistService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

// ----------- TESTS ------------

async function insertArtistTest() {
  const artists: DeezerArtist[] = [];
  for (let i = 0; i < 5; i++) {
    const artist = createRandomArtist();
    artists.push(artist);
  }

  for (const i in artists) {
    const artist = artists[i];
    const payload = await executeServiceSafe({
      fun: insertArtist,
      args: [{ artist }],
    });

    console.log(`Index ${i}, Inserted Artist:`, payload);
    console.log("-".repeat(50));
  }
}

async function getArtistByIdTest() {
  const testId = 564;
  const payload = await executeServiceSafe({
    fun: getArtistById,
    args: [{ id: testId }],
  });
  console.log(payload);
}

async function getArtistByNameTest() {
  const testName = "Echo Fire";
  const payload = await executeServiceSafe({
    fun: getArtistByName,
    args: [{ name: testName }],
  });
  console.log(payload);
}

async function getAllArtistsTest() {
  const payload = await executeServiceSafe({
    fun: getAllArtists,
    args: [],
  });
  console.log(payload);
}

async function getArtistsWithPaginationTest() {
  const payload = await executeServiceSafe({
    fun: getArtistsWithPagination,
    args: [{ index: 0, limit: 5, orderBy: "nb_fan", orderDir: "ASC" }],
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

function createRandomArtist(): DeezerArtist {
  const id = randomInt(100, 999);
  const name = `${randomWord()} ${randomWord()}`;
  const nb_album = randomInt(1, 20);
  const nb_fan = randomInt(1000, 500000);

  return {
    id,
    name,
    link: `https://www.deezer.com/artist/${id}`,
    share: `https://share.deezer.com/artist/${id}`,
    picture: `https://picsum.photos/seed/artist${id}/400/400`,
    picture_small: `https://picsum.photos/seed/artist${id}/100/100`,
    picture_medium: `https://picsum.photos/seed/artist${id}/250/250`,
    picture_big: `https://picsum.photos/seed/artist${id}/500/500`,
    picture_xl: `https://picsum.photos/seed/artist${id}/800/800`,
    nb_album,
    nb_fan,
    radio: Math.random() > 0.5,
    tracklist: `https://api.deezer.com/artist/${id}/top?limit=50`,
    type: "artist",
  };
}

// ----------- RUN TESTS ------------

//insertArtistTest();
//getArtistByIdTest();
//getArtistByNameTest();
// getAllArtistsTest();
// getArtistsWithPaginationTest();
