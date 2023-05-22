import BeautyIcon from './components/icons/beauty-icon';
import ComedyIcon from './components/icons/comedy-icon';
import EducationIcon from './components/icons/education-icon';
import FashionIcon from './components/icons/fashion-icon';
import GamingIcon from './components/icons/gaming-icon';
import GymIcon from './components/icons/gym-icon';
import LiveIcon from './components/icons/live-icon';
import MovieIcon from './components/icons/movie-icon';
import MusicIcon from './components/icons/music-icon';
import NewIcon from './components/icons/new-icon';
import PodcastIcon from './components/icons/podcast-icon';
import SportIcon from './components/icons/sport-icon';
import { Category } from './types/category';

export const categories: readonly Category[] = [
  { name: 'New', icon: <NewIcon /> },
  { name: 'Movie', icon: <MovieIcon /> },
  { name: 'Music', icon: <MusicIcon /> },
  { name: 'Education', icon: <EducationIcon /> },
  { name: 'Podcast', icon: <PodcastIcon /> },
  { name: 'Gaming', icon: <GamingIcon /> },
  { name: 'Live', icon: <LiveIcon /> },
  { name: 'Sport', icon: <SportIcon /> },
  { name: 'Fashion', icon: <FashionIcon /> },
  { name: 'Beauty', icon: <BeautyIcon /> },
  { name: 'Comedy', icon: <ComedyIcon /> },
  { name: 'Gym', icon: <GymIcon /> },
];

export enum NameSpace {
  Videos = 'VIDEOS',
  App = 'APP',
  Channel = 'CHANNEL',
}
