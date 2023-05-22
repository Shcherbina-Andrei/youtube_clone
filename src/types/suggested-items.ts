import { Channel } from './channel';
import { Video } from './video';

export type SuggestedItems = {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: (Video & Channel)[];
};

export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};
