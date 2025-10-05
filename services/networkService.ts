import { deezerApi } from "../utils/axios";
import { requestWithRetry } from "../utils/httpUtils";

async function GetArtistById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/artist/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetAlbumById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/album/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetEpisodeById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/episode/${id}`),
      3,
      500
    );
    const payload = response.data;

    console.log(payload);

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetGenreById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/genre/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetPlaylist(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/playlist/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetPodcastById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/podcast/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetRadioById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/radio/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function GetTrackById(id: number): Promise<any> {
  try {
    const response = await requestWithRetry(
      () => deezerApi.get(`/track/${id}`),
      3,
      500
    );
    const payload = response.data;

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export {
  GetArtistById,
  GetAlbumById,
  GetEpisodeById,
  GetGenreById,
  GetPlaylist,
  GetPodcastById,
  GetRadioById,
  GetTrackById,
};
