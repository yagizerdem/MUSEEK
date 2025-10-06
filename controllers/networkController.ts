import type { SearchTracksDTO } from "../shared/DTO/SearchTracksDTO";
import networkService from "../services/networkService";
import { ServiceResponse } from "../shared/response/ServiceResponse";
import type { DeezerListResponse } from "../shared/response/DeezerListResponse";
import type { Track } from "../shared/models/track";
import { ApiResponse } from "../shared/response/ApiResponse";

const foo = () => "bar"; // test function

async function SearchTracks({
  query,
  strict = true, // default exact match search
  offset = 0, // default cursor position 0
  limit = 10, // default page size
}: SearchTracksDTO): Promise<ApiResponse<DeezerListResponse<Track>>> {
  try {
    const serviceResponse: ServiceResponse<DeezerListResponse<Track>> =
      await networkService.SearchTracks({
        query,
        strict,
        offset,
        limit,
      });

    return ApiResponse.ok<DeezerListResponse<Track>>(
      serviceResponse.data,
      serviceResponse.message
    );
  } catch (error) {
    console.error(error);
    return ApiResponse.fail("Failed to search tracks", error);
  }
}

export { foo, SearchTracks };

export default {
  foo,
  SearchTracks,
};
