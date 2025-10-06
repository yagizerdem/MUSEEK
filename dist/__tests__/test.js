"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../envLoader");
const prismaClientConfig_1 = require("../dataAccess/prismaClientConfig");
(async () => {
    await prismaClientConfig_1.prisma.$connect();
    const album = {
        id: 1,
        title: "Random Access Memories",
        upc: "888837168617",
        link: "https://www.deezer.com/album/1",
        share: "https://www.deezer.com/share/1",
        cover: "https://cdns-images.dzcdn.net/images/cover/abc123/500x500.jpg",
        cover_small: "https://cdns-images.dzcdn.net/images/cover/abc123/56x56.jpg",
        cover_medium: "https://cdns-images.dzcdn.net/images/cover/abc123/250x250.jpg",
        cover_big: "https://cdns-images.dzcdn.net/images/cover/abc123/500x500.jpg",
        cover_xl: "https://cdns-images.dzcdn.net/images/cover/abc123/1000x1000.jpg",
        md5_image: "abc123md5",
        genre_id: 123,
        label: "Columbia Records",
        nb_tracks: 13,
        duration: 4500,
        fans: 500000,
        release_date: "2013-05-17",
        record_type: "album",
        available: true,
        tracklist: "https://api.deezer.com/album/1/tracks",
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        type: "album",
    };
    await prismaClientConfig_1.prisma.album.create({
        data: Object.assign({}, album),
    });
})();
//# sourceMappingURL=test.js.map