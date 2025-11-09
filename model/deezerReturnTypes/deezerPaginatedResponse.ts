export interface DeezerPaginatedResponse<T> {
  data: T[];
  total: number;
  next?: string;
}
