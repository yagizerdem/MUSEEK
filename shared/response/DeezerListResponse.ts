interface DeezerListResponse<T> {
  data: T[];
  total: number;
  next?: string;
  prev?: string;
}

export type { DeezerListResponse };
