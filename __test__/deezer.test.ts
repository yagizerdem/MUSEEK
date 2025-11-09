import { get } from "http";
import { DeezerAlbum } from "../model/deezerReturnTypes/deezerAlbum.js";
import { DeezerArtist } from "../model/deezerReturnTypes/deezerArtist.js";
import { DeezerPaginatedResponse } from "../model/deezerReturnTypes/deezerPaginatedResponse.js";
import { ServiceResponse } from "../model/serviceResponse/serviceResponse.js";
import {
  getAlbumById,
  getAlbumFuzzySearchByAlbumTitle,
  getArtistById,
  getArtistFuzzySearchByArtistName,
  getTrackById,
  getTrackFuzzySearchByTrackTitle,
} from "../service/deezerService.js";
import { executeServiceSafe } from "../utils/executeServiceSafe.js";
import { DeezerTrack } from "../model/deezerReturnTypes/deezerTrack.js";

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

async function tesgetArtistById() {
  const tempId = "27";

  const payload: ServiceResponse<DeezerArtist> = await executeServiceSafe({
    fun: getArtistById,
    args: [{ id: tempId }],
  });

  console.log(payload.data.name, payload);
}

async function testgetArtistFuzzySearchByArtistName() {
  const payload: ServiceResponse<DeezerPaginatedResponse<DeezerArtist>> =
    await executeServiceSafe({
      fun: getArtistFuzzySearchByArtistName,
      args: [{ artistName: "tom", index: 0, limit: 3 }],
    });

  console.log(payload.data);
}

async function getTrackByIdTest() {
  const tempId = "3135556";

  const payload: ServiceResponse<any> = await executeServiceSafe({
    fun: getTrackById,
    args: [{ id: tempId }],
  });
  console.log(payload.data.title, payload);
}

async function getTrackFuzzySearchByTitleTest() {
  const payload: ServiceResponse<DeezerPaginatedResponse<DeezerTrack>> =
    await executeServiceSafe({
      fun: getTrackFuzzySearchByTrackTitle,
      args: [{ trackTitle: "believer", index: 0, limit: 5 }],
    });

  console.log(payload.data.data[0]);
}

// testGetAlbumById();
// testDeezerPaginatedAlbumResponse();
// testgetArtistFuzzySearchByArtistName();
//getTrackFuzzySearchByTitleTest();
