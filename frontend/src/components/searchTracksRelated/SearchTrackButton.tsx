import type { Track } from "../../../../shared/models/track";
import type { ApiResponse } from "../../../../shared/response/ApiResponse";
import type { DeezerListResponse } from "../../../../shared/response/DeezerListResponse";
import { useSearchTracks } from "../../context/SearchTracksContext";
import { ModernButton } from "../../ui/ModernButton";

function SearchTrackButton() {
  const { query, tracks, pageSize, setTracks } = useSearchTracks();

  function handleSearch(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    fetchTracks();
  }

  async function fetchTracks() {
    try {
      //   const apiResponse: ApiResponse<DeezerListResponse<Track>> =
      //     await window.network.SearchTracks({
      //       query,
      //       offset: 0,
      //       limit: pageSize,
      //     });

      console.log(apiResponse);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  }
  return (
    <ModernButton
      text="Search"
      className={`
        ml-4
        hover:bg-[var(--clr-surface-a30)]
        cursor-pointer`}
      onMouseUp={handleSearch}
    />
  );
}

export { SearchTrackButton };
