import { ChannelResponse } from './../types/channel';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RelatedVideos } from '../types/related-videos';
import { SuggestedItems } from '../types/suggested-items';
import { VideoDetailResponse } from '../types/video-detail';
import { AppDispatch } from '../types/state';
import { setDataIsLoading } from './app-process/app-process';

export const fetchFeedVideosAction = createAsyncThunk<
  SuggestedItems,
  string,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>(
  'videos/fetchFeedVideos',
  async (selectedCategory, { dispatch, extra: api }) => {
    dispatch(setDataIsLoading(true));
    const { data } = await api.get<SuggestedItems>(
      `/search?part=snippet&q=${selectedCategory}`,
    );
    dispatch(setDataIsLoading(false));
    return data;
  },
);

export const fetchSearchVideosAction = createAsyncThunk<
  SuggestedItems,
  string,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('videos/fetchSearchVideos', async (searchTerm, { dispatch, extra: api }) => {
  dispatch(setDataIsLoading(true));
  const { data } = await api.get<SuggestedItems>(
    `search?part=snippet&q=${searchTerm}`,
  );
  dispatch(setDataIsLoading(false));
  return data;
});

export const fetchCurrentVideoAction = createAsyncThunk<
  VideoDetailResponse | null,
  string,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('videos/fetchCurrentVideo', async (id, { dispatch, extra: api }) => {
  dispatch(setDataIsLoading(true));
  const { data } = await api.get<VideoDetailResponse>(
    `/videos?part=snippet,statistics&id=${id}`,
  );
  dispatch(setDataIsLoading(false));

  if (data.items.length === 0) {
    throw Error;
  }

  return data;
});

export const fetchRelatedVideosAction = createAsyncThunk<
  RelatedVideos,
  string,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('videos/fetchRelatedVideos', async (id, { extra: api }) => {
  const { data } = await api.get<RelatedVideos>(
    `/search?part=snippet&relatedToVideoId${id}`,
  );

  return data;
});

export const fetchCurrentChannelAction = createAsyncThunk<
  ChannelResponse,
  string,
  {
    extra: AxiosInstance;
    dispatch: AppDispatch;
  }
>('channel/fetchCurrentChannel', async (id, { dispatch, extra: api }) => {
  dispatch(setDataIsLoading(true));
  const { data } = await api.get<ChannelResponse>(
    `channels?part=snippet&id=${id}`,
  );
  dispatch(setDataIsLoading(false));

  return data;
});

export const fetchChannelVideosAction = createAsyncThunk<
  SuggestedItems,
  string,
  {
    extra: AxiosInstance;
    dispatch: AppDispatch;
  }
>('channel/fetchChannelVideos', async (id, { extra: api }) => {
  const { data } = await api.get<SuggestedItems>(
    `search?channelId=${id}&part=snippet&order=date`,
  );

  return data;
});
