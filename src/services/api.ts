import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const REQUEST_TIME = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIME,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  return api;
};
