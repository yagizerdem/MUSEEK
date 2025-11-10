import { DeezerGenre } from "../model/deezerReturnTypes/deezerGenre.js";
import { ServiceResponse } from "../model/serviceResponse/serviceResponse.js";
import {
  insertGenre,
  getAllGenres,
  updateGenreById,
} from "../service/genreService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

async function insertGenreTest() {
  const genre: DeezerGenre = {
    id: 134,
    name: "Dance",
    picture: "https://api.deezer.com/genre/132/image",
    picture_small: "https://api.deezer.com/genre/132/image_small",
    picture_medium: "https://api.deezer.com/genre/132/image_medium",
    picture_big: "https://api.deezer.com/genre/132/image_big",
    picture_xl: "https://api.deezer.com/genre/132/image_xl",
    type: "genre",
  };

  var response: ServiceResponse<DeezerGenre> = await executeServiceSafe({
    fun: insertGenre,
    args: [{ genre }],
  });

  console.log(response);
}

async function getAllGenresTest() {
  const response = await executeServiceSafe({
    fun: getAllGenres,
    args: [],
  });

  console.log(response);
}

async function updateGenreByIdTest() {
  const genre: DeezerGenre = {
    id: 134,
    name: "Rock",
    picture: "https://api.deezer.com/genre/132/image",
    picture_small: "https://api.deezer.com/genre/132/image_small",
    picture_medium: "https://api.deezer.com/genre/132/image_medium",
    picture_big: "https://api.deezer.com/genre/132/image_big",
    picture_xl: "https://api.deezer.com/genre/132/image_xl",
    type: "genre",
  };

  var response: ServiceResponse<DeezerGenre> = await executeServiceSafe({
    fun: updateGenreById,
    args: [{ genre }],
  });

  console.log(response);
}

// insertGenreTest();
// getAllGenresTest();
updateGenreByIdTest();
