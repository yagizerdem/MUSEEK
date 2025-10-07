import { useEffect } from "react";
import type { ApiResponse } from "../../../shared/response/ApiResponse";
import type { DeezerListResponse } from "../../../shared/response/DeezerListResponse";
import type { Track } from "../../../shared/models/track";
import { ModernTextInput } from "../ui/ModernTextInput";

function SearchTracksPage() {
  return (
    <div className="w-full h-full bg-[var(--clr-surface-a0)] overflow-x-hidden">
      <div className="w-1/2 mx-auto h-16   flex items-center px-4">
        <ModernTextInput className="h-8 min-w-32 " />
      </div>
    </div>
  );
}

export { SearchTracksPage };
