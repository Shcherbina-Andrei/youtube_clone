import { FilmDetailResponse } from './../types/video-detail';
import { SuggestedItems } from '../types/suggested-items';
import axios from 'axios';
import { RelatedVideos } from '../types/related-videos';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url: string) => {
  const {data} = await axios.get<SuggestedItems>(`${BASE_URL}/${url}`, options);

  return data;
};

export const fetchFeed = async (selectedCategory: string) => {
  const {data} = await axios.get<SuggestedItems>(`${BASE_URL}/search?part=snippet&q=${selectedCategory}`, options);

  return data;
};

export const fetchVideoDetail = async (id: string) => {
  const {data} = await axios.get<FilmDetailResponse>(`${BASE_URL}/videos?part=snippet,statistics&id=${id}`, options);

  return data;
};

export const fetchRelatedVideos = async (id: string) => {
  const {data} = await axios.get<RelatedVideos>(`${BASE_URL}/search?part=snippet&relatedToVideoId${id}`, options);

  return data;
};
