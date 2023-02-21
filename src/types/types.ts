export type RootObject = {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export type Item = {
  kind: string;
  id: Id;
  snippet: Snippet;
}

export type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export type Thumbnails = {
  default: Default;
  medium: Default;
  high: Default;
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
