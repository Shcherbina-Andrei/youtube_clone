import { Link } from 'react-router-dom';
import { Channel } from '../../types/channel';
import styles from './channel-card.module.css';

type PropsType = {
  channelDetail: Channel;
}

function ChannelCard({channelDetail}: PropsType): JSX.Element {

  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={`/channel/${channelDetail.id.channelId}`}>
        <div className={styles.imageWrapper}>
          {channelDetail.snippet.thumbnails.high.url && (
            <img className={styles.previewImage} src={channelDetail.snippet.thumbnails.high.url} height="180" width="180"
              alt={channelDetail.snippet.title}
            />
          )}
        </div>
        <h4 className={styles.channelTitle}>
          {channelDetail.snippet.title}
        </h4>
        {channelDetail.statistics && (
          <p className={styles.subscribersCount}>
            {parseInt(channelDetail.statistics.subscriberCount, 10).toLocaleString('en-US')} Subscribers
          </p>
        )}
      </Link>
    </div>
  );
}

export default ChannelCard;
