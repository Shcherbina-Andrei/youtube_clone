import PageLayout from '../page-layout/page-layout';
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './video-detail-page.module.css';
import ReactPlayer from 'react-player';
import {fetchRelatedVideos, fetchVideoDetail} from '../../utils/fetchFromAPI';
import {FilmDetail} from '../../types/video-detail';
import Videos from '../../components/videos/videos';
import { Video } from '../../types/video';
import RelatedVideos from '../../components/related-videos/related-videos';

function VideoDetailPage(): JSX.Element {
  const [videoDetail, setVideoDetail] = useState<FilmDetail | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[] | null>(null);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      fetchVideoDetail(id)
        .then((data) => setVideoDetail(data.items[0]));
      fetchRelatedVideos(id)
        .then((data) => setRelatedVideos(data.items));
    }

  },[id]);

  if (!videoDetail) {
    return (
      <div>Loading</div>
    );
  }

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;

  return (
    <PageLayout>
      <div className={styles.videoCard}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.videoWrapper}>
              <ReactPlayer className={styles.player} url={`https://www.youtube.com/watch?v=${id}`} controls />
              <h4 className={styles.videoTitle}>{title}</h4>
              <div className={styles.videoCharacteristics}>
                <Link to={`/channel/${channelId}`}>
                  <h6 className={styles.channelTitle}>
                    {channelTitle}
                  </h6>
                </Link>
                <div>
                  <p className={styles.videoViews}>{Number(viewCount).toLocaleString()} views</p>
                  <p className={styles.videoLikes}>{Number(likeCount).toLocaleString()} likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.relatedVideos}>
          {!relatedVideos
            ?
            <div>loading...</div>
            :
            <RelatedVideos videos={relatedVideos} />}
        </div>
      </div>
    </PageLayout>
  );
}

export default VideoDetailPage;
