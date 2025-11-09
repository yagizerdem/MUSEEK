import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";
import { ServiceResponse } from "../model/serviceResponse/serviceResponse.js";
import { getAlbumById } from "../service/deezerService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

async function testGetAlbumById() {
  const tempId = "23";

  const payload: ServiceResponse<DeezerAlbum> = await executeServiceSafe({
    fun: getAlbumById,
    args: [{ id: tempId }],
  });

  console.log(payload.data.artist.name, payload);
}

testGetAlbumById();
