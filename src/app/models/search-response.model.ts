import { SearchItem } from './search-item.model';

export interface SearchResponse {
  kind: string;
  // not sure if etag is string, it may be base64
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}
