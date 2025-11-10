import { DeezerArtist } from "../model/deezerReturnTypes/deezerArtist.js";
import {
  ServiceResponse,
  serviceResponseSuccess,
} from "../model/serviceResponse/serviceResponse.js";
import {
  insertArtist as insertArtistToDb,
  getArtistById as getArtistByIdFromDb,
  getArtistByName as getArtistByNameFromDb,
  getAllArtist as getAllArtistsFromDb,
  getArtistsWithPagination as getArtistsWithPaginationFromDb,
  updateArtistById as updateArtistByIdInDb,
} from "../repository/artistRepository.js";

export async function insertArtist({
  artist,
}: {
  artist: DeezerArtist;
}): Promise<ServiceResponse<DeezerArtist>> {
  await insertArtistToDb({ artist });

  return serviceResponseSuccess({
    data: artist,
    message: "Artist inserted successfully",
  });
}

export async function updateArtistById({
  artist,
}: {
  artist: DeezerArtist;
}): Promise<ServiceResponse<DeezerArtist>> {
  await updateArtistByIdInDb({ artist });

  return serviceResponseSuccess({
    data: artist,
    message: "Artist updated successfully",
  });
}

export async function getArtistById({
  id,
}: {
  id: number;
}): Promise<ServiceResponse<DeezerArtist | null>> {
  const artist = await getArtistByIdFromDb({ id });

  return serviceResponseSuccess({
    data: artist,
    message: "Artist retrieved successfully",
  });
}

export async function getArtistByName({
  name,
}: {
  name: string;
}): Promise<ServiceResponse<DeezerArtist | null>> {
  const artist = await getArtistByNameFromDb({ name });

  return serviceResponseSuccess({
    data: artist,
    message: "Artist retrieved successfully",
  });
}

export async function getAllArtists(): Promise<
  ServiceResponse<DeezerArtist[]>
> {
  const artists = await getAllArtistsFromDb();

  return serviceResponseSuccess({
    data: artists,
    message: "Artists retrieved successfully",
  });
}

export async function getArtistsWithPagination({
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
}): Promise<ServiceResponse<DeezerArtist[]>> {
  const artists = await getArtistsWithPaginationFromDb({
    index,
    limit,
    orderBy,
    orderDir,
    filterField,
    filterValue,
    matchMode,
  });

  return serviceResponseSuccess({
    data: artists,
    message: "Artists retrieved successfully",
  });
}
