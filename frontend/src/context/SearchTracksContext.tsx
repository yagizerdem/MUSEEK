import { createContext, useContext, useState, type ReactNode } from "react";
import type { Track } from "../../../shared/models/track";

interface SearchTracksContextType {
  query: string;
  tracks: Track[];
  isLoading: boolean;
  setQuery: (q: string) => void;
  setTracks: (tracks: Track[]) => void;
  setIsLoading: (loading: boolean) => void;
}

const SearchTracksContext = createContext<SearchTracksContextType | undefined>(
  undefined
);

export const SearchTracksProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SearchTracksContext.Provider
      value={{ query, tracks, isLoading, setQuery, setTracks, setIsLoading }}
    >
      {children}
    </SearchTracksContext.Provider>
  );
};

export const useSearchTracks = (): SearchTracksContextType => {
  const ctx = useContext(SearchTracksContext);
  if (!ctx) {
    throw new Error(
      "useSearchTracks must be used within a SearchTracksProvider"
    );
  }
  return ctx;
};
