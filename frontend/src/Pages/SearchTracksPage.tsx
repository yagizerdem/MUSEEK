import { Fragment } from "react/jsx-runtime";
import { SearchTracksHeader } from "../components/searchTracksRelated/SearchTracksHeader";
import { useSearchTracks } from "../context/SearchTracksContext";
import { LoadingPanel } from "../ui/LoadingPanel";

function SearchTracksPage() {
  const { isLoading } = useSearchTracks();

  return (
    <div className="relative w-full h-full bg-[var(--clr-surface-a0)] overflow-x-hidden">
      <Fragment>
        {isLoading && (
          <LoadingPanel opacity={80} spinnerColor="#fff" spinnerSize={100} />
        )}
        <div className="z-0 relative w-full h-full  ">
          <SearchTracksHeader />
        </div>
      </Fragment>
    </div>
  );
}

export { SearchTracksPage };
