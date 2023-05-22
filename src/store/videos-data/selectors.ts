import { NameSpace } from '../../const';
import { State } from './../../types/state';

export const getFeedVideos = (state: State) =>
  state[NameSpace.Videos].feedVideos;

export const getSearchVideos = (state: State) =>
  state[NameSpace.Videos].searchedVideos;

export const getCurrentVideo = (state: State) =>
  state[NameSpace.Videos].currentVideo;

export const getRelatedVideos = (state: State) =>
  state[NameSpace.Videos].currentRelatedVideos;
