// src/types/preload.d.ts
import type { SearchTracksDTO } from "../../shared/DTO/SearchTracksDTO";
import type { ApiResponse } from "../../shared/response/ApiResponse";
import type { DeezerListResponse } from "../../shared/response/DeezerListResponse";
import type { Track } from "../../shared/models/track";

export {};

declare global {
  interface Window {
    network: {
      foo: () => Promise<string>;
      SearchTracks: (
        params: SearchTracksDTO
      ) => Promise<ApiResponse<DeezerListResponse<Track>>>;
    };
  }
}
