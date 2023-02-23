import { Video } from '../../types/video';
import VideoCard from '../video-card/video-card';
import styles from './related-videos.module.css';

type PropsType = {
  videos: Video[];
}

function RelatedVideos({videos}: PropsType): JSX.Element {

  return (
    <ul className={styles.videosList}>
      {videos.map((video) => (
        <li className={styles.itemCard}
          key={video.id.videoId}
        >
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  );
}

export default RelatedVideos;
