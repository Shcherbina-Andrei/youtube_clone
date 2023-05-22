import { Thumbnails } from './thumbnails';

export type ChannelResponse = {
  kind: string;
  pageInfo: PageInfo;
  items: Channel[];
};

export type Channel = {
  kind: string;
  id: Id;
  snippet: ChannelDetails;
  statistics?: Statistics;
};

type ChannelDetails = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

type Statistics = {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
};

type Id = {
  kind: string;
  channelId: string;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};
