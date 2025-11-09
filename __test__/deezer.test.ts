import { getAlbumById } from "../service/deezerService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";

async function testGetAlbumById() {
  const tempId = "23";

  const payload = await executeServiceSafe({
    fun: getAlbumById,
    args: [{ id: tempId }],
  });

  console.log(payload);
}

testGetAlbumById();
