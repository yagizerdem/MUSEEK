-- CreateTable
CREATE TABLE "Artist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "share" TEXT,
    "picture" TEXT,
    "picture_small" TEXT,
    "picture_medium" TEXT,
    "picture_big" TEXT,
    "picture_xl" TEXT,
    "radio" BOOLEAN DEFAULT false,
    "tracklist" TEXT,
    "type" TEXT
);

-- CreateTable
CREATE TABLE "Contributor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "share" TEXT,
    "picture" TEXT,
    "picture_small" TEXT,
    "picture_medium" TEXT,
    "picture_big" TEXT,
    "picture_xl" TEXT,
    "radio" BOOLEAN DEFAULT false,
    "tracklist" TEXT,
    "type" TEXT,
    "role" TEXT,
    "artistId" INTEGER,
    "albumId" INTEGER,
    "trackId" INTEGER,
    CONSTRAINT "Contributor_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Contributor_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Contributor_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "picture" TEXT,
    "picture_small" TEXT,
    "picture_medium" TEXT,
    "picture_big" TEXT,
    "picture_xl" TEXT
);

-- CreateTable
CREATE TABLE "Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "upc" TEXT,
    "link" TEXT,
    "share" TEXT,
    "cover" TEXT,
    "cover_small" TEXT,
    "cover_medium" TEXT,
    "cover_big" TEXT,
    "cover_xl" TEXT,
    "md5_image" TEXT,
    "genre_id" INTEGER,
    "label" TEXT,
    "nb_tracks" INTEGER,
    "duration" INTEGER,
    "fans" INTEGER,
    "release_date" TEXT,
    "record_type" TEXT,
    "available" BOOLEAN DEFAULT true,
    "tracklist" TEXT,
    "explicit_lyrics" BOOLEAN DEFAULT false,
    "explicit_content_lyrics" INTEGER DEFAULT 0,
    "explicit_content_cover" INTEGER DEFAULT 0,
    "type" TEXT,
    "artistId" INTEGER,
    CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "readable" BOOLEAN DEFAULT true,
    "title" TEXT NOT NULL,
    "title_short" TEXT,
    "title_version" TEXT,
    "isrc" TEXT,
    "link" TEXT,
    "share" TEXT,
    "duration" INTEGER,
    "track_position" INTEGER,
    "disk_number" INTEGER,
    "rank" INTEGER,
    "release_date" TEXT,
    "explicit_lyrics" BOOLEAN DEFAULT false,
    "explicit_content_lyrics" INTEGER DEFAULT 0,
    "explicit_content_cover" INTEGER DEFAULT 0,
    "preview" TEXT,
    "bpm" REAL DEFAULT 0,
    "gain" REAL DEFAULT 0,
    "md5_image" TEXT,
    "track_token" TEXT,
    "type" TEXT,
    "available_countries" JSONB,
    "artistId" INTEGER,
    "albumId" INTEGER,
    CONSTRAINT "Track_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlbumGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlbumGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlbumGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumGenres_AB_unique" ON "_AlbumGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumGenres_B_index" ON "_AlbumGenres"("B");
