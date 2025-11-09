import { ServiceError } from "../errors/ServiceError.js";
import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";
import {
  ServiceResponse,
  serviceResponseSuccess,
} from "../model/serviceResponse/serviceResponse.js";
import { logMessageWrapper } from "../utils/logMessageWrapper.js";

const baseUrl = "https://api.deezer.com";

export async function getAlbumById({
  id,
}: {
  id: string;
}): Promise<ServiceResponse<DeezerAlbum>> {
  const fullUrl = `${baseUrl}/album/${id}`;
  const response = await fetch(fullUrl);

  if (!response.ok) {
    throw new ServiceError("Failed to fetch album data from Deezer API", {
      isOperational: false,
      logMessage: logMessageWrapper(
        `HTTP ${response.status} ${response.statusText} while fetching album ${id} from ${fullUrl}`
      ),
    });
  }

  const data = await response.json();

  if (data.error) {
    throw new ServiceError("Album not found", {
      isOperational: true,
      logMessage: logMessageWrapper(
        `Deezer API error for album ${id}: ${JSON.stringify(data.error)}`
      ),
    });
  }

  return serviceResponseSuccess({
    data: data as DeezerAlbum,
    message: "Album fetched successfully",
  });
}
