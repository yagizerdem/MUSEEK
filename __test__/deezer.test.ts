import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";
import { DeezerPaginatedResponse } from "../model/deezerReturnTypes/deezerPaginatedResponse.js";
import { ServiceResponse } from "../model/serviceResponse/serviceResponse.js";
import {
  getAlbumById,
  getAlbumFuzzySearchByAlbumTitle,
} from "../service/deezerService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

async function testGetAlbumById() {
  const tempId = "23";

  const payload: ServiceResponse<DeezerAlbum> = await executeServiceSafe({
    fun: getAlbumById,
    args: [{ id: tempId }],
  });

  console.log(payload.data.artist.name, payload);
}

async function testDeezerPaginatedAlbumResponse() {
  const payload: ServiceResponse<DeezerPaginatedResponse<DeezerAlbum>> =
    await executeServiceSafe({
      fun: getAlbumFuzzySearchByAlbumTitle,
      args: [{ albumName: "discovery", index: 10, limit: 2 }],
    });
}

// testGetAlbumById();
testDeezerPaginatedAlbumResponse();
