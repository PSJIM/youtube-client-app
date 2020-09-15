import { SearchResponseThumbnails } from './search-response-thumbnails.model';
import { SearchResponseStatistics } from './search-response-statistics.model';

export interface SearchItem {
  kind: string;
  // again - not sure is etag is string, it may be base64 or other type
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: SearchResponseThumbnails;
  };
  statistics: SearchResponseStatistics;
}
