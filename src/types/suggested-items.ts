import { Channel } from './channel';
import { Video } from './video';

export type SuggestedItems = {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: (Video & Channel)[];
}

export type Default = {
  url: string;
  width?: number;
  height?: number;
}

export type Id = {
  kind: string;
  channelId?: string;
  videoId?: string;
  playlistId?: string;
}

export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
}
