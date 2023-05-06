import { Link } from 'react-router-dom';
import { Video } from '../../types/video';
import styles from './video-card.module.css';

type PropsType = {
  video: Video;
};

function VideoCard({ video }: PropsType): JSX.Element {
  const videoData = video.snippet;

  return (
    <div className={styles.wrapper}>
      <Link to={`/video/${video.id.videoId}`}>
        <img
          className={styles.previewImage}
          src={videoData.thumbnails.high.url}
          alt="video-preview"
          width="358"
          height="180"
        />
      </Link>
      <div className={styles.cardContent}>
        <Link to={`/video/${video.id.videoId}`} className={styles.link}>
          <h4 className={styles.videoTitle}>{videoData.title.slice(0, 60)}</h4>
        </Link>
        <Link to={`/channel/${videoData.channelId}`} className={styles.link}>
          <h5 className={styles.channelTitle}>{videoData.channelTitle}</h5>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
