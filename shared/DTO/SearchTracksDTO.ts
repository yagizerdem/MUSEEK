interface SearchTracksDTO {
  query: string;
  strict?: boolean; // default exact match search
  offset?: number; // default cursor position 0
  limit?: number; // default page size
}

export type { SearchTracksDTO };
