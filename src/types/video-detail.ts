export type VideoDetailResponse = {
  kind: string;
  items: VideoDetail[];
  pageInfo: PageInfo;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type VideoDetail = {
  kind: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
};

type Statistics = {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
};

type ContentDetails = {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  projection: string;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
};

type Localized = {
  title: string;
  description: string;
};

type Thumbnails = {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
};

type Default = {
  url: string;
  width: number;
  height: number;
};
