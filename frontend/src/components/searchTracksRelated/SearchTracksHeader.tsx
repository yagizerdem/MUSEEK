import { SearchTrackButton } from "./SearchTrackButton";
import { SearchTracksBar } from "./SearchTracksBar";

function SearchTracksHeader() {
  return (
    <div
      className={`
    lg:w-1/2
    w-96
     mx-auto 
     h-16   
     flex 
    items-center 
    px-4
    py-10
    `}
    >
      <SearchTracksBar />
      <SearchTrackButton />
    </div>
  );
}

export { SearchTracksHeader };
