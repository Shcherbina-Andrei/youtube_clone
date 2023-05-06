import { useAppSelector } from '../../hooks';
import { getRelatedVideos } from '../../store/videos-data/selectors';
import VideoCard from '../video-card/video-card';
import styles from './related-videos.module.css';

function RelatedVideos(): JSX.Element {
  const videos = useAppSelector(getRelatedVideos);

  if (videos === null) {
    return <p>loading</p>;
  }

  return (
    <div className={styles.videosList}>
      {videos.items.map((video) => (
        <li className={styles.itemCard} key={video.id.videoId}>
          <VideoCard video={video} />
        </li>
      ))}
    </div>
  );
}

export default RelatedVideos;
