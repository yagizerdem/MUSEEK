import { DeezerGenre } from "../model/deezerReturnTypes/deezerGenre.js";
import {
  ServiceResponse,
  serviceResponseSuccess,
} from "../model/serviceResponse/serviceResponse.js";
import {
  insertGenre as insertGenreToDb,
  getAllGenre as getAllGenresFromDb,
  updateGenreById as updateGenreByIdFromDb,
} from "../repository/genreRepository.js";

export async function insertGenre({
  genre,
}: {
  genre: DeezerGenre;
}): Promise<ServiceResponse<DeezerGenre>> {
  await insertGenreToDb({ genre });

  return serviceResponseSuccess({
    data: genre,
    message: "Genre inserted successfully",
  });
}

export async function getAllGenres(): Promise<ServiceResponse<DeezerGenre[]>> {
  const genres = await getAllGenresFromDb();
  return serviceResponseSuccess({
    data: genres,
    message: "Genres retrieved successfully",
  });
}

export async function updateGenreById({
  genre,
}: {
  genre: DeezerGenre;
}): Promise<ServiceResponse<DeezerGenre>> {
  await updateGenreByIdFromDb({ genre });

  return serviceResponseSuccess({
    data: genre,
    message: "Genre updated successfully",
  });
}
