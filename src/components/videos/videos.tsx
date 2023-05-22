import { Channel } from '../../types/channel';
import { Video } from '../../types/video';
import ChannelCard from '../channel-card/channel-card';
import VideoCard from '../video-card/video-card';
import styles from './videos.module.css';

type PropsType = {
  items: (Video & Channel)[];
};

function Videos({ items }: PropsType): JSX.Element {
  return (
    <ul className={styles.videosList}>
      {items.map((item) => (
        <li
          className={styles.itemCard}
          key={item.id.videoId || `${item.id.channelId}-channel`}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard
              channelDetail={item}
              channelLink={`/channel/${item.id.channelId}`}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Videos;
