import {Link} from 'react-router-dom';
import styles from './video-card.module.css';
import {Item} from '../../types/types';

type PropsType = {
  video: Item;
}

function VideoCard({video}: PropsType): JSX.Element {

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img className={styles.previewImage} src={video.snippet.thumbnails.high.url} alt="video-preview" width="358" height="180" />
      </Link>
      <div className={styles.cardContent}>
        <Link to="/">{video.snippet.title.slice(0, 60)}</Link>
      </div>
    </div>
  );
}

export default VideoCard;
