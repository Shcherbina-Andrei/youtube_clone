import {Thumbnails} from './thumbnails';

export type Video = {
  kind: string;
  id: Id;
  snippet: VideoDetails;
}

type VideoDetails = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

type Id = {
  kind: string;
  videoId: string;
};
