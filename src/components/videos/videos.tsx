import {Item} from '../../types/types';
import ChannelCard from '../channel-card/channel-card';
import VideoCard from '../video-card/video-card';
import styles from './videos.module.css';

type PropsType = {
  videos: Item[];
}

function Videos({videos}: PropsType): JSX.Element {

  return (
    <ul className={styles.videosList}>
      {videos.map((item) => (
        <li className={styles.videoCard} key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard />}
        </li>
      ))}
    </ul>
  );
}

export default Videos;
