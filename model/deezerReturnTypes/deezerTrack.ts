import { DeezerAlbum } from "./deezerAlbum.js";
import { DeezerArtist } from "./deezerArtist.js";
import { DeezerEntityType } from "./deezerEntityType.js";

export interface DeezerTrack {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  bpm: number;
  gain: number;
  available_countries: string[];
  contributors: DeezerArtist[];
  md5_image: string;
  track_token: string;
  artist: DeezerArtist;
  album: DeezerAlbum;
  type: DeezerEntityType;
}
