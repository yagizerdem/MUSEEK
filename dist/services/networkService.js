"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistById = GetArtistById;
exports.GetAlbumById = GetAlbumById;
exports.GetEpisodeById = GetEpisodeById;
exports.GetGenreById = GetGenreById;
exports.GetPlaylist = GetPlaylist;
exports.GetPodcastById = GetPodcastById;
exports.GetRadioById = GetRadioById;
exports.GetTrackById = GetTrackById;
const axios_1 = require("../utils/axios");
const httpUtils_1 = require("../utils/httpUtils");
async function GetArtistById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/artist/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetAlbumById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/album/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetEpisodeById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/episode/${id}`), 3, 500);
        const payload = response.data;
        console.log(payload);
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetGenreById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/genre/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetPlaylist(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/playlist/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetPodcastById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/podcast/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetRadioById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/radio/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
async function GetTrackById(id) {
    try {
        const response = await (0, httpUtils_1.requestWithRetry)(() => axios_1.deezerApi.get(`/track/${id}`), 3, 500);
        const payload = response.data;
        return payload;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
//# sourceMappingURL=networkService.js.map