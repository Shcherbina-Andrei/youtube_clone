import { Video } from './video';

export type RelatedVideos = {
  kind: string;
  items: (Video)[];
};
