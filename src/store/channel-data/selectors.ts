import { NameSpace } from '../../const';
import { State } from './../../types/state';

export const getCurrentChannel = (state: State) => state[NameSpace.Channel].currentChannel;

export const getChannelVideos = (state: State) => state[NameSpace.Channel].channelVideos;
