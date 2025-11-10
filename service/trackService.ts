import { DeezerTrack } from "../model/deezerReturnTypes/deezerTrack.js";
import {
  ServiceResponse,
  serviceResponseSuccess,
} from "../model/serviceResponse/serviceResponse.js";
import {
  insertTrack as insertTrackToDb,
  getTrackById as getTrackByIdFromDb,
  getTrackByTitle as getTrackByTitleFromDb,
  getAllTrack as getAllTracksFromDb,
  getTracksWithPagination as getTracksWithPaginationFromDb,
  updateTrackById as updateTrackByIdInDb,
} from "../repository/trackRepository.js";

export async function insertTrack({
  track,
}: {
  track: DeezerTrack;
}): Promise<ServiceResponse<DeezerTrack>> {
  await insertTrackToDb({ track });

  return serviceResponseSuccess({
    data: track,
    message: "Track inserted successfully",
  });
}

export async function updateTrackById({
  track,
}: {
  track: DeezerTrack;
}): Promise<ServiceResponse<DeezerTrack>> {
  await updateTrackByIdInDb({ track });

  return serviceResponseSuccess({
    data: track,
    message: "Track updated successfully",
  });
}

export async function getTrackById({
  id,
}: {
  id: number;
}): Promise<ServiceResponse<DeezerTrack | null>> {
  const track = await getTrackByIdFromDb({ id });

  return serviceResponseSuccess({
    data: track,
    message: "Track retrieved successfully",
  });
}

export async function getTrackByTitle({
  title,
}: {
  title: string;
}): Promise<ServiceResponse<DeezerTrack[]>> {
  const tracks = await getTrackByTitleFromDb({ title });

  return serviceResponseSuccess({
    data: tracks,
    message: "Tracks retrieved successfully",
  });
}

export async function getAllTracks(): Promise<ServiceResponse<DeezerTrack[]>> {
  const tracks = await getAllTracksFromDb();

  return serviceResponseSuccess({
    data: tracks,
    message: "Tracks retrieved successfully",
  });
}

export async function getTracksWithPagination({
  index,
  limit,
  orderBy = "rank",
  orderDir = "DESC",
  filterField,
  filterValue,
  matchMode = "substring",
}: {
  index: number;
  limit: number;
  orderBy?: keyof DeezerTrack | string;
  orderDir?: "ASC" | "DESC";
  filterField?: keyof DeezerTrack | string;
  filterValue?: string;
  matchMode?: "substring" | "exact";
}): Promise<ServiceResponse<DeezerTrack[]>> {
  const tracks = await getTracksWithPaginationFromDb({
    index,
    limit,
    orderBy,
    orderDir,
    filterField,
    filterValue,
    matchMode,
  });

  return serviceResponseSuccess({
    data: tracks,
    message: "Tracks retrieved successfully",
  });
}
