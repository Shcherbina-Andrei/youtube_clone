import { Link } from 'react-router-dom';
import { Channel } from '../../types/channel';
import styles from './channel-card.module.css';

type PropsType = {
  channelDetail: Channel;
}

function ChannelCard({channelDetail}: PropsType): JSX.Element {

  return (
    <div className={styles.wrapper}>
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <img className={styles.previewImage} src={channelDetail.snippet.thumbnails.high.url} height="180" width="180"
          alt={channelDetail.snippet.title}
        />
        <h4 className={styles.channelTitle}>
          {channelDetail.snippet.title}
        </h4>
        <p className={styles.subscribersCount}>
        </p>
      </Link>
    </div>
  );
}

export default ChannelCard;
