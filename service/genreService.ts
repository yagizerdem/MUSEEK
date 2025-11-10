import { DeezerGenre } from "../model/deezerReturnTypes/deezerGenre.js";
import {
  ServiceResponse,
  serviceResponseSuccess,
} from "../model/serviceResponse/serviceResponse.js";
import {
  insertGenre as insertGenreToDb,
  getAllGenre as getAllGenresFromDb,
  updateGenreById as updateGenreByIdFromDb,
  getGenreById as getGenreByIdFromDb,
  getGenreByName as getGenreByNameFromDb,
  getGenresWithPagination as getGenresWithPaginationFromDb,
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

export async function getGenreById({
  id,
}: {
  id: number;
}): Promise<ServiceResponse<DeezerGenre | null>> {
  const genre = await getGenreByIdFromDb({ id });
  return serviceResponseSuccess({
    data: genre,
    message: "Genre retrieved successfully",
  });
}

export async function getGenreByName({
  name,
}: {
  name: string;
}): Promise<ServiceResponse<DeezerGenre | null>> {
  const genre = await getGenreByNameFromDb({ name });
  return serviceResponseSuccess({
    data: genre,
    message: "Genre retrieved successfully",
  });
}

export async function getGenresWithPagination({
  index = 0, // default offset
  limit = 10, // default limit
  orderBy,
  orderDir,
}: {
  index: number;
  limit: number;
  orderBy?: keyof DeezerGenre | string;
  orderDir?: "ASC" | "DESC";
}) {
  const genres = await getGenresWithPaginationFromDb({
    index,
    limit,
    orderBy,
    orderDir,
  });
  return serviceResponseSuccess({
    data: genres,
    message: "Genres retrieved successfully",
  });
}
