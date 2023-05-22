import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Videos from '../../components/videos/videos';
import ChannelCard from '../../components/channel-card/channel-card';
import styles from './channel-detail-page.module.css';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchChannelVideosAction,
  fetchCurrentChannelAction,
} from '../../store/api-actions';
import {
  getChannelVideos,
  getCurrentChannel,
} from '../../store/channel-data/selectors';
import { getStatusDataLoading } from '../../store/app-process/selectors';
import PageNotFound from '../../components/page-not-found/page-not-found';

function ChannelDetailPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const channel = useAppSelector(getCurrentChannel);
  const channelVideos = useAppSelector(getChannelVideos);
  const loadingStatus = useAppSelector(getStatusDataLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentChannelAction(id));
      dispatch(fetchChannelVideosAction(id));
    }
  }, [id, dispatch]);

  if (!channel || !channelVideos || loadingStatus) {
    return <LoadingScreen />;
  }

  if (!channel.items) {
    return <PageNotFound />;
  }

  const channelDetail = channel.items[0];
  const videos = channelVideos.items;

  return (
    <div className={styles.channel}>
      <div className={styles.wrapper}>
        <ChannelCard channelDetail={channelDetail} channelLink="" />
      </div>
      <div className={styles.videosWrapper}>
        <Videos items={videos} />
      </div>
    </div>
  );
}

export default ChannelDetailPage;
