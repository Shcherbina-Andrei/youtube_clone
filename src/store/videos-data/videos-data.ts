import {RelatedVideos} from './../../types/related-videos';
import {VideoDetailResponse} from './../../types/video-detail';
import { fetchFeedVideosAction, fetchCurrentVideoAction, fetchRelatedVideosAction, fetchSearchVideosAction } from './../api-actions';
import {createSlice} from '@reduxjs/toolkit';
import {SuggestedItems} from './../../types/suggested-items';
import {NameSpace} from '../../const';

type VideosData = {
  feedVideos: SuggestedItems | null;
  searchedVideos: SuggestedItems | null;
  currentVideo: VideoDetailResponse | null;
  currentRelatedVideos: RelatedVideos | null;
};

const initialState: VideosData = {
  feedVideos: null,
  searchedVideos: null,
  currentVideo: null,
  currentRelatedVideos: null
};

export const videosData = createSlice(
  {
    name: NameSpace.Videos,
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchFeedVideosAction.fulfilled, (state, action) => {
          state.feedVideos = action.payload;
        })
        .addCase(fetchCurrentVideoAction.fulfilled, (state, action) => {
          state.currentVideo = action.payload;
        })
        .addCase(fetchRelatedVideosAction.fulfilled, (state, action) => {
          state.currentRelatedVideos = action.payload;
        })
        .addCase(fetchSearchVideosAction.fulfilled, (state, action) => {
          state.searchedVideos = action.payload;
        });
    }
  }
);
