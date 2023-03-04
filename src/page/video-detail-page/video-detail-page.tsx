import PageLayout from '../page-layout/page-layout';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './video-detail-page.module.css';
import ReactPlayer from 'react-player';
import RelatedVideos from '../../components/related-videos/related-videos';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentVideo, getRelatedVideos } from '../../store/videos-data/selectors';
import { fetchCurrentVideoAction, fetchRelatedVideosAction } from '../../store/api-actions';
import { getStatusDataLoading } from '../../store/app-process/selectors';

function VideoDetailPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const videoDetail = useAppSelector(getCurrentVideo);
  const relatedVideos = useAppSelector(getRelatedVideos);
  const loadingStatus = useAppSelector(getStatusDataLoading);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentVideoAction(id));
      dispatch(fetchRelatedVideosAction(id));
    }

  },[id, dispatch]);

  if (!id || !relatedVideos || !videoDetail || loadingStatus) {
    return (
      <PageLayout>
        <LoadingScreen />
      </PageLayout>
    );
  }

  const currentVideo = videoDetail.items[0];
  const currentRelatedVideos = relatedVideos.items;

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = currentVideo;

  return (
    <PageLayout>
      <div className={styles.videoCard}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.videoWrapper}>
              <ReactPlayer className={styles.player} url={`https://www.youtube.com/watch?v=${id}`} controls />
              <h4 className={styles.videoTitle}>{title}</h4>
              <div className={styles.videoCharacteristics}>
                <Link className={styles.channelLink} to={`/channel/${channelId}`}>
                  <h4 className={styles.channelTitle}>
                    {channelTitle}
                  </h4>
                </Link>
                <div>
                  <p className={styles.videoViews}>{Number(viewCount).toLocaleString()} views</p>
                  <p className={styles.videoLikes}>{Number(likeCount).toLocaleString()} likes</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.relatedVideos}>
            {!relatedVideos
              ?
              <div>loading...</div>
              :
              <RelatedVideos videos={currentRelatedVideos} />}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default VideoDetailPage;
