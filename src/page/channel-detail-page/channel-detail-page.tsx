import PageLayout from '../page-layout/page-layout';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Videos from '../../components/videos/videos';
import ChannelCard from '../../components/channel-card/channel-card';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Channel } from '../../types/channel';
import { Video } from '../../types/video';
import styles from './channel-detail-page.module.css';

function ChannelDetailPage(): JSX.Element {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState<Channel | null>(null);
  const [videos, setVideos] = useState<(Video & Channel)[]>([]);

  useEffect(() => {
    if (id) {
      fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data.items[0]));
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data.items));
    }
  }, [id]);

  if (!channelDetail) {
    return (
      <div>Channel not found</div>
    );
  }

  return (
    <PageLayout>
      <div className={styles.channel}>
        <div className={styles.wrapper}>
          <ChannelCard channelDetail={channelDetail} />
        </div>
        <div className={styles.videosWrapper}>
          <Videos items={videos} />
        </div>
      </div>
    </PageLayout>
  );
}

export default ChannelDetailPage;
