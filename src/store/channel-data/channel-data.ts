import { SuggestedItems } from './../../types/suggested-items';
import { fetchCurrentChannelAction, fetchChannelVideosAction } from './../api-actions';
import { NameSpace } from './../../const';
import { createSlice } from '@reduxjs/toolkit';
import { ChannelResponse } from './../../types/channel';

type ChannelData = {
  currentChannel: ChannelResponse | null;
  channelVideos: SuggestedItems | null;
};

const initialState: ChannelData = {
  currentChannel: null,
  channelVideos: null
};

export const channelData = createSlice(
  {
    name: NameSpace.Channel,
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentChannelAction.fulfilled, (state, action) => {
          state.currentChannel = action.payload;
        })
        .addCase(fetchChannelVideosAction.fulfilled, (state, action) => {
          state.channelVideos = action.payload;
        });
    }
  }
);
