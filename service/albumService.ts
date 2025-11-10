import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";
import {
  ServiceResponse,
  serviceResponseSuccess,
} from "../model/serviceResponse/serviceResponse.js";
import {
  insertAlbum as insertAlbumToDb,
  getAlbumById as getAlbumByIdFromDb,
  getAlbumByTitle as getAlbumByTitleFromDb,
  getAllAlbum as getAllAlbumsFromDb,
  getAlbumsWithPagination as getAlbumsWithPaginationFromDb,
} from "../repository/albumRepository.js";

export async function insertAlbum({
  album,
}: {
  album: DeezerAlbum;
}): Promise<ServiceResponse<DeezerAlbum>> {
  await insertAlbumToDb({ album });

  return serviceResponseSuccess({
    data: album,
    message: "Album inserted successfully",
  });
}

export async function getAlbumById({
  id,
}: {
  id: number;
}): Promise<ServiceResponse<DeezerAlbum | null>> {
  const album = await getAlbumByIdFromDb({ id });
  return serviceResponseSuccess({
    data: album,
    message: "Album retrieved successfully",
  });
}

export async function getAlbumByTitle({
  title,
}: {
  title: string;
}): Promise<ServiceResponse<DeezerAlbum | null>> {
  const album = await getAlbumByTitleFromDb({ title });
  return serviceResponseSuccess({
    data: album,
    message: "Album retrieved successfully",
  });
}

export async function getAllAlbums(): Promise<ServiceResponse<DeezerAlbum[]>> {
  const albums = await getAllAlbumsFromDb();
  return serviceResponseSuccess({
    data: albums,
    message: "Albums retrieved successfully",
  });
}

export async function getAlbumsWithPagination({
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
}): Promise<ServiceResponse<DeezerAlbum[]>> {
  const albums = await getAlbumsWithPaginationFromDb({
    index,
    limit,
    orderBy,
    orderDir,
    filterField,
    filterValue,
    matchMode,
  });
  return serviceResponseSuccess({
    data: albums,
    message: "Albums retrieved successfully",
  });
}
