import { NameSpace } from './../const';
import {combineReducers} from '@reduxjs/toolkit';
import { videosData } from './videos-data/videos-data';
import { appProcess } from './app-process/app-process';
import { channelData } from './channel-data/channel-data';

export const rootReducer = combineReducers({
  [NameSpace.Videos]: videosData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Channel]: channelData.reducer
});
